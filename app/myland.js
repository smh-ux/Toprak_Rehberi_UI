import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const MyLandScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const handlePress = (item) => {
    navigation.navigate('MyLandInfo', { item });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const userId = await AsyncStorage.getItem('userId'); // Kullanıcı ID'sini burada alabilirsiniz

        console.log('token: ', token);
        console.log('ID: ', userId);

        if (token && userId) {
          const response = await axios.get(
            `http://192.168.125.44:8080/api/lands/user/${userId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setData(response.data);
        } else {
          console.log("Token veya kullanıcı ID'si bulunamadı.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.myland_container}>
      <View style={styles.mylands}>
        {data.length === 0 ? (
          <Text style={styles.no_data_text}>
            Kullanıcıya ait arazi bulunamadı.
          </Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item)}>
                <View style={styles.mylands_content}>
                  <View style={styles.mylands_content_container}>
                    <Text style={styles.mylands_content_title}>
                      Arazi Tipi:
                    </Text>
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
        )}
        <TouchableOpacity
          style={styles.add_button}
          onPress={() => navigation.navigate('LandAdd')}>
          <Text style={styles.add_button_text}>Ekle</Text>
        </TouchableOpacity>
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

  no_data_text: {
    color: '#FFF',
    fontSize: 20,
    margin: 'auto',
    fontWeight: 'bold',
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

  add_button: {
    flexDirection: 'column',
    width: WIDTH - 40,
    height: 70,
    marginLeft: 20,
    borderRadius: 50,
    backgroundColor: '#FFF',
    marginTop: 20,
  },

  add_button_text: {
    color: '#000',
    margin: 'auto',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default MyLandScreen;
