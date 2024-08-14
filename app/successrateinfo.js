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
const address = 'Ankara Yıldız mahallesi 13.sokak no:27 Gölbaşı/Haymana';
const land_info_title = 'Arazi Bilgisi:';
const land_info = 'Ada no:979, Parsel no:14, Alan:500m2';

const land_no = 2;

const SuccessRateInfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.successrate_container}>
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.view1}>
            <Text style={styles.view1_text1}>Sn.{name}</Text>
            <Text style={styles.view1_text2}>{address}</Text>
            <Text style={styles.view1_text3}>{land_info_title}</Text>
            <Text style={styles.view1_text4}>{land_info}</Text>
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
            <DataTable.Title>Mahsul Adı</DataTable.Title>
            <DataTable.Title>Hasat Dönemi</DataTable.Title>
            <DataTable.Title>Başarı Oranı</DataTable.Title>
            <DataTable.Title>Ekim Dönemi</DataTable.Title>
          </DataTable.Header>
          <ScrollView vertical>
            <Table
              product_name={'Domates'}
              product_harvest_time={'İlkbahar/Yaz'}
              success_rate={44}
              product_planting_time={'Kasım/Aralık'}
            />
            <Table
              product_name={'Biber'}
              product_harvest_time={'İlkbahar/Yaz'}
              success_rate={44}
              product_planting_time={'Kasım/Aralık'}
            />
            <Table
              product_name={'Fasulye'}
              product_harvest_time={'İlkbahar/Yaz'}
              success_rate={44}
              product_planting_time={'Kasım/Aralık'}
            />
          </ScrollView>
        </DataTable>
      </View>
    </SafeAreaView>
  );
};

const Table = ({
  product_name,
  product_harvest_time,
  success_rate,
  product_planting_time,
}) => {
  return (
    <DataTable.Row style={styles.successrate_table_row}>
      <DataTable.Cell textStyle={{ fontSize: 13 }}>
        {product_name}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13 }}>
        {product_harvest_time}
      </DataTable.Cell>
      <DataTable.Cell
        textStyle={{ fontSize: 13 }}
        style={{ marginRight: -20, marginLeft: 20 }}>
        % {success_rate}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13 }}>
        {product_planting_time}
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

  view1_text3: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
  },

  view1_text4: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
  },

  view2: {
    width: WIDTH,
    height: 35,
    marginTop: 10,
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
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: WIDTH,
    height: 300,
    marginTop: 25,
  },

  successrate_table_header: {
    margin: 0,
    color: '#000',
  },
});

export default SuccessRateInfoScreen;