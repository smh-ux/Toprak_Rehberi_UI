import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="LandAdd" component={LandAddScreen} />
        <Stack.Screen name="MyLand" component={MyLandScreen} />
        <Stack.Screen name="MyLandInfo" component={MyLandInfoScreen} />
        <Stack.Screen name="SuccessRate" component={SuccessRateScreen} />
        <Stack.Screen name="FeedBack" component={FeedBackScreen} />
        <Stack.Screen name="ProductAdd" component={ProductAddScreen} />
        <Stack.Screen name="ProductInfo" component={ProductInfoScreen} />
        <Stack.Screen name="ProductInfoFull" component={ProductInfoFullScreen} />
        <Stack.Screen name="Choose" component={ChooseScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MyLandHarvest" component={MyLandHarvestScreen} />
        <Stack.Screen name="AnyLandInfo" component={AnyLandInfoScreen} />
        <Stack.Screen name="SuccessRateInfo" component={SuccessRateInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
