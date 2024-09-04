import React, { useState, useEffect } from 'react';
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

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const name = 'Semih';
const address = 'Ankara Demetevler mahallesi Çankaya/Ankara';

const land_no = 2;

const SuccessRateInfoOtherScreen = ({ route, navigation }) => {
  const [data, setData]  = useState('');

  const { type, city, town, neighborhood } = route.params;

  console.log("Type: ", type);
  console.log("City: ", city);
  console.log("Town: ", town);
  console.log("Neighborhood: ", neighborhood);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.125.44:8080/api/products/fetching`
        );
        setData(response.data)
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  });

  return (
    <SafeAreaView>
      <View style={styles.successrate_container}>
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.view1}>
            <Text style={styles.view1_text1}>Sn.{item.user.username}</Text>
            <Text style={styles.view1_text2}>{item.city} {item.neighborhood} mahallesi {item.town}/{item.city}</Text>
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
              product_plant_time1={item.period.plant_start}
              product_plant_time2={item.period.plant_end}
              success_rate={item.successRate.rate}
              product_harvest_time1={item.period.harvest_start}
              product_harvest_time2={item.period.harvest_end}
            />
          )}
          />
        </DataTable>
      </View>
    </SafeAreaView>
  );
};

const Table = ({
  product_name,
  product_plant_time1,
  product_plant_time2,
  success_rate,
  product_harvest_time1,
  product_harvest_time2,
}) => {
  return (
    <DataTable.Row style={styles.successrate_table_row}>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF'}}>
        {product_name}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF'}}>
        {product_plant_time1}/{product_plant_time2}
      </DataTable.Cell>
      <DataTable.Cell
        textStyle={{ fontSize: 13, color:'#FFF'}}
        style={{ marginRight: -20, marginLeft: 20 }}>
        % {success_rate}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF' }}>
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
    height: 120,
    marginLeft: 75,
    marginTop: 55,
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
    marginBottom: 20,
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
    borderRadius: 30,
    width: WIDTH-40,
    height: 220,
    marginTop: 25,
    marginLeft: 20
  },

  successrate_table_header: {
    margin: 0,
    color: '#FFF',
  },
});

export default SuccessRateInfoOtherScreen;
