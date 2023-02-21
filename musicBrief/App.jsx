import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {Test} from './src/screens/Test';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Test" component={Test} options={{headerShown: true}} />
        <Screen name="Home" component={Home} options={{headerShown: true}} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
