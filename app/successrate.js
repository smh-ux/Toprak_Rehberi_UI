import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { DataTable } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const name = 'Semih Okumuş';
const address = 'Ankara Demetevler mahallesi Çankaya/Ankara';

const land_no = 2;

const SuccessRateScreen = ({ route, navigation }) => {
  const { item } = route.params;

  if(!item) {
    console.log('item yok')
  } else {
    console.log(item);
  }

  return (
    <SafeAreaView>
      <View style={styles.successrate_container}>
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.view1}>
            <Text style={styles.view1_text1}>Sn. {item.user.username}</Text>
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
          <ScrollView vertical>
            <Table
              product_name={'Arpa'}
              product_planting_time={'Ocak/Şubat'}
              success_rate={44}
              product_harvest_time={'Mart/Nisan'}
            />
            <Table
              product_name={'Domates'}
              product_planting_time={'Haziran/Temmuz'}
              success_rate={82}
              product_harvest_time={'Ağustos/Eylül'}
            />
            <Table
              product_name={'Taze Fasulye'}
              product_planting_time={'Ekim/Kasım'}
              success_rate={71}
              product_harvest_time={'Aralık/Ocak'}
            />
          </ScrollView>
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
  product_planting_time,
  success_rate,
  product_harvest_time,

}) => {
  return (
    <DataTable.Row>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF' }}>
        {product_name}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF' }}>
        {product_planting_time}
      </DataTable.Cell>
      <DataTable.Cell
        textStyle={{ fontSize: 13, color:'#FFF' }}
        style={{ marginRight: -20, marginLeft: 20 }}>
        % {success_rate}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13, color:'#FFF'}}>
        {product_harvest_time}
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
    marginTop: 5,
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
