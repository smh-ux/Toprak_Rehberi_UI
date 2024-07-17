import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const MyLandScreen = ({ setScreen }) => {
    return(
      <SafeAreaView style={styles.myland_container}>
        <View style={styles.myland_header}>
          <Text style={styles.myland_header_title}>Arazilerim</Text>
        </View>
        <View style={styles.mylands}>
          <TouchableOpacity onPress={() => setScreen('myland')}>
            <View style={styles.mylands_content}>
              <Text style={styles.mylands_content_text}>Arazi 1</Text>
              <Text style={styles.mylands_content_text}>Ankara</Text>
              <Text style={styles.mylands_content_text}>Polatlı</Text>
              <Text style={styles.mylands_content_text}>1000 m2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setScreen('myland')}>
            <View style={styles.mylands_content}>
              <Text style={styles.mylands_content_text}>Arazi 2</Text>
              <Text style={styles.mylands_content_text}>Ankara</Text>
              <Text style={styles.mylands_content_text}>Gölyaka</Text>
              <Text style={styles.mylands_content_text}>1500 m2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setScreen('myland')}>
            <View style={styles.mylands_content}>
              <Text style={styles.mylands_content_text}>Arazi 3</Text>
              <Text style={styles.mylands_content_text}>Ankara</Text>
              <Text style={styles.mylands_content_text}>Ayaş</Text>
              <Text style={styles.mylands_content_text}>2000 m2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
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
    marginTop: 50,
    zIndex: 1,
    flexDirection: 'row'
  },

  mylands_content: {
    width: 105,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginLeft: 20,
    zIndex: 2
  },

  mylands_content_text: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  }

});

export default MyLandScreen;