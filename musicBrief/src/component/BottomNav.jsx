import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

function BottomNav() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonIconWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" color="#00ffff" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AllMusic')}>
          <Ionicons name="musical-notes" color="white" size={30} />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Lyrics')}>
          <Ionicons name="ios-list-outline" color="white" size={30} />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ellipsis-horizontal" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  buttonContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E46',
    borderWidth: 1,
  },
  buttonIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
