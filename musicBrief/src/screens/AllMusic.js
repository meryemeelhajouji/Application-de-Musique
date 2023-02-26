import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import BottomNav from '../component/BottomNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNFS from 'react-native-fs';
import {ListMusic} from '../utils/ListMusic';

const MUSIC_DIRECTORY = RNFS.MusicDirectoryPath;
const rootPath = RNFS.ExternalStorageDirectoryPath + '/Music/';
console.log(MUSIC_DIRECTORY);
console.log(rootPath);

function AllMusic({navigation}) {
  const [musicFiles, setMusicFiles] = useState([]);

  // async function playMusic() {
  //   navigation.navigate('PlayMusic');

  // }

  useEffect(() => {
    ListMusic().then(res => {
      console.log(res);
      setMusicFiles(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AllMusic</Text>

      {musicFiles.map((data, i) => (
        <View key={i} style={styles.listContainer}>
          <Image
            source={require('../assets/img/images.jpg')}
            style={styles.image}
          />
          <TouchableOpacity onPress={() => navigation.navigate("PlayMusic", { key:data.id})}>
            <Text style={styles.songTitle}>{data.title}</Text>
            <Text style={styles.nameArtist}>Name Of Artist: unconnu</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" color="white" size={30} />
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.maincontainer}></View>
      <BottomNav />
      <View />
    </View>
  );
}

export default AllMusic;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  maincontainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#EEEEEE',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  songTitle: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: '600',
    color: '#EEEEEE',
  },
  nameArtist: {
    fontSize: 14,
    marginLeft: 10,
    color: '#EEEEEE',
  },
});
