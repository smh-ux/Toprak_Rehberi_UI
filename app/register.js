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

const RegisterScreen = ({ setScreen }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAuth, setPasswordAuth] = useState('');
    
    const handleRegister = async () => {
      if (password == passwordAuth) {
        try {
          const response = await axios.post('http://192.168.125.44:8081/api/users/register', {
            username,
            password
          });
          Alert.alert('Başarılı', 'Giriş Başarılı');
          setScreen('LoginScreen');
        } catch (error) {
          Alert.alert('Hata', 'Giriş Hatalı');
          console.error(error);
        }
      } else {
        Alert.alert('Hata', 'Şifreler birbiriyle uymuyor');
      }
    }
  
    return(
      <SafeAreaView>
        <View style={styles.register_top_container}>
          <Image
            source={require('@/assets/images/welcome2.jpeg')}
            style={styles.register_top_container_image}
          />
          <Text style={styles.register_top_container_title}>Toprak Rehberi</Text>
          <Text style={styles.register_top_container_text}>Ekim yapılacak bölgeleri keşfetmeye ve bilinçli ürün yetiştirmeye başlamak için kaydol.</Text>
        </View>
  
        <View style={styles.register_bottom_container}>
          <View style={styles.register_bottom_textInput_container}>
            <TextInput 
              style={styles.register_text_input}
              placeholder='Kullanıcı Adı'
              placeholderTextColor={'#FFF'}
              value={username}
              onChangeText={setUsername}
            />
            <TextInput 
              style={styles.register_text_input}
              placeholder='Şifre'  
              placeholderTextColor={'#FFF'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInput 
              style={styles.register_text_input}
              placeholder='Şifre Doğrulama'
              placeholderTextColor={'#FFF'}
              value={passwordAuth}
              onChangeText={setPasswordAuth}
              secureTextEntry
            />
            <TouchableOpacity style={styles.register_submit_button} onPress={handleRegister}>
              <Text style={styles.register_submit_button_text}>Kaydol</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.register_submit_button1} onPress={() => setScreen('LoginScreen')}>
              <Text style={styles.register_submit_button_text1}>Zaten Bir Hesabınız Varsa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  register_top_container: {
    position: 'absolute',
    width: WIDTH,
    height: 350,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 2,
  },

  register_top_container_image: {
    width: 130,
    height: 130,
    marginTop: 350/2-100,
    marginLeft: WIDTH/2-65,
    borderRadius: 20,
  },

  register_top_container_title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },

  register_top_container_text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },

  register_bottom_container: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
    zIndex: 1,
  },

  register_bottom_textInput_container: {
    width: WIDTH,
    height: HEIGHT-350,
    marginTop: 400,
  },

  register_text_input: {
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

  register_submit_button: {
    width: WIDTH-50,
    height: 50,
    backgroundColor: '#FFF',
    marginLeft: 25,
    marginTop: 50,
    borderRadius: 20,
  },

  register_submit_button_text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 'auto'
  },

  register_submit_button1: {
    width: WIDTH-50,
    height: 50,
    backgroundColor: '#FFF',
    marginLeft: 25,
    marginTop: 10,
    borderRadius: 20,
  },

  register_submit_button_text1: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 'auto'
  },
});

export default RegisterScreen;