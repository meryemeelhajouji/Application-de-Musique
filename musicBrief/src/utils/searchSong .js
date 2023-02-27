import axios from 'axios';

const CLIENT_ACCESS_TOKEN = 'gkgvtHtdTWCR3Ukb_qMX019_woMeUf03g7Ne1rB47cvCPaBKvaZDpl8etWbSiC1g';

const searchSong = async (title, artist) => {
  try {
    const url = 'https://api.genius.com/search';
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${CLIENT_ACCESS_TOKEN}`,
      },
      params: {
        q: `${title} ${artist}`,
      },
    });
    const songId = response.data.response.hits[0].result.id;
    return songId;
  } catch (error) {
    console.error(error);
  }
};

export default searchSong;
