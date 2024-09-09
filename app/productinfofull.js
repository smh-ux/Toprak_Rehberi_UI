import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { AuthContext } from './authprovider';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ProductInfoFullScreen = ({ route, navigation }) => {

  const { item } = route.params;
  const [infoFull, setInfoFull] = useState('');

  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (!authData) {
  //     navigation.navigate('Login');
  //   }
  // }, [authData]);

  const getImageSource = (imgPath) => {
    switch (imgPath) {
      case '../assets/images/domates.jpg':
        return require('../assets/images/domates.jpg');
      case '../assets/images/biber.jpg':
        return require('../assets/images/biber.jpg');
      case '../assets/images/fasulye.jpg':
        return require('../assets/images/fasulye.jpg');
      case '../assets/images/arpa.jpg':
        return require('../assets/images/arpa.jpg');
      case '../assets/images/buğday.jpg':
        return require('../assets/images/buğday.jpg');
      case '../assets/images/bamya.jpg':
        return require('../assets/images/bamya.jpg');
      case '../assets/images/patates.jpg':
        return require('../assets/images/patates.jpg');
      case '../assets/images/soğan.jpg':
        return require('../assets/images/soğan.jpg');
      case '../assets/images/patlıcan.jpg':
        return require('../assets/images/patlıcan.jpg');
      case '../assets/images/mısır.jpg':
        return require('../assets/images/mısır.jpg');
      default:
        return "empty";
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={getImageSource(item.img)}
              style={styles.image}
            />
            <Text style={styles.text}>
              {item.description}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFF'
  },

  card: {
    width: WIDTH - 40,
    height: HEIGHT-HEIGHT/4,
    backgroundColor: '#eee',
    marginLeft: 20,
    borderRadius: 20,
  },

  image: {
    width: WIDTH - 40,
    height: HEIGHT / 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  text: {
    color: '#000',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ProductInfoFullScreen;
