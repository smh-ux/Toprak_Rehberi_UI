import React from 'react-native';
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

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ChooseScreen = ({ navigation }) => {
  return(
    <SafeAreaView>
    <View style={styles.container}>
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('MyLand')}>
        <View style= {styles.card}>
          <Image 
            source={require('./assets/planting.jpg')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyLandHarvest')}>
        <View style={styles.card}>
        <Image 
          source={require('./assets/harvesting.jpg')}
          style={styles.image}
        />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AnyLandInfo')}>
        <View style={styles.card}>
        <Image 
          source={require('./assets/info1.jpg')}
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
    backgroundColor: '#FFF',
    marginLeft: 50,
    marginTop: 80,
    borderRadius: 50,
  },

  image: {
    width: WIDTH-100,
    height: 250,
    borderRadius: 50
  }
});

export default ChooseScreen;