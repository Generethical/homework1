// 12. Working with Promises
//     To complete this task you will need
// Sing up at https://geocode.xyz/ and get the API key.
//     Read about fetch(). Use it to send requests in your browser.
//     Request example:
//     http://geocode.xyz/Minsk?json=1&auth=<your_key_here>
//         - Send parallel requests for information about cities - Minsk, Madrid, Rome. Display the result in format: city - country.
// - Using Promise.race get the country of these cities - Paris, Nice. Display result. - Write a function that returns a promise that resolves
// any cities' names after 3 second.
// After you get names send parallel requests for information about cities. Display the country of the cities.
// - Handle errors

const fetch = require("node-fetch");
const urlsToAll = ['http://geocode.xyz/Minsk?json=1&auth=153164625196849893706x36072',
              'http://geocode.xyz/Madrid?json=1&auth=153164625196849893706x36072',
              'http://geocode.xyz/Rome?json=1&auth=153164625196849893706x36072']


Promise.all(urlsToAll.map(url => fetch(url).then(response => response.json()).then(data=>{
    console.log(`${data.standard.city} - ${data.standard.countryname}`)
}).catch(error=>{
    console.error('Failed to fetch one or more of these URLs:');
    console.log(urlsToAll);
    console.error(error);
})))
