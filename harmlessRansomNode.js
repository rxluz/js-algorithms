/* solution 2 */
function harmlessRansomNode2(nodeText, magazineText) {
  const magazineTextArr = magazineText.match(/[a-z]+/gi);

  const nodeTextArr = nodeText.match(/[a-z]+/gi);

  const magazineObj = magazineTextArr.reduce(
    (acum, element) => ((acum[element] = (acum[element] || 0) + 1), acum),
    {},
  );

  return nodeTextArr.every(word => {
    if (!magazineObj[word]) {
      return false;
    }

    magazineObj[word]--;
    if (magazineObj[word] < 0) {
      return false;
    }

    return true;
  });
}

console.log(
  harmlessRansomNode2(
    "ola esse esse e um texto",
    "ola esse e a magazine que contem muitas palavras entre elas o texto e um bolo ",
  ),
);
