import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists should never be nested'])

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const MyLandInfoScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [data, setData] = useState([]);
  const landId = item.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.125.44:8080/api/products/land/${landId}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [landId]);

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.mylandinfo_show_button_opacity}
        onPress={() => navigation.navigate('SuccessRateInfo', { item })}>
        <View style={styles.mylandinfo_show_button}>
          <Text style={styles.mylandinfo_show_button_text}>Toprak Rehberi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mylandinfo_add_button_opacity}
        onPress={() => navigation.navigate('SuccessRate', { item })}>
        <View style={styles.mylandinfo_add_button}>
          <Text style={styles.mylandinfo_add_button_text}>Ürün Ekle</Text>
        </View>
      </TouchableOpacity>
      <ScrollView
        style={{ zIndex: 2, marginTop: 0 }}
        showsVerticalScrollIndicator={false}>
        <View style={{width:WIDTH, height:HEIGHT-170}}></View>
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
            source={require('../assets/images/welcome2.jpeg')} //Bunu açılış sayfası yap animasyonlu bir şekilde.
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

  mylandinfo_show_button_opacity: {
    position: 'absolute',
    zIndex: 7,
  },

  mylandinfo_show_button: {
    position: 'absolute',
    top: 550,
    left: 260,
    width: 104,
    height: 104,
    borderRadius: 60,
    backgroundColor: '#FFF',
  },

  mylandinfo_show_button_text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
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
    backgroundColor: '#FFF',
  },

  mylandinfo_add_button_text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
  },
});

export default MyLandInfoScreen;
