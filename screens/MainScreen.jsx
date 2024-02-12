import { View, Button, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../toolkit/filterSlice';
import axios from 'axios';
import { URI } from '../config';
import FilterCard from './FilterCard';

export default function MainScreen({ navigation }) {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.toolkit.filters)

    useEffect(() => {
        async function getAllFilters() {
            const response = await axios.get(`${URI}/api/filters/?name=`)
            dispatch(setFilters(response.data.filters))
        }
        getAllFilters();
    }, [dispatch])

    return (
        <ScrollView>
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
});