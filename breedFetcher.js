const breed = process.argv[2];
const request = require('request');

const fetchBreed = function(breed) {
  let breedURL = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;
  request(breedURL, (error, response, body) => {
    console.log(body);
    console.log(typeof body);
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("This breed cannot be found");
    } else {
      console.log(data[0].description);
    }
  });
};

fetchBreed(breed);