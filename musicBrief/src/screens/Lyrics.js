import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import BottomNav from '../component/BottomNav';
import {useWindowDimensions} from 'react-native';
import axios from 'axios';

import RenderHtml from 'react-native-render-html';

function Lyrics({navigation}) {
  const token =
    'yOlxjh0Y5l7kbOyhT7okLNk-kDTWA5dKVq5Pj2QF0zUdEf54cVQbAycVYaJxyzBK';
  const [lyrics, setLyrics] = useState('');
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
      const lyricsUrl = `https://api.genius.com/songs/${songId}`;
      const lyricsResponse = await axios.get(lyricsUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const lyricsSong = lyricsResponse.data.response.song.url;
      const response = await fetch(lyricsSong);
      const song = await response.text();
      // console.log(lyricsSong);
      setLyrics(song);
      // console.log(lyrics);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSongLyrics('lonely', 'akon');
  }, []);

  const {width} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>hello this is lyrics</Text>
        <View>
          {/* <HTML source={{ html: lyrics }} /> */}
          <RenderHtml contentWidth={width} source={{html: lyrics}} />
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
});
