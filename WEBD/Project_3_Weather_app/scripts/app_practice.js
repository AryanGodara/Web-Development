//? For all kinds of DOM manipulations : Showing things on the page

const cityForm = document.querySelector('form');    // There's only one for on that page :P
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');    // img element with class 'time'
const icon = document.querySelector('.icon img');   // div w/ class 'icon', then img inside that


// Function to update the UI
const updateUI = (data) => {    // data is the 'object' containnig city details and city weather.

    // const city_details = data.city_details;
    // const weather = data.weather;
    //? Instead of the 'tedious' method used above, we can use 'destructuring' properties :-
    const {city_details,weather} = data ;
    // The variable names 'city_details', and 'weather', must be exactly same as the original keys.

    //Update the 'details template'
    details.innerHTML = `
        <h5 class="my-3">${city_details.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // Update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'img/day.png' : 'img/night.png';
    time.setAttribute('src' , timeSrc);


    // Remove the d-none class if present
    if ( card.classList.contains('d-none') )
        card.classList.remove('d-none');  
};


//? Function to take 'city name' as parameter, and return its details, and weather
const updateCity = async (city) => {

    const city_details = await getCity(city);
    // console.log(city_details);
    const weather = await getWeather(city_details.Key);
    // console.log(weather);

    // We return an object with 'key': 'value' pairs
    return {
        city_details : city_details,
        weather: weather
    };

    //TODO: We can also use object shorthand notationi when the key === value (both have same name)
    // For example, we could also return 
    // return { city_details, weather }; // Since we want the key to have the same name as the value
};



//? Event listener for when someone submits the form containing the city name
cityForm.addEventListener( 'submit' , e => {
    e.preventDefault() ;    // Prevent the defaul action, i.e., 'reloading' paige

    // get city value
    const city = cityForm.city.value.trim();    // Get the value, and remove unnecessary whitespace
    cityForm.reset();   // Resets the form fields, after we've collected the input data

    // update the UI with the new city
    updateCity(city)        // Returns an object
        // .then( data => console.log(data))
        .then( data => updateUI(data) )     // Call the function to update the UI now
        .catch( err => console.log(err.messsage) );
});







//? Ternay Operators: Work the same, just like C++
const variable_for_result = true ? "value 1" : "value 2" ;

//? Will be useful later
// let variable_for_timeSrc = "weather.IsDayTime" ? 'img/day/svg' : 'img/night/svg';
// let variable_for_timeSrc = "weather.IsDayTime" ? '<a href="https://www.flaticon.com/free-icons/day" title="day icons">Day icons created by torskaya - Flaticon</a>' : '<a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by Vectors Market - Flaticon</a>';
//! Since the icons weren't available in the github repository, I had to improvise and use the
//! following  icons I found online, but sadly, couldn't download to my devise