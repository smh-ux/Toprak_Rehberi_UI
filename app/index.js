import React from 'react';

import { TouchableOpacity, StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AuthProvider from './authprovider.js';
import { LogBox } from 'react-native';

import WelcomeScreen from './welcome';
import LoginScreen from './login';
import RegisterScreen from './register';
import LandAddScreen from './landadd';
import MyLandScreen from './myland';
import MyLandInfoScreen from './mylandinfo';
import SuccessRateScreen from './successrate';
import FeedBackScreen from './feedback';
import ProductAddScreen from './productadd';
import ProductInfoScreen from './productinfo';
import ProductInfoFullScreen from './productinfofull';
import ChooseScreen from './choose';
import MyLandHarvestScreen from './mylandharvest';
import AnyLandInfoScreen from './anylandinfo';
import SuccessRateInfoScreen from './successrateinfo';
import LandDeleteScreen from './landdelete';
import LandDeleteConsentScreen from './landdeleteconsent';
import LogoutScreen from './logout';
import SuccessRateInfoOtherScreen from './successrateinfoother';

LogBox.ignoreLogs(['The action \'NAVIGATE\' with payload']);


const Stack = createStackNavigator();

const CustomBackButton = (props) => (
  <TouchableOpacity {...props}>
    <Ionicons name="arrow-back" size={24} color="#FFF"/>
  </TouchableOpacity>
);

const CustomBackButton1 = (props) => (
  <TouchableOpacity {...props}>
    <Ionicons name="arrow-back" size={24} color="#000" />
  </TouchableOpacity>
);

const App = () => {
  return (
      <NavigationContainer independent={true}>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: '#FFF' },
          headerBackImage: () => <CustomBackButton />,
        }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={LoginScreen} options={{
            headerStyle: {backgroundColor:'#FFF'},
            headerTitleStyle: {color:'#000'},
            headerBackImage: () => <CustomBackButton1 />,
          }}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{
            headerStyle: {backgroundColor:'#FFF'},
            headerTitleStyle: {color:'#000'},
            headerBackImage: () => <CustomBackButton1 />,
          }}/>
          <Stack.Screen name="LandAdd" component={LandAddScreen} options={{headerTitle: 'Arazi Ekle'}} />
          <Stack.Screen name="MyLand" component={MyLandScreen} options={{headerTitle: 'Arazilerim'}} />
          <Stack.Screen name="MyLandInfo" component={MyLandInfoScreen} options={{headerTitle: 'Arazi Bilgisi'}} />
          <Stack.Screen name="SuccessRate" component={SuccessRateScreen} options={{headerTitle: 'Başarı Oranı'}} />
          <Stack.Screen name="FeedBack" component={FeedBackScreen} options={{headerTitle: 'Geribildirim'}} />
          <Stack.Screen name="ProductAdd" component={ProductAddScreen} options={{headerTitle: 'Ürün Ekle'}} />
          <Stack.Screen name="ProductInfo" component={ProductInfoScreen} options={{headerTitle: 'Ürün Yetiştirme Rehberi'}} />
          <Stack.Screen name="ProductInfoFull" component={ProductInfoFullScreen} options={{headerTitle: 'Ürün Yetiştirme Rehberi'}} />
          <Stack.Screen name="Choose" component={ChooseScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="MyLandHarvest" component={MyLandHarvestScreen} options={{headerTitle: 'Arazilerim'}} />
          <Stack.Screen name="AnyLandInfo" component={AnyLandInfoScreen} options={{headerTitle: 'Başarı Oranı için Konum Seçim'}} />
          <Stack.Screen name="SuccessRateInfo" component={SuccessRateInfoScreen} options={{headerTitle: 'Başarı Oranı'}} />
          <Stack.Screen name="LandDelete" component={LandDeleteScreen}  options={{headerTitle: 'Arazilerim'}} />
          <Stack.Screen name="LandDeleteConsent" component={LandDeleteConsentScreen} options={{headerTitle: 'Arazi Sil'}} />
          <Stack.Screen name="Logout" component={LogoutScreen} />
          <Stack.Screen name="SuccessRateInfoOther" component={SuccessRateInfoOtherScreen} options={{headerTitle: 'Başarı Oranı'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
