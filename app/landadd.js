import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const LandAddScreen = ({ setScreen }) => {
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
          city,
  
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
          setSelected={(val) => setSelected(val)}
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

const styles = StyleSheet.create({
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

export default LandAddScreen;