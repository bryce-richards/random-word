import { API_HOST_DEF, API_KEY_DEF } from './constants';

const fetchDefinition = async (word) => {
  // const url = `${API_HOST_DEF}/${word}?key=${API_KEY_DEF}`;
  const url = `${API_HOST_DEF}/might?key=${API_KEY_DEF}`;
  const res = await fetch(url);

  const json = await res.json();
  
  return json;
}

export default fetchDefinition;