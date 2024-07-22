import React, { useState } from 'react';
import { 
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const WelcomePage = ({ setScreen }) => {
    return(
        <View style={styles.welcome_container}>
            <Image 
                source={require('@/assets/images/welcome3.png')}
                style={styles.welcome_img}
            />
            <Text style={styles.title_text}>Toprak Rehberi</Text>
            <Text style={styles.welcome_text}>Ekim yapılacak bölgeleri keşfetmeye ve bilinçli ürün yetiştirmeye hazır mısın.</Text>
            <TouchableOpacity style={styles.welcome_button} onPress={() => setScreen('LoginScreen')}>
                <Text style={styles.welcome_button_text}>Keşfetmeye Başla</Text>
            </TouchableOpacity>
        </View>
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
      borderRadius: 35,
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
    }
});

export default WelcomePage;