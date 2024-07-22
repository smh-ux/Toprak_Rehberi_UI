import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { DataTable } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const SuccessRateScreen = ({ setScreen }) => {
    return(
        <SafeAreaView>
            <View style={styles.successrate_container}>
                <DataTable style={styles.successrate_table}>
                    <DataTable.Header style={styles.successrate_table_header}>
                        <DataTable.Title>Mahsul Adı</DataTable.Title>
                        <DataTable.Title>Hasat Dönemi</DataTable.Title>
                        <DataTable.Title>Başarı Oranı</DataTable.Title>
                        <DataTable.Title>Ekim Dönemi</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row style={styles.successrate_table_row}>
                        <DataTable.Cell textStyle={{fontSize: 13}}>Arpa</DataTable.Cell>
                        <DataTable.Cell textStyle={{fontSize: 13}}>İlkbahar/Yaz</DataTable.Cell>
                        <DataTable.Cell textStyle={{fontSize: 13}} style={{marginRight: -20, marginLeft: 20}}>% 44</DataTable.Cell>
                        <DataTable.Cell textStyle={{fontSize: 13}}>Kasım/Aralık</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.successrate_table_row}>
                        <DataTable.Cell textStyle={{fontSize: 13}}>Domates</DataTable.Cell>
                        <DataTable.Cell textStyle={{fontSize: 13}}>Yaz/Sonbahar</DataTable.Cell>
                        <DataTable.Cell textStyle={{fontSize: 13}} style={{marginRight: -20, marginLeft: 20}}>% 82</DataTable.Cell>
                        <DataTable.Cell textStyle={{fontSize: 13}}>Mayıs/Haziran</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row style={styles.successrate_table_row}>
                        <DataTable.Cell textStyle={{fontSize: 13}}>Taze Fasulye</DataTable.Cell>
                        <DataTable.Cell textStyle={{fontSize: 13}}>Yaz</DataTable.Cell>
                        <DataTable.Cell textStyle={{fontSize: 13}} style={{marginRight: -20, marginLeft: 20}}>% 71</DataTable.Cell>
                        <DataTable.Cell textStyle={{fontSize: 13}}>Şubat/Mart</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    successrate_container: {
        width: WIDTH,
        height: HEIGHT
    },

    successrate_table: {
        borderColor: '#000',
        borderWidth: 1,
        width: WIDTH,
        height: 200
    },

    successrate_table_header: {
        margin: 0
    },

    successrate_table_row: {
        height: 10,
    },

    successrate_table_row_rate: {
        marginRight: -20,
        marginLeft: 20
    }
});

export default SuccessRateScreen;