import {Text, View, StyleSheet} from 'react-native';
import BottomNav from '../component/BottomNav';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Text>hello this is home</Text> */}
      <View style={styles.maincontainer}></View>

      <BottomNav navigation={navigation} />
      <View />
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  maincontainer: {
    flex: 1,
  },
});
