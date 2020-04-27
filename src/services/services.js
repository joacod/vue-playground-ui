import * as axios from "axios";

const getLyrics = async function(artist, song) {
  // .Net Core Web API
  //const lyricsUrl = 'https://localhost:44309/api/v1/lyrics/';

  // Go Web API
  const lyricsUrl = "http://localhost:8080/api/v1/lyrics/";

  const response = await axios.get(lyricsUrl + artist + "/" + song);
  return response.data;
};

export const services = {
  getLyrics,
};
