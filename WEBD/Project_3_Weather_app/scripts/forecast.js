
const key = 'fIuEX60fePsFV3D6a8szdqPWWgzuLFGI';     //* Stores the API key



const getWeather = async (id) =>  {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    // Calling the API
    const response = await fetch(base+query);
    const data = await response.json();

    // console.log(data);
    return data[0] ;
}




//? Function to get the 'City' that we want to search the weather for
const getCity = async (city) => {   // We take in the city name as the parameter

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; //* Resouce URL
    const query = `?apikey=${key}&q=${city}` ;

    // Calling the API
    const response = await fetch(base + query);     // Returns an array (acc. to API refernce)
    const data = await response.json();

    return data[0] ;
    // The array is ranked from best to worst matches (they use some algo in backend, who cares :P)
};

