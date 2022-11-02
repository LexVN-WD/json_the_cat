const request = require('request');
const breedName = process.argv[2];

request(breedURL, (error, response, body) => {
  // console.log(body);
  // console.log(typeof body);
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  console.log(data[0].description);
});

// const fetchBreed = function(breed, callback) {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

//   })
// }