import React, { useState } from 'react';

import WelcomeScreen from './welcome';
import LoginScreen from './login';
import RegisterScreen from './register';
import LandAddScreen from './landadd';
import MyLandScreen from './myland';
import MyLandInfoScreen from './mylandinfo';
import AddProductScreen from './addproduct';

const App = () => {
  const [screen, setScreen] = useState('WelcomeScreen');

  if (screen === 'WelcomeScreen') {
    return <WelcomeScreen setScreen={setScreen} />;
  } else if (screen === 'LoginScreen') {
    return <LoginScreen setScreen={setScreen} />;
  } else if (screen === 'RegisterScreen') {
    return <RegisterScreen setScreen={setScreen} />
  } else if (screen === 'LandAddScreen') {
    return <LandAddScreen setScreen={setScreen} />
  } else if (screen === 'MyLandScreen') {
    return <MyLandScreen setScreen={setScreen} />
  } else if (screen === 'MyLandInfoScreen') {
    return <MyLandInfoScreen setScreen={setScreen} />
  } else if (screen === 'AddProductScreen') {
    return <AddProductScreen setScreen={setScreen} />
  }
}

export default App;