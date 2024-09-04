import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const generateToken = async (userId) => {
    try {
      const response = await axios.post(
        `http://192.168.125.44:8080/api/tokens/generate`,
        null,
        { params: { userId } }
      );
      return response.data.token;
    } catch (error) {
      console.error('Token oluşturma hatası:', error);
    }
  };

  const validateToken = async (token) => {
    try {
      const response = await axios.get(
        `http://192.168.125.44:8080/api/tokens/validate`,
        { params: { token } }
      );
      return response.data;
    } catch (error) {
      console.error('Token doğrulama hatası:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://192.168.125.44:8080/api/users/login',
        { username, password }
      );
      console.log('API yanıtı:', response.data);

      const { token, userId } = response.data;

      console.log('Token:', token);
      console.log('User ID:', userId);

      if (!token || !userId) {
        throw new Error("Token veya kullanıcı ID'si alınamadı");
      }

      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userId', userId.toString());
      navigation.navigate('Choose');
    } catch (error) {
      Alert.alert('Hata', 'Giriş Hatalı');
      console.error('Giriş hatası:', error);
    }
  };

  const checkTokenValidity = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const userId = await AsyncStorage.getItem('userId');
      console.log('Stored Token:', token);
      console.log('Stored User ID:', userId);

      if (token) {
        const isValid = await validateToken(token);
        if (isValid) {
          console.log('Token geçerli.');
        } else {
          console.log('Token geçersiz.');
          navigation.navigate('Login');
        }
      } else {
        console.log('Token bulunamadı.');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Token doğrulama hatası:', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.login_top_container}>
        <Image
          source={require('../assets/images/welcome2.jpeg')}
          style={styles.login_top_container_image}
        />
        <Text style={styles.login_top_container_title}>Toprak Rehberi</Text>
        <Text style={styles.login_top_container_text}>
          Ekim yapılacak bölgeleri keşfetmeye ve bilinçli ürün yetiştirmeye
          başlamak için giriş yap.
        </Text>
      </View>

      <View style={styles.login_bottom_container}>
        <View style={styles.login_bottom_textInput_container}>
          <TextInput
            style={styles.login_text_input}
            placeholder="Kullanıcı Adı"
            placeholderTextColor={'#FFF'}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.login_text_input}
            placeholder="Şifre"
            placeholderTextColor={'#FFF'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.login_submit_button}
            onPress={handleLogin}>
            <Text style={styles.login_submit_button_text}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.login_submit_button1}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.login_submit_button_text1}>Kaydolmak İçin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  login_top_container: {
    position: 'absolute',
    width: WIDTH,
    height: 300,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 2,
  },

  login_top_container_image: {
    width: 130,
    height: 130,
    marginTop: 350 / 2 - 150,
    marginLeft: WIDTH / 2 - 65,
    borderRadius: 20,
  },

  login_top_container_title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },

  login_top_container_text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },

  login_bottom_container: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
    zIndex: 1,
  },

  login_bottom_textInput_container: {
    width: WIDTH,
    height: HEIGHT - 350,
    marginTop: 325,
  },

  login_text_input: {
    backgroundColor: 'grey',
    color: '#FFF',
    width: WIDTH - 50,
    height: 50,
    fontSize: 20,
    marginLeft: 25,
    marginTop: 25,
    borderRadius: 20,
    padding: 10,
  },

  login_submit_button: {
    width: WIDTH - 50,
    height: 50,
    backgroundColor: '#FFF',
    marginLeft: 25,
    marginTop: 50,
    borderRadius: 20,
  },

  login_submit_button_text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 'auto',
  },

  login_submit_button1: {
    width: WIDTH - 50,
    height: 50,
    backgroundColor: '#FFF',
    marginLeft: 25,
    marginTop: 10,
    borderRadius: 20,
  },

  login_submit_button_text1: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 'auto',
  },
});

export default LoginScreen;
