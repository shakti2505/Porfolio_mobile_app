import { StyleSheet, Text, View, SafeAreaView , ScrollView} from 'react-native'
import React from 'react'

// navgation
import {  NavigationContainer} from "@react-navigation/native";
import {  createNativeStackNavigator} from "@react-navigation/native-stack";

// screen
import HomePage from './components/HomePage'
import Slider from './components/Slider';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Work from './components/Work';



export type RootStackParamList = {
  Home: undefined,
  Slider:undefined,
  About:undefined,
  ContactForm:undefined,
  WorK:undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer >
      <Stack.Navigator>
    <Stack.Screen
    options={{
      headerShown:false,
        headerStyle:{
          backgroundColor:'#000'
        }
    }}
    name='Home'
    component={HomePage}
    />
     <Stack.Screen
    name='Slider'
    component={Slider}
    options={{
      headerShown:false
    }}
    />
     <Stack.Screen
    options={{
      headerShown:false,
        headerStyle:{
          backgroundColor:'#000'
        }
    }}
    name='About'
    component={About}
    />
     <Stack.Screen
    options={{
      headerShown:false,
        headerStyle:{
          backgroundColor:'#000'
        }
    }}
    name='ContactForm'
    component={ContactForm}
    />
      <Stack.Screen
    options={{
      headerShown:false,
        headerStyle:{
          backgroundColor:'#000'
        }
    }}
    name='WorK'
    component={Work}
    />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView>
    //   <ScrollView>
    //     <HomePage/>
    //   </ScrollView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({})