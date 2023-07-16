const request = require('request');

request("https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2], (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML
  
  const data = JSON.parse(body);
  data[0] ? console.log(data[0].description) : console.log("Breed not found.");
  //console.log(typeof data[0]);
  
});