import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GrafikScreen from '../../containers/pages/GrafikScreen';
import HomeScreen from '../../containers/pages/HomeScreen';
import IdentitasScreen from '../../containers/pages/JawabanScreen/identitas';
import PertanyaanScreen from '../../containers/pages/JawabanScreen/pertanyaan';

const Stack = createNativeStackNavigator()


const Router = () => {
    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IdentitasScreen"
          component={IdentitasScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PertanyaanScreen"
          component={PertanyaanScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GrafikScreen"
          component={GrafikScreen}
          options={{headerTitle: 'Grafik Survei'}}
        />
      </Stack.Navigator>
    );
  };

export default Router