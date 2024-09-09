import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
  Alert,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';
import { AuthContext } from './authprovider';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ProductAddScreen = ({ route, navigation }) => {
  const [selected, setSelected] = React.useState('');
  const [plantedArea, setPlantedArea] = useState('');
  const [landId, setLandId] = useState('');

  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedSR, setSelectedSR] = useState('');

  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (!authData) {
  //     navigation.navigate('Login');
  //   }
  // }, [authData]);

  const { item } = route.params || {};

  console.log('selected: ', selected);

  if(!item) {
    console.log('item yok')
  } else {
    console.log(item);
  }

  useEffect(() => {
    if (item) {
      setLandId(item.id);
    }
  }, [item]);

  const data = [
    { key: '1', value: 'Domates', disabled: false },
    { key: '2', value: 'Taze Fasulye', disabled: false },
    { key: '3', value: 'Biber', disabled: false },
    { key: '4', value: 'Taze Patates', disabled: false },
    { key: '5', value: 'Bamya', disabled: false },
    { key: '6', value: 'Arpa', disabled: false },
    { key: '7', value: 'Buğday', disabled: false },
    { key: '8', value: 'Soğan', disabled: false},
    { key: '9', value: 'Patlıcan', disabled: false},
    { key: '10', value: 'Mısır', disabled: false },
  ];

  const handleProductSelect = (productName) => {
    const selectedNew = data.find((data) => data.value === productName);
    if (selectedNew) {
      setSelectedPeriod(selectedNew.key);
      setSelectedSR(selectedNew.key);
    }
  };

  console.log(data);

  console.log("LandID: ", landId);

  console.log("PeriodID: ", selectedPeriod);

  console.log("SRID: ", selectedSR);

  const handleAdding = async () => {
    if (!selected || !plantedArea) {
      Alert.alert('Hata', 'Tüm alanları doldurduğunuzdan emin olun.');
      return;
    }

    handleProductSelect(selected);

    try {
      const response = await axios.post(
        'http://192.168.125.44:8080/api/products/adding',
        {
          name: selected,
          plantedArea: parseInt(plantedArea, 10),
          periodId: selectedPeriod,
          successRateId: selectedSR,
          landId: landId,
        }
      );
      Alert.alert('Başarılı', 'Kayıt Başarılı');
      navigation.navigate('MyLand');
    } catch (error) {
      Alert.alert('Hata', 'Giriş Hatalı');
      console.error(error);
    }
  };

  return (
    <View style={styles.productAdd_container}>
      <Text
        style={{
          backgroundColor: '#000',
          fontSize: 20,
          color: '#FFF',
          marginLeft: 20,
          marginBottom: -15,
          marginTop: 40,
          fontWeight: 'bold',
        }}>
        Ürün
      </Text>
      <SelectList
        boxStyles={styles.productAdd_containerAdd_select_list_box}
        inputStyles={styles.productAdd_select_list_input}
        dropdownStyles={styles.productAdd_select_list_drop}
        dropdownItemStyles={styles.productAdd_select_list_items}
        dropdownTextStyles={styles.productAdd_select_list_item_text}
        setSelected={(val) => {
          setSelected(val);
          handleProductSelect(val);
        }}
        data={data}
        save="value"
      />
      <Text
        style={{
          backgroundColor: '#000',
          fontSize: 20,
          color: '#FFF',
          marginLeft: 20,
          marginBottom: -15,
          marginTop: 20,
          fontWeight: 'bold',
        }}>
        Alan
      </Text>
      <TextInput
        style={styles.productAdd_text_input}
        placeholder="Ekeceğiniz Alanı Giriniz"
        placeholderTextColor={'#000'}
        value={plantedArea}
        onChangeText={setPlantedArea}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.productAdd_submit_button}
        onPress={handleAdding}>
        <Text style={styles.productAdd_submit_button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productAdd_container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
  },

  productAdd_containerAdd_select_list_box: {
    backgroundColor: '#FFF',
    width: WIDTH - 40,
    marginLeft: 20,
    marginTop: 25,
  },

  productAdd_select_list_input: {},

  productAdd_select_list_drop: {
    backgroundColor: '#FFF',
    width: WIDTH - 40,
    marginLeft: 20,
    marginTop: 20,
  },

  productAdd_select_list_items: {},

  productAdd_select_list_item_text: {
    color: '#000',
    fontWeight: 'bold',
  },

  productAdd_text_input: {
    backgroundColor: '#FFF',
    width: WIDTH - 40,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    color: '#000',
  },

  productAdd_submit_button: {
    backgroundColor: '#FFF',
    width: WIDTH - 40,
    marginLeft: 20,
    marginTop: 40,
    borderRadius: 20,
    padding: 10,
  },

  productAdd_submit_button_text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 'auto',
  },
});

export default ProductAddScreen;
