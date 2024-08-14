import React, { useState } from 'react';
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
  const [city, setCity] = useState('');
  const [town, setTown] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const dataType = [
    { key: '1', value: 'Tarla', disabled: false },
    { key: '2', value: 'Bağ', disabled: false },
    { key: '3', value: 'Bahçe', disabled: false },
    { key: '4', value: 'Diğer', disabled: false },
  ];

  const dataCity = [
    { key: '1', value: 'Ankara', disabled: false },
    { key: '2', value: 'İstanbul', disabled: false },
    { key: '3', value: 'İzmir', disabled: false },
    { key: '4', value: 'Bursa', disabled: false },
  ];

  const dataTown = [
    { key: '1', value: 'Çankaya', disabled: false },
    { key: '2', value: 'Ulus', disabled: false },
    { key: '3', value: 'Gölyaka', disabled: false },
    { key: '4', value: 'Keçiören', disabled: false },
  ];

  const dataNeighborhood = [
    { key: '1', value: 'Söğütözü', disabled: false },
    { key: '2', value: 'Demetevler', disabled: false },
    { key: '3', value: 'diğer', disabled: false },
    { key: '4', value: 'Diğer', disabled: false },
  ];

const handleAdding = () => {
  navigation.navigate('SuccessRateInfo')
}

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
        setSelected={(val) => setCity(val)}
        data={dataCity}
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
        setSelected={(val) => setTown(val)}
        data={dataTown}
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
        setSelected={(val) => setNeighborhood(val)}
        data={dataNeighborhood}
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