import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
import { AuthContext } from './authprovider';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ProductInfoScreen = ({ navigation }) => {

  const [info, setInfo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.125.44:8080/api/productinfo/fetch`
        );
        setInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
        <FlatList
        data={info}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            img={getImageSource(item.img)}
            text={item.description}
            direction={() => navigation.navigate('ProductInfoFull', {item})}
          />
        )}
        />
        <View style={{ height: 170, zIndex: 5}}></View>
      </View>
    </SafeAreaView>
  );
};

const Card = ({ title, img, text, direction }) => {
  return (
    <TouchableOpacity onPress={direction}>
      <View style={styles.card}>
        <Image source={img} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: WIDTH,
    height: HEIGHT,
  },

  card: {
    width: WIDTH - 50,
    height: 350,
    backgroundColor: '#FFF',
    borderRadius: 30,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 25,
    zIndex: 2,
  },

  image: {
    width: WIDTH - 50,
    height: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },

  text: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ProductInfoScreen;
