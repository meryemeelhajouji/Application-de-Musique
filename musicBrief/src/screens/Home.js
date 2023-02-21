import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const {width, height} = Dimensions.get('window');

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        {/* images */}
        <View style={[styles.imageWrapper, styles.elevation]}>
          <Image
            source={require('../assets/img/images.jpg')}
            style={styles.musicImage}
          />
        </View>

        {/* song content */}
        <View>
          <Text style={[styles.songContent, styles.songTitle]}>
            {' '}
            Song Title
          </Text>
          <Text style={[styles.songContent, styles.songArist]}>
            {' '}
            Name Artist
          </Text>
        </View>

        {/* slider */}

        <View>
          <Slider
            style={styles.progressBar}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#00ffff"
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#fff"
            onSlidingComplete={() => {}}
          />
          {/* music progress duratuion */}
          <View style={styles.progressDuration}>
            <Text style={styles.progressText}> 00:00</Text>
            <Text style={styles.progressText}> 00:00</Text>
          </View>
        </View>

        {/* music controler */}
        <View style={styles.musicControler}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-back-outline" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-pause-circle" color="white" size={75} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-skip-forward-outline"
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonIconWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="home-outline" color="#00ffff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="musical-notes" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal" color="white" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
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

  imageWrapper: {
    width: 220,
    height: 280,
    marginBottom: 25,
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
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
  songContent: {
    textAlign: 'center',
    color: '#EEEEEE',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  songArist: {
    fontSize: 16,
    fontWeight: '300',
  },
  progressBar: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressDuration: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    color: '#fff',
    fontWeight: '500',
  },
  musicControler: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 15,
  },
});
