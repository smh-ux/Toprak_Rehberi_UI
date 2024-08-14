import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const MyLandHarvestScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const handlePress = (item) => {
    navigation.navigate('FeedBack', { item });
  };

  useEffect(() => {
    axios
      .get('http://192.168.125.44:8080/api/lands/fetching')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.myland_container}>
      <View style={styles.mylands}>
        <View style={{ width: WIDTH, height: 100 }}>
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Hasat Edeceğiniz arazinizi seçin
          </Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.mylands_content}>
                <View style={styles.mylands_content_container}>
                  <Text style={styles.mylands_content_title}>Arazi Tipi:</Text>
                  <Text style={styles.mylands_content_text}>
                    {item.landName}
                  </Text>
                </View>
                <View style={styles.mylands_content_container}>
                  <Text style={styles.mylands_content_title}>Şehir:</Text>
                  <Text style={styles.mylands_content_text}>{item.city}</Text>
                </View>
                <View style={styles.mylands_content_container}>
                  <Text style={styles.mylands_content_title}>İlçe:</Text>
                  <Text style={styles.mylands_content_text}>{item.town}</Text>
                </View>
                <View style={styles.mylands_content_container}>
                  <Text style={styles.mylands_content_title}>Alan:</Text>
                  <Text style={styles.mylands_content_text}>
                    {item.area} m2
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  myland_container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
  },

  mylands: {
    width: WIDTH,
    height: HEIGHT - 240,
    marginTop: 35,
    zIndex: 1,
  },

  mylands_content: {
    width: WIDTH - 40,
    height: 150,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 300,
    borderBottomRightRadius: 300,
    marginLeft: 20,
    marginTop: 20,
    zIndex: 5,
  },

  mylands_content_container: {
    flexDirection: 'row',
    margin: 'auto',
  },

  mylands_content_title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  mylands_content_text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MyLandHarvestScreen;
