import RNFS from 'react-native-fs';

export const ListMusic = () => {
  const list = [];
  return RNFS.readDir(RNFS.ExternalStorageDirectoryPath + '/Music').then(
    contents => {
      for (let content in contents) {
        if (contents[content]['name'].endsWith('.mp3')) {
          list.push({
            url: contents[content]['path'],
            title: contents[content]['name'],
            id: content,
          });
        }
      }
      return list;
    },
  );
};
