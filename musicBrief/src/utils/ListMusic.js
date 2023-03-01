import RNFS from 'react-native-fs';

export const ListMusic = async () => {
  // const list = [];
  let list = await RNFS.readDir(RNFS.ExternalStorageDirectoryPath + '/Music');
  list = list.filter(e => e.isFile());
  list = list.filter(e => {
    let n = e.name.split('.').pop();

    return n.toLowerCase() == 'mp3';
  });
  return list.map((e, i) => {
    return {
      title: e.name,
      id: i,
      url: e.path,
    };
  });

};
