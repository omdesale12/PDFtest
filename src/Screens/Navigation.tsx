import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PDFViewer from './PDFViwer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import NotesScreen from './NotesScreen';
import PDFViewer from './PDFViwer';
import SettingScreen from './SettingScreen';
import SubjectScreen from './SubjectScreen';
import { Image } from 'react-native-svg';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createBottomTabNavigator();
const NotesStack = createNativeStackNavigator();


const NotesStackGroup = () => {
    const navigation = useNavigation();
    
    return (
        <NotesStack.Navigator>
            <NotesStack.Screen name='BottomTabGroup' component={BottomTabGroup}
                options={{
                    headerShown: false
                }}
            ></NotesStack.Screen>
            <NotesStack.Screen name='SubjectScreen' component={SubjectScreen}
                options={{
                    animation: 'slide_from_right',
                    headerRight: () => (
                        <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        >
                            <AntDesign name={'home'} size={30} color={'#000000'} />
                        </TouchableOpacity>
                      ),
                }}
            ></NotesStack.Screen>
            <NotesStack.Screen name="Pdf" component={PDFViewer}></NotesStack.Screen>
        </NotesStack.Navigator>
    )
}



const BottomTabGroup = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                headerStyle:{
                    backgroundColor:'#0000',
                    height:50,
                },
                headerRight: () => {
                    return(
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <AntDesign name={'user'} size={25} color={'black'} />
                    </TouchableOpacity>)
                },  
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#EEEEEE',
                    height: 60,
                    paddingTop: 5,
                    paddingBottom: 6,
                    borderTopWidth: 0,
                    margin:10,
                    borderRadius:15,

                },
                tabBarLabelStyle:{
                    color:'black',
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconColor = focused ? 'blue' : 'gray';
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'NotesScreen') {
                        iconName = focused ? 'folderopen' : 'folder1';
                    } else if (route.name === 'Settings') {
                        iconName = 'setting';
                    }

                    const backgroundColor = focused ? 'black' : 'gray';
                    const sizeIcon = focused ? 30 : 25
                    return (

                        <AntDesign name={iconName} size={sizeIcon} color={backgroundColor} />

                    );
                }
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='NotesScreen'  component={NotesScreen} options={{
                tabBarLabel:"Notes",
                headerTitle:"Notes"
            }} />
            <Tab.Screen name='Settings' component={SettingScreen} />

        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NotesStackGroup/>
    )
}

export default Navigation

const styles = StyleSheet.create({})