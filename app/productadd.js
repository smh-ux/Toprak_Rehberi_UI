import React from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Header from './header';
import { setStatusBarTranslucent } from 'expo-status-bar';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ProductAddScreen = ({ setScreen }) => {
    const [selected, setSelected] = React.useState('');

    const back = '<';

    const data = [
        {key:'1', value:'Domates', disabled:false},
        {key:'2', value:'Taze Fasulye', disabled:false},
        {key:'3', value:'Biber', disabled:false},
        {key:'4', value:'Taze Patates', disabled:false},
        {key:'5', value:'Bamya', disabled:false},
        {key:'6', value:'Arpa', disabled:false},
        {key:'7', value:'Buğday', disabled:false},
      ]

    return(
        <View style={styles.productAdd_container}>
            <Header 
                text={'Ürün Ekle'}
                method={() => setScreen('MyLandInfoScreen')}
            />
            <Text style={{backgroundColor: '#000', fontSize: 20, color: '#FFF', marginLeft: 20, marginBottom: -15, marginTop: 40, fontWeight: 'bold'}}>Ürün</Text>
            <SelectList 
                boxStyles={styles.productAdd_containerAdd_select_list_box}
                inputStyles={styles.productAdd_select_list_input}
                dropdownStyles={styles.productAdd_select_list_drop}
                dropdownItemStyles={styles.productAdd_select_list_items}
                dropdownTextStyles={styles.productAdd_select_list_item_text}
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
            />
            <Text style={{backgroundColor: '#000', fontSize: 20, color: '#FFF', marginLeft: 20, marginBottom: -15, marginTop: 20, fontWeight: 'bold'}}>Alan</Text>
            <TextInput 
                style={styles.productAdd_text_input}
                placeholder='Ekeceğiniz Alanı Giriniz'
                placeholderTextColor={'#000'}
                keyboardType='numeric'
            />
            <TouchableOpacity style={styles.productAdd_submit_button}>
                <Text style={styles.productAdd_submit_button_text}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    productAdd_container: {
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: '#000'
    },

    productAdd_container_title: {
        width: WIDTH,
        borderBottomWidth: 1,
        borderColor: '#FFF',
        height: 80,
        flexDirection: 'row',
    },

    productAdd_back_container: {

    },

    productAdd_back: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
    },

    productAdd_container_title_text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 'auto'
    },

    productAdd_containerAdd_select_list_box: {
        backgroundColor: '#FFF',
        width: WIDTH-40,
        marginLeft: 20,
        marginTop:25,
    },

    productAdd_select_list_input: {
    },

    productAdd_select_list_drop:{
        backgroundColor: '#FFF',
        width: WIDTH-40,
        marginLeft: 20,
        marginTop:20,
    },

    productAdd_select_list_items: {
    },

    productAdd_select_list_item_text: {
        color: '#000',
        fontWeight: 'bold',
    },

    productAdd_text_input: {
        backgroundColor: '#FFF',
        width: WIDTH-40,
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        color: '#000'
    },

    productAdd_submit_button: {
        backgroundColor: '#FFF',
        width: WIDTH-40,
        marginLeft: 20,
        marginTop: 40,
        borderRadius: 20,
        padding: 10
    },

    productAdd_submit_button_text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 'auto'
    }
});

export default ProductAddScreen;