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
  Alert
} from 'react-native';
import axios from 'axios';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const LoginScreen = ({ setScreen }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://192.168.125.44:8080/api/users/login', {
          username,
          password
        });
        if (response.status == 200) {
          Alert.alert('Başarılı', 'Giriş Başarılı');
          setScreen('MyLandScreen');
        }
      } catch (error) {
        Alert.alert('Hata', 'Giriş Hatalı');
        console.error(error);
      }
    }
  
    return(
      <SafeAreaView>
        <View style={styles.login_top_container}>
          <Image
            source={require('@/assets/images/welcome2.jpeg')}
            style={styles.login_top_container_image}
          />
          <Text style={styles.login_top_container_title}>Toprak Rehberi</Text>
          <Text style={styles.login_top_container_text}>Ekim yapılacak bölgeleri keşfetmeye ve bilinçli ürün yetiştirmeye başlamak için giriş yap.</Text>
        </View>
  
        <View style={styles.login_bottom_container}>
          <View style={styles.login_bottom_textInput_container}>
            <TextInput 
              style={styles.login_text_input}
              placeholder='Kullanıcı Adı'
              placeholderTextColor={'#FFF'}
              value={username}
              onChangeText={setUsername}
            />
            <TextInput 
              style={styles.login_text_input}
              placeholder='Şifre'  
              placeholderTextColor={'#FFF'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.login_submit_button} onPress={handleLogin}>
              <Text style={styles.login_submit_button_text}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login_submit_button1} onPress={() => setScreen('RegisterScreen')}>
              <Text style={styles.login_submit_button_text1}>Kaydolmak İçin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  login_top_container: {
    position: 'absolute',
    width: WIDTH,
    height: 350,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 2,
  },

  login_top_container_image: {
    width: 130,
    height: 130,
    marginTop: 350/2-100,
    marginLeft: WIDTH/2-65,
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
    height: HEIGHT-350,
    marginTop: 400,
  },

  login_text_input: {
    backgroundColor: 'grey',
    color: '#FFF',
    width: WIDTH-50,
    height: 50,
    fontSize: 20,
    marginLeft: 25,
    marginTop: 25,
    borderRadius: 20,
    padding: 10,
  },

  login_submit_button: {
    width: WIDTH-50,
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
    margin: 'auto'
  },

  login_submit_button1: {
    width: WIDTH-50,
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
    margin: 'auto'
  },
});

export default LoginScreen;