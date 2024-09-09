import React, { useEffect, createContext, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [authData, setAuthData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const userId = await AsyncStorage.getItem('userId');

        if (token && userId) {
          setAuthData({ token, userId });
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Auth check error:', error);
        navigation.navigate('Login');
      }
    };

    checkAuthStatus();
  }, [navigation]);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userId');
      setAuthData(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={ authData, logout }>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;
