import { API_HOST_WORD, API_KEY_WORD } from './constants';
import { API_HOST_DEF, API_KEY_DEF } from './constants';

const labels = [
  "adjective",
  "adverb",
  "noun" ,
  "verb"
]

export const fetchWord = async () => {
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
};

export const fetchDefinition = async (word) => {
  const url = `${API_HOST_DEF}/${word}?key=${API_KEY_DEF}`;
  
  const res = await fetch(url);

  const json = await res.json();
  
  return json;
};


export const determineLabel = fl => {
  let label = "other";
  labels.forEach(l => {
    if (fl.indexOf(l) > -1) {
      label = l;
      return;
    }
  });

  return label;
};

export default determineLabel;

export const buildDefinitions = data => {
  const definitions = data.map(def => {
    let { fl, shortdef } = def;
    return { fl, shortdef };
  });

  return definitions;
};