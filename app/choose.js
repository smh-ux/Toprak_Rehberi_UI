import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ChooseScreen = ({ navigation }) => {

  useEffect (() => {
    const authChoose = async () => {
      try{
        const all = await AsyncStorage.getAllKeys();
        const value = await AsyncStorage.getItem('userToken');
        const id = await AsyncStorage.getItem('userId');
        if (value !== null) {
          console.log("Value: ", value);
        } else {
          console.log("Value undefined");
        }
        if (all !== null) {
          console.log("All: ", all);
        } else {
          console.log("All undefined");
        }
        if (id !== null) {
          console.log("ID: ", id);
        } else {
          console.log("ID undefined")
        }
        if (value == null && id == null) {
          navigation.navigate('Login');
        }
      } catch(e) {
        console.log(e);
      }
    };

    authChoose();
  }, []);

  return(
    <SafeAreaView>
    <View style={styles.container}>
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('MyLand')}>
        <View style= {styles.card}>
          <Image
            source={require('../assets/images/planting.jpg')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyLandHarvest')}>
        <View style={styles.card}>
        <Image
          source={require('../assets/images/harvesting.jpg')}
          style={styles.image}
        />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AnyLandInfo')}>
        <View style={styles.card}>
        <Image
          source={require('../assets/images/info1.jpg')}
          style={styles.image}
        />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LandDelete')}>
        <View style={styles.card}>
        <Image
          source={require('../assets/images/delete_ai.jpeg')}
          style={styles.image}
        />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
        <View style={styles.card}>
        <Image
          source={require('../assets/images/logout_ai.jpeg')}
          style={styles.image}
        />
        </View>
      </TouchableOpacity>
      <View style={{height:100}}></View>
      </ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: WIDTH,
    height: HEIGHT,
  },

  card: {
    width: WIDTH-100,
    height: 250,
    backgroundColor: '#000',
    marginLeft: 50,
    marginTop: 20,
    marginBottom: 60,
    borderRadius: 50,
  },

  image: {
    width: WIDTH-100,
    height: 250,
    borderRadius: 50
  }
});

export default ChooseScreen;
