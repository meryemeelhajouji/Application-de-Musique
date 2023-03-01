import React, {useEffect, useState} from 'react';
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
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {ListMusic} from '../utils/ListMusic';

function PlayMusic({navigation, route}) {
  const [play, setPlayer] = useState(false);
  const [song, setSong] = useState();
  const [artist, setArtist] = useState();
  const progress = useProgress();
  
  useEffect(() => {
    const music = async () => {
      let l = await ListMusic();
      try {
        const {key} = route.params; 
        const {name} = route.params; 

        const [valeur1, valeur2] = name.split('_');
        const [valeur3, valeur4] = valeur2.split('.');
        
        TrackPlayer.setupPlayer();
        setPlayer(true);
        setArtist(valeur1);
        setSong(valeur3);
        l.forEach(async r => {
          await TrackPlayer.add(r);
        });
        await TrackPlayer.skip(key);
        await TrackPlayer.play();
        // console.log('hh');
      } catch (error) {
        console.error('Error initializing track player:', error);
      }
    };
    music();
  }, []);

  const pauseTrack = async () => {
    await TrackPlayer.pause();
    setPlayer(false);
  };
  const playTrack = async () => {
    await TrackPlayer.play();
    setPlayer(true);
  };
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
         {song} 
          </Text>
          <Text style={[styles.songContent, styles.songArist]}>
            {' '}
           {artist}
          </Text>
        </View>

        {/* slider */}

        <View>
          <Slider
            style={styles.progressBar}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#00ffff"
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#fff"
            onSlidingComplete={() => {}}
          />
          {/* music progress duratuion */}
          <View style={styles.progressDuration}>
            <Text style={styles.progressText}>{progress.position}</Text>
            <Text style={styles.progressText}>{progress.duration}</Text>
          </View>
        </View>

        {/* music controler */}
        <View style={styles.musicControler}>
          <TouchableOpacity>
            <Ionicons name="play-skip-back-outline" color="white" size={35} />
          </TouchableOpacity>
          {}
          <View>
            {play && (
              <TouchableOpacity onPress={pauseTrack}>
                <Ionicons name="ios-pause-circle" color="white" size={75} />
              </TouchableOpacity>
            )}
            {!play && (
              <TouchableOpacity onPress={playTrack}>
                <Ionicons name="play-circle-sharp" color="white" size={75} />
              </TouchableOpacity>
            )}
            {/* <TouchableOpacity onPress={pauseTrack}>
            <Ionicons name="ios-pause-circle" color="white" size={75} />
          </TouchableOpacity> */}
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-skip-forward-outline"
              color="white"
              size={35}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lyrics}>
        <TouchableOpacity
         onPress={() => navigation.navigate('Lyrics', {song: song , artist: artist})}>
          <Ionicons name="ios-list-outline" color="white" size={30} />
        </TouchableOpacity>
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
  lyrics: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
