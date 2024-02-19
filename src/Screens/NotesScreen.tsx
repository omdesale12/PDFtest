import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Subjects from '../Data/Subject'; 
import Topics from '../Data/TopicsList';
import { ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function NotesScreen() {
    const navigation = useNavigation();

    const navigateToChapter = (subjectName: string) => {
        navigation.navigate('SubjectScreen', { subjectName: subjectName });
    };

    return (
        <ScrollView style={styles.main}>
            <SafeAreaView style={styles.container}>
                {Topics.map((topic, index) => (
                    <TouchableOpacity key={index} style={styles.card} onPress={()=>navigateToChapter(topic.title)}>
                        <Text style={styles.cardtitle}>{topic.title}</Text>
                    </TouchableOpacity>
                ))}
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"#ffffff"
    },
    container: {
        alignItems: 'center',
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:"#ffffff",

    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 20, // Added margin on the left and right
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:'100%',
        
    },
    cardtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        textAlign:'center',
    },

});
