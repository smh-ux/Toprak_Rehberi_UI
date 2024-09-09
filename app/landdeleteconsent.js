import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import { AuthContext } from './authprovider';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const LandDeleteConsentScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [data, setData] = useState([]);
  const landId = item.id;

  console.log("Item: ", item);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.125.44:8080/api/products/land/${landId}`
        );
        setData(response.data);
        console.log("Land: ", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [landId]);

  console.log("land id: ",landId);

  const deleteLand = async (landId) => {
    try {
      const response = await axios.delete(`http://192.168.125.44:8080/api/lands/delete/${landId}`);
      if (response.status === 200) {
        console.log('Arazi başarıyla silindi.');
        Alert.alert('Başarılı', 'Arazi Başarıyla Silindi');
        navigate.navigation('Choose');
      } else if (response.status === 404) {
        console.log('Arazi bulunamadı.');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('Arazi bulunamadı.');
      } else {
        console.error('İstek sırasında bir hata oluştu:', error);
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={{ zIndex: 2, marginTop: 0 }}
        showsVerticalScrollIndicator={false}>
        <View style={{width:WIDTH, height:HEIGHT-290}}></View>
        <TouchableOpacity style={styles.delete_button} onPress={() => deleteLand(landId)}>
          <Text style={styles.delete_button_text}>Arazinizi Silmek İçin Dokunun</Text>
        </TouchableOpacity>
        <DataTable style={styles.mylandinfo_table}>
          <DataTable.Header style={styles.mylandinfo_table_header}>
            <DataTable.Title textStyle={{color:'#FFF'}}>Mahsul Adı</DataTable.Title>
            <DataTable.Title textStyle={{color:'#FFF'}}>Ekilen m2</DataTable.Title>
          </DataTable.Header>

          <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Table product_name={item.name} product_planting_area={item.plantedArea} />
          )}
        />
        </DataTable>

      </ScrollView>
      <View style={styles.mylandinfo_container}>
        <View style={styles.mylandinfo_main_info_container}>
          <Image
            source={require('../assets/images/sale.jpeg')}
            style={{
              width: 200,
              height: 200,
              margin: 'auto',
              borderRadius: 100,
            }}
          />
          <Text style={styles.mylandinfo_name}>Arazim</Text>
        </View>
        <View style={styles.mylandinfo_second_info_container}>
          <Text style={styles.mylandinfo_second_text}>
            Arazi Tipi: {item.landName}
          </Text>
          <Text style={styles.mylandinfo_second_text}>İl: {item.city}</Text>
          <Text style={styles.mylandinfo_second_text}>İlçe: {item.town}</Text>
          <Text style={styles.mylandinfo_second_text}>
            Mahalle: {item.neighborhood}
          </Text>
          <Text style={styles.mylandinfo_second_text}>Alan: {item.area}m2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Table = ({ product_name, product_planting_area }) => {
  return (
    <DataTable.Row style={styles.mylandinfo_table_row}>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF' }}>
        {product_name}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF' }}>
        {product_planting_area}
      </DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  mylandinfo_container: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
  },

  mylandinfo_main_info_container: {
    width: WIDTH,
    height: 290,
    backgroundColor: '#000',
    borderBottomColor: '#FFF',
    borderBottomWidth: 0.2,
  },

  mylandinfo_name: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 'auto',
    marginTop: -10,
  },

  mylandinfo_second_info_container: {
    width: WIDTH,
    height: 200,
    backgroundColor: '#000',
    marginTop: 20,
  },

  mylandinfo_second_text: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 5,
    margin: 'auto',
  },

  mylandinfo_table: {
    width: WIDTH,
    height: 'auto',
  },

  mylandinfo_table_header: {
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 1,
    borderColor: '#FFF'
  },

  mylandinfo_table_row: {
    backgroundColor: '#000',
    height: HEIGHT / 16,
    borderWidth: 1,
    borderColor: '#FFF'
  },

  delete_button: {
    backgroundColor: '#F00',
    width: WIDTH-40,
    height: 70,
    marginLeft: 20,
    borderRadius: 50,
    marginTop: 0,
    marginBottom: 40,
  },

  delete_button_text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
  }
});

export default LandDeleteConsentScreen;
