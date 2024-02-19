import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import { useNavigation, useRoute } from '@react-navigation/native';

const PDFViewer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { params } = route;

  const file_path = route.params.file_path;
  const [loading, setLoading] = useState(true);
  const [totalPage,setTotalPage]=useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const source = { uri: file_path, cache: false };


  useEffect(()=>{
    navigation.setOptions({
      headerTitle: params?.Chapter_Name,
    })
  },[])



  const ActivityLoading = () => {
    return(
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={60} color="#000000" />
      <Text style={{color:'black',fontSize:15}}>Loading Notes......</Text>
    </View>)
  }
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        trustAllCerts={false}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
          setTotalPage(numberOfPages)
        }}
        enablePaging
        horizontal

        renderActivityIndicator={(progress) => ActivityLoading()}
        onPageChanged={(page, numberOfPages) => {
          setCurrentPage(page);
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {

        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
      <View style={styles.pageNumberContainer}>
        <Text style={styles.pageNumberText}>{currentPage}/{totalPage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    width: Dimensions.get('window').width,
    height:650,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageNumberContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
  },
  pageNumberText: {
    color: 'white',
    fontWeight:'900'
  },
});

export default PDFViewer;
