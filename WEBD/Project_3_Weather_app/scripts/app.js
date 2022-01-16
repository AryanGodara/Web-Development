
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');    // img element with class 'time'
const icon = document.querySelector('.icon img');   // div w/ class 'icon', then img inside that


// Function to update the UI
const updateUI = (data) => {    // data is the 'object' containnig city details and city weather.

    const {city_details,weather} = data ;

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
    const weather = await getWeather(city_details.Key);

    return {
        city_details : city_details,
        weather: weather
    };
};



//? Event listener for when someone submits the form containing the city name
cityForm.addEventListener( 'submit' , e => {
    e.preventDefault() ;

    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the UI with the new city
    updateCity(city)        // Returns an object
        // .then( data => console.log(data))
        .then( data => updateUI(data) )     // Call the function to update the UI now
        .catch( err => console.log(err.messsage) );

    // set local storage (add this data, to the local storage, so we can access this later)
    localStorage.setItem('city', city);
    // Since, we're overwriting the same key 'city' every time, it only holds the latest search
    // value, this helps us when user refreshes the page, user doesn't lose the prev result.
});

// console.log(localStorage.getItem('city'));
if ( localStorage.getItem('city') ){
    updateCity(localStorage.getItem('city'))        // Returns an object
        .then( data => updateUI(data) )     // Call the function to update the UI now
        .catch( err => console.log(err.messsage) );
}