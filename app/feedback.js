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
  initialData,
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
  const [evaluations, setEvaluations] = useState({});
  const landId = item.id;

  const handleProductEvaluation = (productName, evaluation) => {
    setEvaluations(prevEvaluations => ({
      ...prevEvaluations,
      [productName]: evaluation
    }));
    setData(prevData => prevData.filter(item => item.name !== productName));
  };

  const isAllEvaluated = data.length === 0;

  const sendEvaluations = async () => {
    try {
      await axios.post('http://192.168.125.44:8080/api/products/evaluate', {
        landId,
        evaluations
      });
      Alert.alert('Başarılı', 'Geribildiriminiz kaydedildi.');
    } catch (error) {
      console.log(error);
      Alert.alert('Hata', 'Bir hata oluştu.');
    }
  };

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
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <RadioButtons
              product_name={item.name}
              onEvaluate={(evaluation) => handleProductEvaluation(item.name, evaluation)}
              />
            )}
            scrollEnabled={false}
          />
          {isAllEvaluated && (
          <View style={{ marginTop: 20, marginLeft: 20, width: WIDTH }}>
            <TouchableOpacity style={styles.button} onPress={sendEvaluations}>
              <Text style={styles.button_text}>Gönder</Text>
            </TouchableOpacity>
          </View>
        )}
        </View>
      )}
    </SafeAreaView>
  );
};

const send = () => {
  Alert.alert('Başarılı', 'Geribildiriminiz için teşekkürler.');
};

const RadioButtons = ({ product_name, onEvaluate }) => {
  const [checked, setChecked] = useState('');

  const handlePress = (value) => {
    setChecked(value);
    onEvaluate(value);
  };

  return (
  <View style={{ width: WIDTH, height: HEIGHT, flexDirection: 'row', marginLeft: 40, marginTop: 200 }}>
      <View style={styles.view2}>
        <Text style={styles.product_name}>{product_name}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.radio_button}>
          <Text style={{color:'#FFF'}}>Good</Text>
          <RadioButton
            value="Good"
            status={checked === 'Good' ? 'checked' : 'unchecked'}
            onPress={() => handlePress('Good')}
          />
        </View>
        <View style={styles.radio_button}>
          <Text style={{ marginLeft:-5, color:'#FFF' }}>Normal</Text>
          <RadioButton
            value="Normal"
            status={checked === 'Normal' ? 'checked' : 'unchecked'}
            onPress={() => handlePress('Normal')}
          />
        </View>
        <View style={styles.radio_button}>
          <Text style={{ marginLeft:5, color:'#FFF' }}>Bad</Text>
          <RadioButton
            value="Bad"
            status={checked === 'Bad' ? 'checked' : 'unchecked'}
            onPress={() => handlePress('Bad')}
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
    marginBottom: -70
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
    marginLeft: WIDTH / 2 - 60,
    marginTop: 10,
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
