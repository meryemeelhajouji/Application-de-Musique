import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import BottomNav from '../component/BottomNav';
import TrackPlayer from 'react-native-track-player';
import {ListMusic} from '../utils/ListMusic';

function PlayMusic({navigation, route}) {
  // TrackPlayer.add(ListMusic());
  // TrackPlayer.skip(parseInt(key?.key));
  // TrackPlayer.play();
  // SetisPlaying(true);
  const music = async () => {
    try {
      const {key} = route.params;
      TrackPlayer.setupPlayer();
      TrackPlayer.add(await ListMusic());

      console.log('oum' + key);
      TrackPlayer.skip(parseInt(key));
      TrackPlayer.play();
    } catch (error) {
      console.error('Error initializing track player:', error);
    }
    console.log('hoho');

    console.log(await ListMusic());
  };

  music();
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
              size={35}
            />
          </TouchableOpacity>
        </View>
      </View>

      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
}

export default PlayMusic;

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

  imageWrapper: {
    width: 300,
    height: 350,
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