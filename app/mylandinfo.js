import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { DataTable } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const MyLandInfoScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const back = '<';

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.mylandinfo_add_button_opacity}
        onPress={() => navigation.navigate('SuccessRate')}>
        <View style={styles.mylandinfo_add_button}>
          <Text style={styles.mylandinfo_add_button_text}>Ürün Ekle</Text>
        </View>
      </TouchableOpacity>
      <ScrollView
        style={{ zIndex: 2, marginTop: 80 }}
        showsVerticalScrollIndicator={false}>
        <View style={{ width: WIDTH, height: HEIGHT - 220 }}></View>
        <DataTable style={styles.mylandinfo_table}>
          <DataTable.Header style={styles.mylandinfo_table_header}>
            <DataTable.Title>Mahsul Adı</DataTable.Title>
            <DataTable.Title>Ekilen m2</DataTable.Title>
          </DataTable.Header>
          <Table product_name={'Domates'} product_planting_area={500} />
          <Table product_name={'Taze Patates'} product_planting_area={200} />
          <Table product_name={'Biber'} product_planting_area={300} />
        </DataTable>
      </ScrollView>
      <View style={styles.mylandinfo_container}>
        <View style={styles.mylandinfo_main_info_container}>
          <Image
            source={require('./assets/welcome2.jpeg')} //Bunu açılış sayfası yap animasyonlu bir şekilde.
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
      <DataTable.Cell textStyle={{ fontSize: 13 }}>
        {product_name}
      </DataTable.Cell>
      <DataTable.Cell textStyle={{ fontSize: 13 }}>
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
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  mylandinfo_table_row: {
    backgroundColor: '#FFF',
    height: HEIGHT / 16,
  },

  mylandinfo_add_button_opacity: {
    position: 'absolute',
    zIndex: 7,
  },

  mylandinfo_add_button: {
    position: 'absolute',
    top: 660,
    left: 260,
    width: 104,
    height: 104,
    borderRadius: 60,
    backgroundColor: '#000',
  },

  mylandinfo_add_button_text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
  },
});

export default MyLandInfoScreen;