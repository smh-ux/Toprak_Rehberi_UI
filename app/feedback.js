import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import axios from 'axios';
import { Button, RadioButton } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const FeedBackScreen = ({ route, navigation }) => {
  const name = 'Semih Okumuş';
  const date = '03.01.2024';

  const { item } = route.params;
  const [data, setData] = useState([]);
  const landId = item.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.125.44:8080/api/products/land/${landId}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [landId]);

  console.log(item);

  return (
    <SafeAreaView style={{backgroundColor:'#000', width:WIDTH, height:HEIGHT}}>

      {data.length === 0 ? (
        <View style={{ marginTop: HEIGHT/2.5, marginLeft: 20, width: WIDTH }}>
          <Text style={styles.no_data_text}>
            Geribildirim yapılabilecek ürün bulunamadı.
          </Text>
        </View>
      ) : (
        <View>
        <View style={styles.view1}>
          <Text style={styles.view1_text1}>Sn.{name}</Text>
          <Text style={styles.view1_text2}>
            {date} tarihli ekimini yapmış olduğunuz ürünler için bu anketi doğru
            şekilde doldurmanız önem arz eder. Ekimini yapmış olduğunuz ürünlerin
            listesi aşağıda yer almaktadır. Buna göre gözlemleriniz nelerdir?
          </Text>
        </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RadioButtons product_name={item.name} />}
          />
          <TouchableOpacity style={styles.button} onPress={send}>
            <Text style={styles.button_text}>Gönder</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const send = () => {
  Alert.alert('Başarılı', 'Geribildiriminiz için teşekkürler.');
};

const RadioButtons = ({ product_name }) => {
  const [checked, setChecked] = useState('');

  return (
    <View style={{ flexDirection: 'row', marginLeft: 40 }}>
      <View style={styles.view2}>
        <Text style={styles.product_name}>{product_name}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.radio_button}>
          <Text style={{color:'#FFF'}}>Good</Text>
          <RadioButton
            value="Good"
            status={checked === 'Good' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Good')}
          />
        </View>
        <View style={styles.radio_button}>
          <Text style={{ marginLeft:-5, color:'#FFF' }}>Normal</Text>
          <RadioButton
            value="Normal"
            status={checked === 'Normal' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Normal')}
          />
        </View>
        <View style={styles.radio_button}>
          <Text style={{ marginLeft:5, color:'#FFF' }}>Bad</Text>
          <RadioButton
            value="Bad"
            status={checked === 'Bad' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Bad')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    width: WIDTH - 40,
    height: 200,
    marginLeft: 20,
    marginTop: 30,
  },

  view1_text1: {
    color: '#FFF',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },

  view1_text2: {
    color: '#FFF',
    textAlign: 'center',
  },

  view2: {
    width: 140,
  },

  product_name: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  },

  radio_button: {
    marginLeft: 25,
  },

  button: {
    width: 100,
    height: 50,
    backgroundColor: '#FFF',
    marginLeft: WIDTH / 2 - 50,
    marginTop: 50,
    borderRadius: 20,
  },

  button_text: {
    color: '#000',
    margin: 'auto',
    fontSize: 20,
    fontWeight: 'bold',
  },

  no_data_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },

});

export default FeedBackScreen;
