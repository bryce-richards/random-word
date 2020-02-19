const buildDefinitions = data => {
  const definitions = data.map(def => {
    let { fl, shortdef } = def;
    return { fl, shortdef };
  });

  return definitions;
}

export default buildDefinitions;