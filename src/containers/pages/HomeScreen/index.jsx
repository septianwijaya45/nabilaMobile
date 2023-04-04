import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {
    BarChart, LineChart
  } from "react-native-chart-kit";
import { WARNA_ABU_ABU, WARNA_SEKUNDER, WARNA_UTAMA, windowHeight, windowWidth } from '../../../constans/constants';

const HomeScreen = () => {
    
    const navigation = useNavigation();

    return (
        <View style={styles.pages}>
            <Text style={styles.title}>Aplikasi Survey</Text>
            <View style={styles.divGraphic}>
                <View style={styles.titleMenu}>
                    <Text style={styles.textTitleMenu}>Main Menu</Text>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.subMenu1} onPress={() => { navigation.navigate('IdentitasScreen') }}>
                        <Text style={styles.textSubmenu}>Isi Survey</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMenu2} onPress={() => { navigation.navigate('GrafikScreen') }}>
                        <Text style={styles.textSubmenu}>Lihat Grafik</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    pages: {
      flex: 1,
      backgroundColor: WARNA_SEKUNDER,
    },
    title: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
        marginVertical: 10
    },
    footer: {
      height: 100,
    },
    divGraphic: {
        // backgroundColor: '#F6F1F1',  
        backgroundColor: '#F6F1F1',  
        borderRadius: 12,
        marginTop: 10,
        marginHorizontal: 5,
        height: windowHeight
    },
    titleMenu: {
        marginHorizontal: 10,
    },
    textTitleMenu: {
        fontSize: 14,
        fontFamily: 'sans-serif',
        color: '#000000',
        textAlign: 'center',
        marginTop: 30
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 50
    },
    subMenu1: {
        marginHorizontal: 10,
        width: windowWidth * 0.3,
        height: windowHeight * 0.15,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDE9D5',
        marginVertical: 12,
        borderRadius: 10
    },
    textSubmenu: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'sans-serif'
    },
    subMenu2: {
        marginHorizontal: 10,
        width: windowWidth * 0.3,
        height: windowHeight * 0.15,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDE9D5',
        marginVertical: 12,
        borderRadius: 10
    },
  });