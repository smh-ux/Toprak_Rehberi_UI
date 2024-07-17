//import {} from 'react-native-reanimated/lib/typescript/Animated';

/* import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView'; */

import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, Dimensions, View, Text, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const WelcomeScreen = () => {
  return(
    <View style={styles.welcome_container}>
      <Image 
        source={require('@/assets/images/welcome3.png')}
        style={styles.welcome_img}
      />
      <Text style={styles.title_text}>Toprak Rehberi</Text>
      <Text style={styles.welcome_text}>Ekim yapılacak bölgeleri keşfedin ve bilinçli ürün seçimleri yapın.</Text>
      <TouchableOpacity style={styles.welcome_button}>
        <Text style={styles.welcome_button_text}>Keşfetmeye Başla</Text>
      </TouchableOpacity>
    </View>
  );
}

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.125.44:8080/api/users/register', {
        username,
        password
      });
      Alert.alert('Success', 'User registered successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to register user');
      console.error(error);
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
        <Text style={styles.register_top_container_text}>Ekim yapılacak bölgeleri keşfedin ve bilinçli ürün seçimleri yapın.</Text>
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
            placeholder='password'  
            placeholderTextColor={'#FFF'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput 
            style={styles.register_text_input}
            placeholder='Şifre Doğrulama'
            placeholderTextColor={'#FFF'}
            //value={password}
            secureTextEntry
          />
          <TouchableOpacity style={styles.register_submit_button} onPress={handleRegister}>
            <Text style={styles.register_submit_button_text}>Kaydol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const LoginScreen = () => {
  const [username, setUsername] = ('');
  const [password, setPassword] = ('');
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.125.44:8080/api/users/login', {
        username: username,
        password: password
      });
      Alert.alert('Success', 'User logged in successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to login user');
      console.error(error);
    }
  }

  return(
    <SafeAreaView></SafeAreaView>
  );
}

const LandAddScreen = () => {
  const [selected, setSelected] = React.useState('');
  const [city, setcity] = ('');

  const data = [
    {key:'1', value:'Tarla', disabled:false},
    {key:'2', value:'Bahçe', disabled:false},
    {key:'3', value:'Bağ', disabled:false},
    {key:'4', value:'Diğer', disabled:false},
  ]

  const handleAdding = async () => {
    try {
      const response = await axios.post('http://192.168.125.44:8080/api/users/addland', {
        city: city,

      });
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <SafeAreaView style={styles.landAdd_container}>
      <SelectList 
        boxStyles={styles.landAdd_select_list_box}
        inputStyles={styles.landAdd_select_list_input}
        dropdownStyles={styles.landAdd_select_list_drop}
        dropdownItemStyles={styles.landAdd_select_list_items}
        dropdownTextStyles={styles.landAdd_select_list_item_text}
        setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
        data={data}
        save="value"
      />
      <Text style={{backgroundColor: '#000', fontSize: 20, color: '#FFF', marginLeft: 20, marginBottom: -15, marginTop: 20, fontWeight: 'bold'}}>İl</Text>
      <TextInput 
        style={styles.landAdd_text_input}
        placeholder='İl Giriniz'
        placeholderTextColor={'#FFF'}
      />
      <Text style={{backgroundColor: '#000', fontSize: 20, color: '#FFF', marginLeft: 20, marginBottom: -15, marginTop: 20, fontWeight: 'bold'}}>İlçe</Text>
      <TextInput 
        style={styles.landAdd_text_input}
        placeholder='İlçe Giriniz'
        placeholderTextColor={'#FFF'}
      />
      <Text style={{backgroundColor: '#000', fontSize: 20, color: '#FFF', marginLeft: 20, marginBottom: -15, marginTop: 20, fontWeight: 'bold'}}>Mahalle</Text>
      <TextInput 
        style={styles.landAdd_text_input}
        placeholder='Mahalle Giriniz'
        placeholderTextColor={'#FFF'}
      />
      <TouchableOpacity style={styles.landAdd_submit_button}>
        <Text style={styles.landAdd_submit_button_text}>Kaydet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const myLandScreen = () => {
  return(
    <SafeAreaView></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcome_container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
    flex: 1
  },

  welcome_img: {
    width: 200,
    height: 200,
    marginLeft: WIDTH/2-100,
    marginTop: HEIGHT/2-200,
  },

  title_text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center'
  },

  welcome_text: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 20,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },

  welcome_button: {
    backgroundColor: '#FFF',
    width: WIDTH-50,
    height: 55,
    marginLeft: 25,
    marginTop: 'auto',
    marginBottom: 50,
    borderRadius: 20,
  },

  welcome_button_text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto'
  },

  //---------------------

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

  //--------------------

  landAdd_container: {
    width: WIDTH,
    height: HEIGHT,
    flex: 1,
    backgroundColor: '#000',
  },

  landAdd_select_list_box: {
    backgroundColor: '#FFF',
    width: WIDTH-40,
    marginLeft: 20,
    marginTop:100,
  },

  landAdd_select_list_input: {
  },

  landAdd_select_list_drop: {
    backgroundColor: '#FFF',
    width: WIDTH-40,
    marginLeft: 20,
    marginTop:20,
  },

  landAdd_select_list_items: {
  },

  landAdd_select_list_item_text: {
    color: '#000',
    fontWeight: 'bold'
  },

  landAdd_text_input: {
    backgroundColor: 'grey',
    width: WIDTH-40,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    color: '#FFF'
  },

  landAdd_submit_button: {
    backgroundColor: '#FFF',
    width: WIDTH-40,
    marginLeft: 20,
    marginTop: 40,
    borderRadius: 20,
    padding: 10
 },

  landAdd_submit_button_text: {
    color: '#000',
    margin: 'auto',
    fontWeight: 'bold',
    fontSize: 20
  },
});

export default myLandScreen;

/* export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
}); */