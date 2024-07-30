import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';
import { Button, RadioButton } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const FeedBackScreen = ({ setScreen }) => {
    const name = "Semih Okumuş";
    const date = "03.01.2024";

    return(
        <SafeAreaView>
            <View style={styles.view1}>
                <Text style={styles.view1_text1}>Sn.{name}</Text>
                <Text style={styles.view1_text2}>{date} tarihli ekimini yapmış olduğunuz ürünler için bu anketi doğru şekilde doldurmanız önem arz eder. Ekimini yapmış olduğunuz ürünlerin listesi aşağıda yer almaktadır. Buna göre gözlemleriniz nelerdir?</Text>
            </View>
            <RadioButtons 
                product_name={"Arpa"}
            />
            <RadioButtons
                product_name={"Taze Fasulye"}
            />
            <TouchableOpacity style={styles.button} onPress={send}>
                <Text style={styles.button_text}>Gönder</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const send = () => {
    Alert.alert('Hey', 'You send it');
}

const RadioButtons = ({ product_name }) => {

    const [checked, setChecked] = useState('');

    return(
        <View style={{flexDirection:'row', marginLeft:40}}>
            <View style={styles.view2_text1}>
                <Text style={styles.product_name}>{product_name}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.radio_button}>
                    <Text>Good</Text>
                    <RadioButton 
                        value='Good'
                        status={ checked === 'Good' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Good')}
                    />
                </View>
                <View style={styles.radio_button}>
                    <Text style={{marginLeft:-5}}>Normal</Text>
                    <RadioButton 
                        value='Normal'
                        status={ checked === 'Normal' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Normal')}
                    />
                </View>
                <View style={styles.radio_button}>
                    <Text style={{marginLeft:5}}>Bad</Text>
                    <RadioButton 
                        value='Bad'
                        status={ checked === 'Bad' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Bad')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view1: {
        width: WIDTH-40,
        height: 200,
        marginLeft: 20,
        marginTop: 10
    },

    view1_text1: {
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },

    view1_text2: {
        color: '#000',
        textAlign: 'center'
    },

    view2_text1: {
        width: 140
    },

    product_name: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 20
    },

    radio_button: {
        marginLeft: 25
    },

    button: {
        width:100,
        height: 50,
        backgroundColor: '#000',
        marginLeft: WIDTH/2-50,
        marginTop: 50,
    },

    button_text: {
        color: '#FFF',
        margin: 'auto',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default FeedBackScreen;