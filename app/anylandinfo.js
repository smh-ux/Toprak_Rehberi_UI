import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const AnyLandInfoScreen = ({ navigation }) => {
  const [type, setType] = React.useState('');

  const [city, setCity] = useState([]);
  const [town, setTown] = useState([]);
  const [neighborhood, setNeighborhood] = useState([]);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');

  const dataType = [
    { key: '1', value: 'Tarla', disabled: false },
    { key: '2', value: 'Bağ', disabled: false },
    { key: '3', value: 'Bahçe', disabled: false },
    { key: '4', value: 'Diğer', disabled: false },
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

  const handleAdding = () => {
    navigation.navigate('SuccessRateInfo');
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
        setSelected={setSelectedNeighborhood}
        data={neighborhood}
        save="value"
      />

      <TouchableOpacity
        style={styles.landAdd_submit_button}
        onPress={handleAdding}>
        <Text style={styles.landAdd_submit_button_text}>Göster</Text>
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

export default AnyLandInfoScreen;
