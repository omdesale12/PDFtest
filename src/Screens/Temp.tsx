import firestore from '@react-native-firebase/firestore';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Temp() {
    const [sampleData, setSampleData] = useState([]);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const collectionsRef = firestore().collection('metadata');
                const snapshot = await collectionsRef.get();
                const collectionNames = snapshot.docs.map(doc => doc.id);
                setSampleData(collectionNames)
                console.log('Collections:', collectionNames);
            } catch (error) {
                console.error('Error fetching collections:', error);
            }
        };
    
        fetchCollections();
    }, []);
    console.log(sampleData)
    return (
        <View style={styles.container}>
        <Text>Sample Data:</Text>
        {sampleData.map((data, index) => (
            <View key={index} style={styles.item}>
                <Text>{data.Name}</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'blue' }}>Open PDF</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        marginVertical: 10,
    },
});
