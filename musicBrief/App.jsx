import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import AllMusic from './src/screens/AllMusic';
import PlayMusic from './src/screens/PlayMusic';
import Lyrics from './src/screens/Lyrics';


const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="AllMusic"
          component={AllMusic}
          options={{headerShown: false}}
        />
        <Screen name="Home" component={Home} options={{headerShown: false}} />
        <Screen
          name="PlayMusic"
          component={PlayMusic}
          options={{headerShown: false}}
        />
           <Screen
          name="Lyrics"
          component={Lyrics}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
