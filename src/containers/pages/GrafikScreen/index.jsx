import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';
import {View, Text, StyleSheet, Alert, ScrollView, ActivityIndicator} from 'react-native'
import {
    PieChart, LineChart
  } from "react-native-chart-kit";
import { WARNA_ABU_ABU, WARNA_SEKUNDER, WARNA_UTAMA, windowHeight, windowWidth } from '../../../constans/constants';

const GrafikScreen = () => {
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(true);
    const [p1, setP1] = useState(0);
    const [p2, setP2] = useState(0);
    const [p3, setP3] = useState(0);
    const [p4, setP4] = useState(0);
    const [p5, setP5] = useState(0);
    const [p6, setP6] = useState(0);
    const [p7, setP7] = useState(0);
    const [p8, setP8] = useState(0);
    const [p9, setP9] = useState(0);
    const [s1, setS1] = useState(0);
    const [s2, setS2] = useState(0);
    const [s3, setS3] = useState(0);
    const [s4, setS4] = useState(0);
    const [s5, setS5] = useState(0);
    const [s6, setS6] = useState(0);
    const [s7, setS7] = useState(0);
    const [s8, setS8] = useState(0);
    const [s9, setS9] = useState(0);
    const [skm1, setSkm1] = useState(0);
    const [skm2, setSkm2] = useState(0);
    const [skm3, setSkm3] = useState(0);
    const [skm4, setSkm4] = useState(0);
    const [skm5, setSkm5] = useState(0);
    const [skm6, setSkm6] = useState(0);
    const [skm7, setSkm7] = useState(0);
    const [skm8, setSkm8] = useState(0);
    const [skm9, setSkm9] = useState(0);
    const [skmTotal, setSkmTotal] = useState(0);
    const [respondenTotal, setRespondenTotal] = useState(0);

    useEffect(() => {
      dataResponden()
      dataSKM()
      setIsLoading(false)
    }, [])

    // Get Data Responden Answer//
    const dataResponden = () => {
      axios.get('http://192.168.1.6:80/nabilaWebApp/api/data-pie-terjawab')
        .then(res => {
          if(res.data.status == true){
            setP1(res.data.p1);
            setP2(res.data.p2);
            setP3(res.data.p3);
            setP4(res.data.p4);
            setP5(res.data.p5);
            setP6(res.data.p6);
            setP7(res.data.p7);
            setP8(res.data.p8);
            setP9(res.data.p9);
            setS1(res.data.s1);
            setS2(res.data.s2);
            setS3(res.data.s3);
            setS4(res.data.s4);
            setS5(res.data.s5);
            setS6(res.data.s6);
            setS7(res.data.s7);
            setS8(res.data.s8);
            setS9(res.data.s9);
          }
        })
        .catch(error => {
          console.log(error)
          Alert.alert('Error!', 'Network Error!');
        })
    }    
    // End of Get Data Responden Answer //

    // Get Data Responden Answer//
    const dataSKM = () => {
      axios.get('http://192.168.1.6:80/nabilaWebApp/api/data-pie-skm')
      .then(res => {
        if(res.data.status == true){
          setSkm1(res.data.skmP1)
          setSkm2(res.data.skmP2)
          setSkm3(res.data.skmP3)
          setSkm4(res.data.skmP4)
          setSkm5(res.data.skmP5)
          setSkm6(res.data.skmP6)
          setSkm7(res.data.skmP7)
          setSkm8(res.data.skmP8)
          setSkm9(res.data.skmP9)
          setSkmTotal(res.data.skmTotal)
          setRespondenTotal(res.data.respondenTotal)
        }
      })
      .catch(error => {
        console.log(error)
        Alert.alert('Error!', 'Network Error!');
      })
    } 
    // End of Get Data Responden Answer //

    

    // Configure UI Pie Chart //
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    // End of Configure UI Pie Chart //
    
    // Data Responden Answer //
    const data = [
        {
          name: "P1",
          population: p1,
          color: "#57C5B6",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P2",
          population: p2,
          color: "#002B5B",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P3",
          population: p3,
          color: "#000000",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P4",
          population: p4,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P5",
          population: p5,
          color: "#B8621B",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P6",
          population: p6,
          color: "#E3CCAE",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P7",
          population: p7,
          color: "#7AA874",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P8",
          population: p8,
          color: "#D864A9",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P9",
          population: p9,
          color: "#E11299",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
      ];
    // End of Data Responden Answer //

    // Data Responden SKM //
    const data_skm = [
        {
          name: "P1",
          population: skm1,
          color: "#57C5B6",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P2",
          population: skm2,
          color: "#002B5B",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P3",
          population: skm3,
          color: "#000000",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P4",
          population: skm4,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P5",
          population: skm5,
          color: "#B8621B",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P6",
          population: skm6,
          color: "#E3CCAE",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P7",
          population: skm7,
          color: "#7AA874",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P8",
          population: skm8,
          color: "#D864A9",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "P9",
          population: skm9,
          color: "#E11299",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
      ];
    // End of Data Responden SKM //

    return (
        <ScrollView style={styles.pages}>
            {isLoading ? (<View><ActivityIndicator/></View>): (
        <>
          <View style={styles.divGraphic}>
            <View style={styles.titleGraphic}>
              <Text style={styles.textGraphic}>Persentase Responden Menjawab</Text>
            </View>
          <View style={styles.graphic}>
            <PieChart
              data={data}
              width={windowWidth * 0.8}
              height={windowHeight * 0.34}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[5, 10]} />
          </View>
          <View style={styles.titleGraphic}>
            <Text style={styles.textGraphic2}>Keterangan</Text>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textGraphic3}>P1: <Text>{s1}</Text> <Text style={styles.textGraphic4}>{`(Total Terjawab: ${p1})`}</Text></Text>
              <Text style={styles.textGraphic3}>P2: <Text>{s2}</Text> <Text style={styles.textGraphic4}>{`(Total Terjawab: ${p2})`}</Text></Text>
              <Text style={styles.textGraphic3}>P3: <Text>{s3}</Text> <Text style={styles.textGraphic4}>{`(Total Terjawab: ${p3})`}</Text></Text>
              <Text style={styles.textGraphic3}>P4: <Text>{s4}</Text> <Text style={styles.textGraphic4}>{`(Total Terjawab: ${p4})`}</Text></Text>
              <Text style={styles.textGraphic3}>P5: <Text>{s5}</Text> <Text style={styles.textGraphic4}>{`(Total Terjawab: ${p5})`}</Text></Text>
              <Text style={styles.textGraphic3}>P6: <Text>{s6}</Text> <Text style={styles.textGraphic4}>{`(Total Terjawab: ${p6})`}</Text></Text>
              <Text style={styles.textGraphic3}>P7: <Text>{s7}</Text> <Text style={styles.textGraphic4}>{`(Total Terjawab: ${p7})`}</Text></Text>
              <Text style={styles.textGraphic3}>P8: <Text>{s8}</Text> <Text style={styles.textGraphic4}>{`(Total Terjawab: ${p8})`}</Text></Text>
              <Text style={styles.textGraphic3}>P9: <Text>{s9}</Text> <Text style={styles.textGraphic4}>{`(Total Terjawab: ${p9})`}</Text></Text>
            </View>
          </View>
        </View><View style={styles.divGraphic2}>
            <View style={styles.titleMenu}>
              <Text style={styles.textTitleMenu}>Persentase Kepuasan Masyarakat (Responden)</Text>
            </View>
            <View style={styles.graphic}>
              <PieChart
                data={data_skm}
                width={windowWidth * 0.8}
                height={windowHeight * 0.34}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 10]} />
            </View>
            <View style={styles.titleGraphic}>
              <Text style={styles.textGraphic2}>Persentase Survei Kepuasan Masyarakat (SKM)</Text>
              <View style={{ marginTop: 5 }}>
                <Text style={styles.textGraphic3}>Pertanyaan Ke 1: <Text>{skm1}%</Text></Text>
                <Text style={styles.textGraphic3}>Pertanyaan Ke 2: <Text>{skm2}%</Text></Text>
                <Text style={styles.textGraphic3}>Pertanyaan Ke 3: <Text>{skm3}%</Text></Text>
                <Text style={styles.textGraphic3}>Pertanyaan Ke 4: <Text>{skm4}%</Text></Text>
                <Text style={styles.textGraphic3}>Pertanyaan Ke 5: <Text>{skm5}%</Text></Text>
                <Text style={styles.textGraphic3}>Pertanyaan Ke 6: <Text>{skm6}%</Text></Text>
                <Text style={styles.textGraphic3}>Pertanyaan Ke 7: <Text>{skm7}%</Text></Text>
                <Text style={styles.textGraphic3}>Pertanyaan Ke 8: <Text>{skm8}%</Text></Text>
                <Text style={styles.textGraphic3}>Pertanyaan Ke 9: <Text>{skm9}%</Text></Text>
              </View>
            </View>
            <View style={styles.titleGraphic}>
              <Text style={[styles.textGraphic2, { fontWeight: 'bold' }]}>Persentase SKM & Responden</Text>
              <View style={styles.titleGraphic2}>
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <Text>Persentase SKM</Text>
                  <Text style={{ fontWeight: 'bold' }}>{skmTotal}%</Text>
                </View>
                <View style={{ width: '50%', alignItems: 'center' }}>
                  <Text>Total Responden</Text>
                  <Text style={{ fontWeight: 'bold' }}>{respondenTotal}</Text>
                </View>
              </View>
            </View>
          </View>
        </>
            )}
        </ScrollView>
    )
}

export default GrafikScreen

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
        backgroundColor: '#F6F1F1',  
        borderRadius: 12,
        marginTop: 10,
        marginHorizontal: 5,
        height: windowHeight * 0.9
    },
    divGraphic2: {
        backgroundColor: '#F6F1F1',  
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        height: windowHeight * 0.8
    },
    titleGraphic: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    titleGraphic2: {
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row'
    },
    textGraphic: {
        color: '#000000',
        fontSize: 12,
        fontFamily: 'sans-serif',
        textAlign: 'center'
    },  
    textGraphic2: {
        color: '#000000',
        fontSize: 12,
        fontFamily: 'sans-serif'
    },  
    textGraphic3: {
        color: '#000000',
        fontSize: 12,
        fontFamily: 'serif'
    },  
    textGraphic4: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },  
    graphic: {
        marginHorizontal: 10,
        alignItems: 'center'
    },
    titleMenu: {
        marginHorizontal: 10,
    },
    textTitleMenu: {
        fontSize: 14,
        fontFamily: 'sans-serif',
        color: '#000000',
        textAlign: 'center'
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center'
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