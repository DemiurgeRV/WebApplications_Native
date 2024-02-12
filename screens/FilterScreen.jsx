import { View, Text, Image, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { URI } from "../config";
import { resetFilter, setFilter } from '../toolkit/filterSlice';

export default function FilterScreen({ route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.toolkit.filter);

    useEffect(() => {
        async function getFilter() {
            const response = await axios.get(`${URI}/api/filters/${id}`)
            dispatch(setFilter(response.data))
        }
        getFilter();
        return () => {
            dispatch(resetFilter())
        }
    }, [dispatch])

    return (
        <View style={styles.page}>
            <Image
                style={styles.image}
                source={{ uri: `${URI}/api/filters/${filter.id}/image` }}
                resizeMode='stretch'
            />
            <Text style={styles.name}>{filter.name}</Text>
            <Text style={styles.description}>{filter.description}</Text>
            <Text style={styles.price}>Цена: {filter.price}₽</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#72089c',
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8, alignItems: 'center' },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    name: { color: '#fff', fontSize: 26, padding: 20, },
    description: { color: '#fff', fontSize: 16, padding: 20, },
    price: { color: '#fff', fontSize: 16, padding: 20, },
});