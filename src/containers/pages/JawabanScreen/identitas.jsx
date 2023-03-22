import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Button, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/core';
import {
    BarChart, LineChart
  } from "react-native-chart-kit";
import { WARNA_ABU_ABU, WARNA_SEKUNDER, WARNA_TEXT, WARNA_TEXT_WELCOME, WARNA_UTAMA, windowHeight, windowWidth } from '../../../constans/constants';

const IdentitasScreen = () => {
  const navigation = useNavigation();

    return (
        <ScrollView style={styles.pages}>
            <Text style={styles.title}>Masukkan Identitas Diri</Text>
            <View style={styles.form}>
              <View >
                <Text>Nama</Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.inputForm2}
                    placeholder="Masukkan Nama"
                    placeholderTextColor={WARNA_TEXT_WELCOME}
                    width="100%"
                  />
                </View>
              </View>
              <View>
                <Text>Telepon</Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.inputForm2}
                    placeholder="Masukkan Nomor Telepon"
                    keyboardType='numeric'
                    placeholderTextColor={WARNA_TEXT_WELCOME}
                    width="100%"
                  />
                </View>
              </View>
              <View>
                <Text>Alamat</Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.inputArea}
                    placeholder="Masukkan Alamat Anda"
                    multiline={true}
                    numberOfLines={10}
                    placeholderTextColor={WARNA_TEXT_WELCOME}
                    width="100%"
                  />
                </View>
              </View>
              <View style={{justifyContent: 'flex-start', flexDirection: 'row', display: 'flex', textAlign: 'right', width: windowWidth}}>
                <View >
                  <Button type="Text" title="Batalkan" color={'red'} onPress={() => {
                    return Alert.alert(
                        'Peringatan',
                        'Apakah Anda Ingin Membatalkan Survey?',
                        [
                            {text: 'Tidak'},
                            {text: 'Ya', onPress: () => navigation.navigate('HomeScreen')}
                        ]
                    )
                  }} />
                </View>
                <View style={{marginLeft: windowWidth * 0.3}}>
                  <Button type="Text" title="Selanjutnya" onPress={() => navigation.navigate('PertanyaanScreen')} />
                </View>
              </View>
            </View>
        </ScrollView>
    )
}

export default IdentitasScreen

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
    form: {
      marginVertical: 25,
      marginHorizontal: 25,
    },
    inputForm2: {
      borderWidth: 1,
      borderColor: WARNA_TEXT,
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 18,
      marginVertical: 8,
      fontSize: 14,
      color: WARNA_TEXT,
      backgroundColor: '#B0F7F9',
    },
    inputArea: {
      borderWidth: 1,
      borderColor: WARNA_TEXT,
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 18,
      marginVertical: 8,
      fontSize: 14,
      color: WARNA_TEXT,
      backgroundColor: '#B0F7F9',
      justifyContent: 'flex-start',
    }
  });