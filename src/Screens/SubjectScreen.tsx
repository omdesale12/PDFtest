import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Sem1 from './Sem1';
import Sem2 from './Sem2';

const Tab = createMaterialTopTabNavigator();

const SubjectScreen = () => {
    const route = useRoute();
    const { params } = route;
    const navigation = useNavigation();

    const [subject, setSubject] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: params?.subjectName,
            headerTitleAlign: 'center',
        });


        setSubject(params?.subjectName);
    }, [params]);

    return (
        <View style={{ flex: 1 }}>
            {subject && (
                <Tab.Navigator
                    screenOptions={{
                        tabBarLabelStyle: {
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                        },
                        tabBarIndicatorStyle: {
                            height: 4,
                            backgroundColor: '#000000',
                        },
                    }}>
                    <Tab.Screen
                        name="Sem 1"
                        component={Sem1}
                        initialParams={{ collectionName: String(subject)}}
                    />
                    <Tab.Screen 
                        name="Sem 2" 
                        component={Sem2}
                        initialParams={{ collectionName: String(subject)}}
                    />
                </Tab.Navigator>
            )}
        </View>
    );
};

export default SubjectScreen;

const styles = StyleSheet.create({});
