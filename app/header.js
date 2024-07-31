import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Header = ({ text, method }) => {
    const back = '<';
    
    return(
        <View style={{width:WIDTH, height:80, flexDirection:'row', borderBottomWidth:0.5, borderColor:'#FFF', zIndex:5}}>
            <TouchableOpacity style={{width:20, marginLeft:20, marginRight:-20, marginTop:15}} onPress={method}>
                <Text style={{color:'#FFF', fontWeight:'bold', fontSize:35}}>{back}</Text>
            </TouchableOpacity>
            <Text style={{margin:'auto', color:'#FFF', fontWeight:'bold', fontSize:30}}>{text}</Text>
        </View>
    );
}

export default Header;