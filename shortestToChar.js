/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  //create a array with all position of C in S
  const listCInS = S.split("").reduce((acum, currentValue, index) => {
    if (currentValue === C) {
      acum.push(index);
    }
    return acum;
  }, []);

  //analyse the position of current letter and compare with the positions of C in S
  const getTheClosest = currentIndex => {
    return listCInS.reduce((acum, currentValue) => {
      const diff =
        currentIndex > currentValue
          ? currentIndex - currentValue
          : currentValue - currentIndex;

      return diff < acum ? diff : acum;
    }, S.length - 1);
  };

  //interate all itens of S
  return S.split("").reduce((acum, currentValue, index) => {
    //get the closest position to C in S and add in a final push
    acum.push(getTheClosest(index));

    return acum;
  }, []);
};
