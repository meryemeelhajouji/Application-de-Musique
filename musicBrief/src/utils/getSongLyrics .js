import axios from 'axios';

const CLIENT_ACCESS_TOKEN = 'gkgvtHtdTWCR3Ukb_qMX019_woMeUf03g7Ne1rB47cvCPaBKvaZDpl8etWbSiC1g';

const getSongLyrics = async (songId) => {
  try {
    const url = `https://api.genius.com/songs/${songId}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${CLIENT_ACCESS_TOKEN}`,
      },
    });
    const lyrics = response.data.response.song.lyrics;
    console.log(lyrics)
    return lyrics;
  } catch (error) {
    console.error(error);
  }
};

export default getSongLyrics;
