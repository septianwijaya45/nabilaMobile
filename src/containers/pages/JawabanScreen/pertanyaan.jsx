import React, { useState } from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/core';
import {
    BarChart, LineChart
  } from "react-native-chart-kit";
import { RadioButtons } from 'react-native-radio-buttons'
import RadioForm from 'react-native-simple-radio-button';
import { WARNA_ABU_ABU, WARNA_SEKUNDER, WARNA_TEXT, WARNA_TEXT_WELCOME, WARNA_UTAMA, windowHeight, windowWidth } from '../../../constans/constants';

function renderOption(option, selected, onSelect, index){
    const style = selected ? { fontWeight: 'bold'} : {};
 
    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index} style={{color: '#000000'}}>
        <Text style={{color: '#000000'}}>{option}</Text>
      </TouchableWithoutFeedback>
    );
}

function renderContainer(optionNodes){
    return <View>{optionNodes}</View>;
}

const PertanyaanScreen = ({route}) => {
  const {id} = route.params
  // state
  const [pilihan1, setPilihan1] = useState('');
  const [pilihan2, setPilihan2] = useState('');
  const [pilihan3, setPilihan3] = useState('');
  const [pilihan4, setPilihan4] = useState('');
  const [pilihan5, setPilihan5] = useState('');
  const [pilihan6, setPilihan6] = useState('');
  const [pilihan7, setPilihan7] = useState('');
  const [pilihan8, setPilihan8] = useState('');
  const [pilihan9, setPilihan9] = useState('');
  const [pertanyaan, setPertanyaan] = useState([]);

  const navigation = useNavigation();
  const opsi = [
    {label: "Tidak Memuaskan", value: 1},
    {label: "Kurang Memuaskan", value: 2},
    {label: "Memuaskan", value: 3},
    {label: "Sangat Memuaskan", value: 4}
  ]

  // axios get pertanyaan
  if(pertanyaan == ''){
    axios.get('http://192.168.1.6:80/nabilaWebApp/api/pertanyaan')
      .then(res => {
        setPertanyaan(res.data.data)
      })
      .catch(err => {
        Alert.alert('Error!', 'Network Error!')
        console.log(err);
      })
  }

  const HomeScreen = () => {
    axios.delete('http://192.168.1.6:80/nabilaWebApp/api/delete-responden/'+id)
      .then(res => {
        if(res.data.status == true){
          navigation.navigate('HomeScreen')
        }else{
          Alert.alert('Error!', 'Network Error!', [
            {text: 'ok'}
          ]);
        }
      });
  }

  const Pertanyaan = []
  for (let i = 0; i < pertanyaan.length; i++) {
      Pertanyaan.push(
        <View style={{flexDirection: 'column'}} key={pertanyaan[i].id_kategori}>
          <View>
            <Text style={{color: '#000000'}}>{i+1} <Text>{pertanyaan[i].nama_kategori}</Text></Text>
          </View>
          <View>
            <RadioForm
              // animation={true}
              radio_props={opsi}
              labelColor={'red'}
              buttonOuterColor={'red'}
              initial={0} //initial value of this group
              onPress={(value) => {
                if(i == 0){
                  setPilihan1(value);
                }else if(i == 1){
                  setPilihan2(value)
                }else if(i == 2){
                  setPilihan3(value)
                }else if(i == 3){
                  setPilihan4(value)
                }else if(i == 4){
                  setPilihan5(value)
                }else if(i == 5){
                  setPilihan6(value)
                }else if(i == 6){
                  setPilihan7(value)
                }else if(i == 7){
                  setPilihan8(value)
                }else{
                  setPilihan9(value)
                }
              }} //if the user changes options, set the new value
            />
          </View>
        </View>
      )
  }


  const PostJawaban = () => {
    data = {
      id,
      pilihan1,
      pilihan2,
      pilihan3,
      pilihan4,
      pilihan5,
      pilihan6,
      pilihan7,
      pilihan8,
      pilihan9
    }
    axios.post('http://192.168.1.6:80/nabilaWebApp/api/post-jawaban', data)
      .then(res => {
        if(res.data.status == true){
          Alert.alert('Berhasil!', 'Berhasil Menambahkan Responden!', [
            {
              text: 'Ok',
              onPress: () => {
                navigation.push('HomeScreen');
              },
            },
          ]);
        }
        else{
          Alert.alert('Gagal!', 'Network Error!');
        }
      })
  }

  return (
      <ScrollView style={styles.pages}>
          <Text style={styles.title}>Pertanyaan Survei</Text>
          <View style={styles.form}>
            <View>
              {Pertanyaan}
              {/* <RadioForm
                  radio_props={opsi}
                  initial={0} //initial value of this group
                  onPress={(value) => {
                    // if(i == 0){
                      setPilihan1(value);
                    // }
                  }} //if the user changes options, set the new value
              /> */}
            </View>
            <View style={{justifyContent: 'flex-start', flexDirection: 'row', display: 'flex', textAlign: 'right', width: windowWidth}}>
              <View >
                <Button type="Text" title="Batalkan" color={'red'} onPress={() => {
                  return Alert.alert(
                      'Peringatan',
                      'Apakah Anda Ingin Membatalkan Survey?',
                      [
                          {text: 'Tidak'},
                          {text: 'Ya', onPress: () => HomeScreen()}
                      ]
                  )
                }} />
              </View>
              <View style={{marginLeft: windowWidth * 0.3}}>
                <Button type="Text" title="Selanjutnya" onPress={() => PostJawaban()} />
              </View>
            </View>
          </View>
      </ScrollView>
  )
}

export default PertanyaanScreen

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