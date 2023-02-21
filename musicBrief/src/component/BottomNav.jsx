import React from 'react';
import {Text, View ,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
function BottomNav() {
  return (
      <View style={styles.container}>
        <Ionicons name='heart' color='red' size={30}/>
        <Text>button BottomNav  </Text>
      </View>
  )
}

export default BottomNav;

const styles =StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColr: '#555',
  },
})