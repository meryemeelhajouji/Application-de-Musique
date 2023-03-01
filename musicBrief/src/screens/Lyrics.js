import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import BottomNav from '../component/BottomNav';
import {useWindowDimensions} from 'react-native';
import axios from 'axios';
import cheerio from 'cheerio';

import RenderHtml from 'react-native-render-html';

function Lyrics({navigation, route}) {
  const {song} = route.params; 
  const {artist} = route.params; 
  

  console.log('song', song);
  const token =
    'uoHR-HQhc0ktGpfaBzfw6Exc5IY96RaN5LIl_9tEoOTZZkkbZCvxur3j8bUhMDyX';
  const [Mlyrics, setLyrics] = useState('');
  // song lyrics
  const getSongLyrics = async (songTitle, artistName) => {
    try {
      const searchUrl = `https://api.genius.com/search?q=${songTitle} ${artistName}`;
      const searchResponse = await axios.get(searchUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const songId = searchResponse.data.response.hits[0].result.id;
      const response = await fetch(`https://api.genius.com/songs/${songId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      const lyricsUrl = json.response.song.url;
      const lyricsResponse = await fetch(lyricsUrl);
      const lyricsHtml = await lyricsResponse.text();
      const $ = cheerio.load(lyricsHtml);
      const headings = $('.Lyrics__Container-sc-1ynbvzw-6').text();
      console.log('headings', headings);
      setLyrics(headings);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSongLyrics(song , artist);
  }, []);

  const {width} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Lyrics Song </Text>
     


        <View>
          <Text style={styles.lyricsStyle}>{Mlyrics}</Text>
        </View>

        <View style={styles.maincontainer}></View>

        <BottomNav navigation={navigation} />
        <View />
      </View>
    </ScrollView>
  );
}

export default Lyrics;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  maincontainer: {
    flex: 1,
  },
  lyricsStyle: {
    textAlign: 'center',
    marginTop: 50,
    color: '#EEEEEE',
    fontSize: 25,
    fontWeight: '300',
  },
  title: {
    textAlign: 'center',
    color: '#EEEEEE',
    fontSize: 30,
    fontWeight: '600',
  },
  // song: {
  //   marginTop: 8,
  //   marginLeft: 8,
  //   color: '#EEEEEE',
  //   fontSize: 18,
  //   fontWeight: '300',
  // },
});
