//? Contains all the code responsible for interacting with the weather API and getting data



const key = 'fIuEX60fePsFV3D6a8szdqPWWgzuLFGI';     //* Stores the API key




/*
* Our first request is for the city code of the city, whose name we enter into the form
* After that, we'll fire another request, that uses this 'location_key' which was returned above
* and uses it to return the 'current weather conditions' of the app.
* 
? 1. City Search: Returns info for an array of cities that match the search text.

? Type: GET

* Resource URL: 'http://dataservice.accuweather.com/locations/v1/cities/search'
*
*
? 2. Current Conditions: eturns current conditions data for a specific location. Current conditions 
?    searches require a location key. Please use the Locations API to obtain the location key for your 
?    desired location. By default, a truncated version of the current conditions data is returned. 
?    The full object can be obtained by passing "details=true" into the url string.

? Type: GET

* Resouce URL 'http://dataservice.accuweather.com/currentconditions/v1/{locationKey}'
* {locationKey} = Unique ID used to search for a specified location
*/






//? Function to get the weather information for the city selected
const getWeather = async (id) =>  {     // This ID is the city key, returned from 'getCity'

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`; // id is part of the normal url, apikey is part of the query

    // Calling the API
    const response = await fetch(base+query);
    const data = await response.json();

    // console.log(data);
    return data ;           // This is also an array ( but contains only a single object :P)
}




//? Function to get the 'City' that we want to search the weather for
const getCity = async (city) => {   // We take in the city name as the parameter

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; //* Resouce URL
    const query = `?apikey=${key}&q=${city}` ;

    //? Whenever we see question mark '?' near the end of a URL, it means that we're adding
    //? 'Query Parameters' to the end of that URL.
    //? The '&' ampersand sign indicates that we're adding 'another' query parameter.

    // Calling the API (Returns a promise)
    const response = await fetch(base + query);     // Returns an array (acc. to API refernce)

    //? The + sign concatenates the two strings, converting them to a single string 'A URL'.

    const data = await response.json(); // This is an 'array' now, in JSON format

    return data[0] ;
    // The array is ranked from best to worst matches (they use some algo in backend, who cares :P)
};


// getCity('manchester')       // Returns a promise
//     .then( data => console.log(data) )          // Logs the data
//     .catch( err => console.log(err) );          // Runs, in case of an error

// getWeather("329188");

//? Instead of making 2 separate calls, the second call should be a .then of the first
// getCity('manchester')
//     .then( data => {
//         return getWeather(data.Key);    // 'Key' was one of the attributes from the 'getCity' call.
//     })
//     .then( data => {
//         console.log(data);
//     })
//     .catch( err => console.log(err));
