import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import { DataTable } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const MyLandInfoScreen = ({ setScreen }) => {
    const land = 'Tarla';
    const city = 'Ankara';
    const town = 'Polatlı';
    const neighborhood = 'Özyurt';
    const area = 1000;
    
    return(
        <SafeAreaView>
            <View style={styles.mylandinfo_container}>
                <View style={styles.mylandinfo_header}>
                    <Text style={styles.mylandinfo_header_title}>Arazi Bilgi Ekranı</Text>
                </View>
                <View style={styles.mylandinfo_main_info_container}>
                    <Image 
                    source={require('@/assets/images/welcome2.jpeg')}//Bunu açılış sayfası yap animasyonlu bir şekilde.
                    style={styles.mylandinfo_image}
                    />
                    <Text style={styles.mylandinfo_name}>Arazim</Text>
                </View>        
                <View style={styles.mylandinfo_second_info_container}>
                    <Text style={styles.mylandinfo_second_text}>Arazi Tipi:  {land}</Text>
                    <Text style={styles.mylandinfo_second_text}>İl:  {city}</Text>
                    <Text style={styles.mylandinfo_second_text}>İlçe:  {town}</Text>
                    <Text style={styles.mylandinfo_second_text}>Mahalle:  {neighborhood}</Text>
                    <Text style={styles.mylandinfo_second_text}>Alan:  {area} m2</Text>
                </View>
                <DataTable style={styles.mylandinfo_table}>
                    <DataTable.Header style={styles.mylandinfo_table_header}>
                        <DataTable.Title style={styles.mylandinfo_table_header_title}>Mahsul Adı</DataTable.Title>
                        <DataTable.Title style={styles.mylandinfo_table_header_title}>Ekilen m2</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row style={styles.mylandinfo_table_row}>
                        <DataTable.Cell style={styles.mylandinfo_table_row_cell}>Domates</DataTable.Cell>
                        <DataTable.Cell style={styles.mylandinfo_table_row_cell}>500</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.mylandinfo_table_row}>
                        <DataTable.Cell style={styles.mylandinfo_table_row_cell}>Taze Patates</DataTable.Cell>
                        <DataTable.Cell style={styles.mylandinfo_table_row_cell}>200</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.mylandinfo_table_row}>
                        <DataTable.Cell style={styles.mylandinfo_table_row_cell}>Biber</DataTable.Cell>
                        <DataTable.Cell style={styles.mylandinfo_table_row_cell}>300</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
                <TouchableOpacity style={styles.mylandinfo_add_button_opacity} onPress={() => setScreen('AddProductScreen')}>
                    <View style={styles.mylandinfo_add_button}>
                        <Text style={styles.mylandinfo_add_button_text}>Ürün Ekle</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mylandinfo_container: {
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: '#000',
    },

    mylandinfo_header: {
        width: WIDTH,
        height: 100,
        borderBottomColor: '#FFF',
        borderBottomWidth: 1,
    },

    mylandinfo_header_title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        margin: 'auto',
    },

    mylandinfo_main_info_container: {
        width: WIDTH,
        height: 300,
        backgroundColor: '#000',
        borderBottomColor: '#FFF',
        borderBottomWidth: 0.2
    },

    mylandinfo_image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        margin: 'auto',
    },

    mylandinfo_name: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 'auto',
        marginTop: -10
    },

    mylandinfo_second_info_container: {
        width: WIDTH,
        height: 200,
        backgroundColor: '#000',
        borderBottomColor: '#FFF',
        borderBottomWidth: 1
    },
    
    mylandinfo_second_text: {
        color: '#FFF',
        fontSize: 20,
        marginTop: 5,
        margin: 'auto',
    },

    mylandinfo_table: {
        padding: 15,
    },

    mylandinfo_table_header: {
        backgroundColor: '#FFF',
    },  

    mylandinfo_table_row: {
        backgroundColor: '#FFF',
    },

    mylandinfo_add_button_opacity: {
        position: 'absolute'
    },

    mylandinfo_add_button: {
        position: 'absolute',
        top: 680,
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
    }

});

export default MyLandInfoScreen;