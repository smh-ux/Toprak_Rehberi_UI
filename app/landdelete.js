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

const LandDeleteScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const handlePress = (item) => {
    navigation.navigate('LandDeleteConsent', { item });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const userId = await AsyncStorage.getItem('userId');

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

  return(
    <SafeAreaView style={styles.myland_container}>
      <View style={styles.mylands}>
      {data.length === 0 ? (
        <View style={{ margin: 'auto', width: WIDTH }}>
          <Text style={styles.no_data_text}>
            Silinebilecek arazi bulunamadı.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFF',
              width: WIDTH - 120,
              height: 60,
              marginLeft: 60,
              marginTop: 150,
              borderRadius: 50,
            }}
            onPress={() => navigation.navigate('LandAdd')}>
            <Text
              style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: 20,
                margin: 'auto',
              }}>
              Hemen Bir Tane Ekleyin
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
            <Text
              style={{
                color: '#FFF',
                fontWeight: 'bold',
                margin: 'auto',
                fontSize: 20,
                paddingBottom: 65,
              }}>
              Silmek istediğiniz araziyi seçin:
            </Text>
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
      )}
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

  no_data_text: {
    color: '#FFF',
    fontSize: 20,
    margin: 'auto',
  }
});

export default LandDeleteScreen;
