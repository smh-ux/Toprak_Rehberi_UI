import React, { useState, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const LandAddScreen = ({ navigation, route }) => {
  const [type, setType] = React.useState('');

  const [city, setCity] = useState([]);
  const [town, setTown] = useState([]);
  const [neighborhood, setNeighborhood] = useState([]);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');

  const [selectedCityName, setSelectedCityName] = useState('');
  const [selectedTownName, setSelectedTownName] = useState('');
  const [selectedNeighborhoodName, setSelectedNeighborhoodName] = useState('');

  const [area, setArea] = useState('');

  const dataType = [
    { key: '1', value: 'Tarla', disabled: false },
    { key: '2', value: 'Bağ', disabled: false },
    { key: '3', value: 'Bahçe', disabled: false },
  ];

  useEffect(() => {
    axios
      .get('http://192.168.125.44:8080/api/location/cities')
      .then((response) => {
        const cityData = response.data.map((city) => ({
          key: city.id,
          value: city.name,
        }));
        console.log('City: ', cityData);
        setCity(cityData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCitySelect = (cityName) => {
    const selectedCity = city.find((city) => city.value === cityName);
    if (selectedCity) {
      setSelectedCityName(selectedCity.value);
      setSelectedCity(selectedCity.key);
    }
  };

  useEffect(() => {
    console.log(selectedCity);
    if (selectedCity) {
      axios
        .get(`http://192.168.125.44:8080/api/location/towns/${selectedCity}`)
        .then((response) => {
          const townData = response.data.map((town) => ({
            key: town.id,
            value: town.name,
          }));
          console.log('Town: ', townData);
          setTown(townData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedCity]);

  const handleTownSelect = (townName) => {
    const selectedTown = town.find((town) => town.value === townName);
    if (selectedTown) {
      setSelectedTownName(selectedTown.value);
      setSelectedTown(selectedTown.key);
    }
  };

  useEffect(() => {
    console.log(selectedTown);
    if (selectedTown) {
      axios
        .get(
          `http://192.168.125.44:8080/api/location/neighborhoods/${selectedTown}`
        )
        .then((response) => {
          const neighborhoodData = response.data.map((neighborhood) => ({
            key: neighborhood.id,
            value: neighborhood.name,
          }));
          console.log('Neighborhood: ', neighborhoodData);
          setNeighborhood(neighborhoodData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedTown]);

  const handleNeighborhoodSelect = (NeighborhoodName) => {
    const selectedNeighborhood = neighborhood.find((neighborhood) => neighborhood.value === NeighborhoodName);
    if (selectedNeighborhood) {
      setSelectedNeighborhoodName(selectedNeighborhood.value);
      setSelectedNeighborhood(selectedNeighborhood.key);
    }
    console.log(selectedCityName);
    console.log(selectedTownName);
    console.log(selectedNeighborhood.value);
    console.log(selectedNeighborhood.key);
  };

  const handleAdding = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const userId = await AsyncStorage.getItem('userId');
      const response = await axios.post(
        'http://192.168.125.44:8080/api/lands/adding',
        {
          landName: type,
          city: selectedCityName,
          town: selectedTownName,
          neighborhood: selectedNeighborhoodName,
          area: parseInt(area, 10),
          neighborhoodId: selectedNeighborhood,
          userId: userId,
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
    <SafeAreaView style={styles.landAdd_container}>
      <Text
        style={{
          backgroundColor: '#000',
          fontSize: 20,
          color: '#FFF',
          marginLeft: 20,
          marginBottom: -15,
          marginTop: 50,
          fontWeight: 'bold',
        }}>
        Arazi Tipi
      </Text>
      <SelectList
        boxStyles={styles.landAdd_select_list_box}
        inputStyles={styles.landAdd_select_list_input}
        dropdownStyles={styles.landAdd_select_list_drop}
        dropdownItemStyles={styles.landAdd_select_list_items}
        dropdownTextStyles={styles.landAdd_select_list_item_text}
        setSelected={(val) => setType(val)}
        data={dataType}
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
        İl
      </Text>
      <SelectList
        boxStyles={styles.landAdd_select_list_box}
        inputStyles={styles.landAdd_select_list_input}
        dropdownStyles={styles.landAdd_select_list_drop}
        dropdownItemStyles={styles.landAdd_select_list_items}
        dropdownTextStyles={styles.landAdd_select_list_item_text}
        setSelected={handleCitySelect}
        data={city}
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
        İlçe
      </Text>
      <SelectList
        boxStyles={styles.landAdd_select_list_box}
        inputStyles={styles.landAdd_select_list_input}
        dropdownStyles={styles.landAdd_select_list_drop}
        dropdownItemStyles={styles.landAdd_select_list_items}
        dropdownTextStyles={styles.landAdd_select_list_item_text}
        setSelected={handleTownSelect}
        data={town}
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
        Mahalle
      </Text>
      <SelectList
        boxStyles={styles.landAdd_select_list_box}
        inputStyles={styles.landAdd_select_list_input}
        dropdownStyles={styles.landAdd_select_list_drop}
        dropdownItemStyles={styles.landAdd_select_list_items}
        dropdownTextStyles={styles.landAdd_select_list_item_text}
        setSelected={handleNeighborhoodSelect}
        data={neighborhood}
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
        style={styles.landAdd_text_input}
        placeholder="Arazinizin Alanını Giriniz"
        placeholderTextColor={'#000'}
        value={area}
        onChangeText={setArea}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.landAdd_submit_button}
        onPress={handleAdding}>
        <Text style={styles.landAdd_submit_button_text}>Ekle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  landAdd_container: {
    width: WIDTH,
    height: HEIGHT,
    flex: 1,
    backgroundColor: '#000',
  },

  landAdd_select_list_box: {
    backgroundColor: '#FFF',
    width: WIDTH - 40,
    marginLeft: 20,
    marginTop: 25,
  },

  landAdd_select_list_input: {},

  landAdd_select_list_drop: {
    backgroundColor: '#FFF',
    width: WIDTH - 40,
    marginLeft: 20,
    marginTop: 20,
  },

  landAdd_select_list_items: {},

  landAdd_select_list_item_text: {
    color: '#000',
    fontWeight: 'bold',
  },

  landAdd_text_input: {
    backgroundColor: '#FFF',
    width: WIDTH - 40,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    color: '#000',
  },

  landAdd_submit_button: {
    backgroundColor: '#FFF',
    width: WIDTH - 40,
    marginLeft: 20,
    marginTop: 40,
    borderRadius: 20,
    padding: 10,
  },

  landAdd_submit_button_text: {
    color: '#000',
    margin: 'auto',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default LandAddScreen;
