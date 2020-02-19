const labels = [
  "adjective",
  "adverb",
  "noun" ,
  "verb"
]

const determineLabel = fl => {
  let label = "other";
  labels.forEach(l => {
    if (fl.indexOf(l) > -1) {
      label = l;
      return;
    }
  });

  return label;
}

export default determineLabel;