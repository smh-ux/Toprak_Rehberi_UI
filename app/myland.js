import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const info = ({name, city, town, area, setScreen}) => (
  <View style={styles.mylands_content}>
    <View style={styles.mylands_content_container}>
      <Text style={styles.mylands_content_title}>Arazi Tipi:</Text>
      <Text style={styles.mylands_content_text}>{name}</Text>
    </View>
    <View style={styles.mylands_content_container}>
      <Text style={styles.mylands_content_title}>Şehir:</Text>
      <Text style={styles.mylands_content_text}>{city}</Text>
    </View>
    <View style={styles.mylands_content_container}>
      <Text style={styles.mylands_content_title}>İlçe:</Text>
      <Text style={styles.mylands_content_text}>{town}</Text>
    </View>
    <View style={styles.mylands_content_container}>
      <Text style={styles.mylands_content_title}>Alan:</Text>
      <Text style={styles.mylands_content_text}>{area} m2</Text>
    </View>
  </View>
);

const MyLandScreen = ({ setScreen }) => {
  
  const info_data = [
    {name: 'Tarla', city: 'Ankara', town: 'Polatlı', area: '1000'},
    {name: 'Bağ', city: 'Ankara', town: 'Gölyaka', area: '1500'},
    {name: 'Bahçe', city: 'Ankara', town: 'Sincan', area: '1000'}
  ];

  return(
    <SafeAreaView style={styles.myland_container}>
      <View style={styles.myland_header}>
        <Text style={styles.myland_header_title}>Arazilerim</Text> 
      </View>
      <View style={styles.mylands}>   
          {info_data.length > 0 ? (
            info_data.map((item, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity onPress={() => setScreen('MyLandInfoScreen')}> 
                  {info(item)}
                </TouchableOpacity>
              </React.Fragment>
            ))) : (
              <></>
          )}
          <TouchableOpacity style={styles.add_button} onPress={() => setScreen('LandAddScreen')}>
            <Text style={styles.add_button_text}>Ekle</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
  // const [land, setLand] = useState([]);

  // useEffect(() => {
  //   const fetchLands = async () => {
  //     try {
  //       const response = await axios.get('http://192.168.125.44:8081/api/lands');
  //       setLands(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchLands();

  // }, []); 
}

const styles = StyleSheet.create({  
  myland_container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
  },
  
  myland_header: {
    width: WIDTH,
    height: 80,
    borderBottomColor: '#FFF',
    borderWidth: 1,
  },

  myland_header_title: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 'auto'
  },

  mylands: {
    width: WIDTH,
    height: 100,
    marginTop: 25,
    zIndex: 1,
  },

  mylands_content: {
    width: WIDTH-40,
    height: 150,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 300,
    borderBottomRightRadius: 300,
    marginLeft: 20,
    marginTop: 20,
    zIndex: 5,
  },

  mylands_content_container: {
    flexDirection:'row',
    margin:'auto'
  },

  mylands_content_title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  mylands_content_text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  },

  add_button: {
    flexDirection: 'column',
    width: WIDTH-40,
    height: 70,
    marginLeft: 20,
    borderRadius: 50,
    backgroundColor: '#FFF',
    marginTop: 20
  },

  add_button_text: {
    color: '#000',
    margin: 'auto',
    fontWeight: 'bold',
    fontSize: 25
  }

});

export default MyLandScreen;