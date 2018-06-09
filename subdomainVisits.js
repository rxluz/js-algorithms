var subdomainVisits = function(cpdomains) {
  //create a array with all the structure
  const visits = cpdomains.reduce((acumm, value) => {
    const total = parseInt(value.split(" ")[0]);
    const url = value.split(" ")[1];

    //add the original value
    acumm[url] = {
      total: ((acumm[url] || {}).total || 0) + total,
      url,
    };

    urlPieces = url.split(".");

    //check if is more than one level domain
    if (urlPieces.length > 1) {
      //add the first level (the last level was added before)
      acumm[urlPieces[urlPieces.length - 1]] = {
        total:
          ((acumm[urlPieces[urlPieces.length - 1]] || {}).total || 0) + total,
        url: urlPieces[urlPieces.length - 1],
      };

      if (urlPieces.length > 2) {
        //add the second level (the first and last level was added before)
        const thirdLevelURL = `${urlPieces[urlPieces.length - 2]}.${
          urlPieces[urlPieces.length - 1]
        }`;
        acumm[thirdLevelURL] = {
          total: ((acumm[thirdLevelURL] || {}).total || 0) + total,
          url: thirdLevelURL,
        };
      }
    }

    return acumm;
  }, {});

  return Object.values(visits).reduce(
    (acumm, { total, url }) => {
      acumm.push(`${total} ${url}`);
      return acumm;
    },

    [],
  );
};
