import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../toolkit/filterSlice';
import axios from 'axios';
import { URI } from '../config';
import FilterCard from './FilterCard';

export default function MainScreen({ navigation }) {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.toolkit.filters)
    const [searchFilter, setSearchFilter] = useState('')

    const handleSearch = (query) => {
        setSearchFilter(query);
    }

    useEffect(() => {
        async function getAllFilters() {
            const response = await axios.get(`${URI}/api/filters/?search-filter=${searchFilter}`)
            dispatch(setFilters(response.data.filters))
        }
        getAllFilters();
    }, [searchFilter, dispatch])

    return (
        <ScrollView>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder='Поиск'
                    value={searchFilter}
                    onChangeText={(text) => handleSearch(text)}
                />
            </View>
            <View style={styles.page}>
                {!!filters && filters.map((filter) => (<FilterCard key={filter.id} {...filter} navigation={navigation}/>))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292929',
        padding: 20,
    },
    input: {
        width: '80%',
        height: 36,
        backgroundColor: '#ffffff',
        borderColor: '#f0b71d',
        borderWidth: 2,
        paddingHorizontal: 12,
        paddingVertical: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#292929',
        borderRadius: 18,
        fontSize: 16,
    },
    search: { backgroundColor: '#292929', padding: 20},
});