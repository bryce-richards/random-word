import { API_HOST_WORD, API_KEY_WORD } from './constants';


const fetchWord = async () => {
  const url = `https://${API_HOST_WORD}/words/?random=true`;

  const res = await fetch(url, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": API_HOST_WORD,
      "x-rapidapi-key": API_KEY_WORD
    }
  });

  const json = await res.json();

  return json;
}

export default fetchWord;