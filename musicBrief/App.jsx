import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import AllMusic from './src/screens/AllMusic';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="AllMusic" component={AllMusic} options={{headerShown: false}} />
        <Screen name="Home" component={Home} options={{headerShown: false}} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
