import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import { AuthContext } from './authprovider';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const land_no = 2;

const SuccessRateScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const periodId = item.id;
  const [data, setData] = useState('');
  const neighborhoodId = item.neighborhood_id.id;

  console.log("NID: ", item.neighborhood_id.id);

  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (!authData) {
  //     navigation.navigate('Login');
  //   }
  // }, [authData]);

  if(!item) {
    console.log('item yok')
  } else {
    console.log(item.neighborhood_id);
  }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://192.168.125.44:8080/api/successrate/byNeighborhood/${neighborhoodId}`
          );
          setData(response.data)
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    }, [periodId]);

  console.log('Data: ', data);

  return (
    <SafeAreaView>
      <View style={styles.successrate_container}>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.view1}>
              <Text style={styles.view1_text2}>{item.city} {item.neighborhood} mahallesi {item.town} / {item.city}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.view2_text1}>Arazi no: {land_no}</Text>
            </View>
          </View>
          <View>
            <View style={styles.view3}>
              <Text style={styles.view3_text1}>
                Arsanız için sunulmuş olan mahsul başarı oranı aşağıda yer
                almaktadır.
              </Text>
            </View>
          </View>
          <DataTable style={styles.successrate_table}>
            <DataTable.Header style={styles.successrate_table_header}>
              <DataTable.Title textStyle={{color:'#FFF'}}>Mahsul Adı</DataTable.Title>
              <DataTable.Title textStyle={{color:'#FFF'}}>Ekim Dönemi</DataTable.Title>
              <DataTable.Title textStyle={{color:'#FFF'}}>Başarı Oranı</DataTable.Title>
              <DataTable.Title textStyle={{color:'#FFF'}}>Hasat Dönemi</DataTable.Title>
            </DataTable.Header>
             <FlatList
             data={data}
             keyExtractor={(item) => item.id}
             renderItem={({ item }) => (
               <Table
                 product_name={item.name}
                 product_planting_time1={item.plant_start}
                 product_planting_time2={item.plant_end}
                 success_rate={item.averageRate}
                 product_harvest_time1={item.harvest_start}
                 product_harvest_time2={item.harvest_end}
               />
            )}
           />
          </DataTable>
          <TouchableOpacity
            style={styles.submit_button}
            onPress={() =>
              navigation.navigate('ProductAdd', {
                item,
              })
            }>
            <Text style={styles.submit_button_text}>Ürün Eklemeye Hazırım</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submit_button}
            onPress={() => navigation.navigate('ProductInfo')}>
            <Text style={styles.submit_button_text}>Ürün Yetiştirme Rehberi</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Table = ({
  product_name,
  product_planting_time1,
  product_planting_time2,
  success_rate,
  product_harvest_time1,
  product_harvest_time2,

}) => {
  return (
    <DataTable.Row>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF' }}>
        {product_name}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF' }}>
        {product_planting_time1}/{product_planting_time2}
      </DataTable.Cell>
      <DataTable.Cell
        textStyle={{ fontSize: 13, color:'#FFF' }}
        style={{ marginRight: -20, marginLeft: 20 }}>
        % {success_rate}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF'}}>
        {product_harvest_time1}/{product_harvest_time2}
      </DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  successrate_container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#000',
  },

  view1: {
    width: WIDTH - 150,
    height: 50,
    marginLeft: 75,
    marginTop: 35,
  },

  view1_text1: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
  },

  view1_text2: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
  },

  view2: {
    width: WIDTH,
    height: 35,
    marginLeft: 0,
  },

  view2_text1: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
  },

  view3: {
    width: WIDTH - 50,
    height: 50,
    marginLeft: 25,
  },

  view3_text1: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
  },

  successrate_table: {
    borderColor: '#FFF',
    backgroundColor: '#000',
    borderWidth: 1,
    width: WIDTH-40,
    height: 200,
    marginTop: 25,
    marginLeft: 20,
    borderRadius: 20
  },

  successrate_table_header: {
    margin: 0,
    color: '#000',
  },

  submit_button: {
    backgroundColor: '#FFF',
    width: WIDTH - 100,
    height: 50,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: -20,
    borderRadius: 50,
  },

  submit_button_text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
  },
});

export default SuccessRateScreen;
