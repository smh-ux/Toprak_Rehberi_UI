import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutScreen = ({navigation}) => {

  useEffect(() => {
    const logout = async () => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userId');
        navigation.navigate('Welcome');
      } catch(e) {
        console.log(e);
      }
    };

    logout();
  }, []);

  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Logging out...</Text>
    </View>
  );
};

export default LogoutScreen;
