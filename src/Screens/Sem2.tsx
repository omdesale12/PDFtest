import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Subjects from '../Data/Subject';
import firestore from '@react-native-firebase/firestore';

export default function Sem1() {
  const navigation = useNavigation();
  const route = useRoute();


  const [chapter, setChatpters] = useState([]);

  
  
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collectionName = route.params.collectionName;
        console.log(collectionName);
        const querySnapshot = await firestore().collection(collectionName).get();
        const documents = querySnapshot.docs.map(doc => doc.data());
        const filteredDocuments = documents.filter(doc => doc.semester === '2');
        setChatpters(filteredDocuments)
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchCollections();
  }, []);

  const viewPDf=(file_path:string,Chapter_Name:string)=>{
    console.log(file_path)
    navigation.navigate('Pdf',{file_path:file_path,Chapter_Name:Chapter_Name});
  }
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    // <Text style={{ fontSize: 24, color:'black'}}>Chapter:</Text>

    // <Button title='Open' onPress={onPressHandler} />
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {chapter.map((chapterItem, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={()=>viewPDf(chapterItem.file_path,chapterItem.Chapter_Name)} >
            <Text style={styles.cardtitle}>{chapterItem.Chapter_Name}</Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,

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
    width: '100%',

  },
  cardtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
})