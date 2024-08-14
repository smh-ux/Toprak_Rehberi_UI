import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import domates from './assets/domates.jpg';
import biber from './assets/biber.jpg';
import fasulye from './assets/fasulye.jpg';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const title_domates = 'Domates';
const title_biber = 'Biber';
const title_fasulye = 'Fasulye';

const text_domates = 'Domates Hakkında Açıklama';
const text_biber = 'Biber Hakkında Açıklama';
const text_fasulye = 'Fasulye Hakkında Açıklama';


const ProductInfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <Card
            product="domates"
            title={title_domates}
            text={text_domates}
            direction={() => navigation.navigate('ProductInfoFull')}
          />
          <Card
            product="biber"
            title={title_biber}
            text={text_biber}
            direction={() => navigation.navigate('ProductInfoFull')}
          />
          <Card
            product="fasulye"
            title={title_fasulye}
            text={text_fasulye}
            direction={() => navigation.navigate('ProductInfoFull')}
          />
        </ScrollView>
        <View style={{ height: 70 }}></View>
      </View>
    </SafeAreaView>
  );
};

const imageMap = {
  domates,
  biber,
  fasulye,
};

const Card = ({ product, title, text, direction }) => {
  return (
    <TouchableOpacity onPress={direction}>
      <View style={styles.card}>
        <Image source={imageMap[product]} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: WIDTH,
    height: HEIGHT,
  },

  card: {
    width: WIDTH - 50,
    height: 350,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 25,
  },

  image: {
    width: WIDTH - 50,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },

  text: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ProductInfoScreen;
