const request = require('request');

const breed = process.argv[2];
// set breed command argument position

const breedFetcher = function(breed) {
  let breedURL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  // create variable for concatenating URL with command argument value
  request(breedURL, (error, response, body) => {
    const data = JSON.parse(body);
    // parse string and return the value
    if (data.length === 0) {
      console.log("This breed cannot be found");
      // if the length of data is 0, there is nothing in the object therefore there is no data
    } else if (JSON.parse(error) !== null) {
      console.log(`"message": "404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/"`)
      // of the parsed value of an error is not null (ie if there is a error response), console log the error on their website
    } else {
      console.log(data[0].description);
      // else print the description of the breed
    }
  });
};

breedFetcher(breed);