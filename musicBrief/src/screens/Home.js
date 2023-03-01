import {Text, View, StyleSheet, Image} from 'react-native';
import BottomNav from '../component/BottomNav';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Text>hello this is home</Text> */}
      <View style={[styles.imageWrapper, styles.elevation]}>
        <Image
          source={require('../assets/img/download.jpg')}
          style={styles.musicImage}
        />
      </View>

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
  imageWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  musicImage: {
    width: '100%',
    height: '100%',
  },
  elevation: {
    elevation: 5,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
});
