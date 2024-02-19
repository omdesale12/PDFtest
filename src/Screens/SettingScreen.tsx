import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ffffff",
    height:"100%",
  }
})