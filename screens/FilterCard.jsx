import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from "react";
import { URI } from "../config";


export default function FilterCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Фильтр', { id: props.id });
    };

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: `${URI}/api/filters/${props.id}/image` }}
                resizeMode='stretch'
            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.text}>{props.name}</Text>
                </View>
            </View>
            <Button title='Подробнее' onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#72089c',
        borderRadius: 12,
        gap: 12,
        margin: 8,
        overflow: 'hidden',
        height: 350,
    },
    image: { height: 250, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8, alignItems: 'center' },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    text: { color: '#f0f0f0', fontSize: 18 },
});