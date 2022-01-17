const input = document.querySelector('.form-control');
const button = document.querySelector('#button-addon2');
const cityName = document.querySelector('.city');

function getWeather(city) {
    
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9d77d08b996b12efcdd7e021ac54bfb&units=metric`;

axios.get(url)
.then( (res) => {
    setTimeout(()=> {
        document.querySelector('.temp').innerHTML = `Температура за бортом: ${Math.round(res.data.main.temp)}°C`;
        document.querySelector('.description').innerHTML = res.data.weather[0].description;
        document.querySelector('.weather-icon').innerHTML = `<img src="http://openweathermap.org/img/w/${res.data.weather[0].icon}.png" style="width:50%">`
        console.log(res),1000
    });
})
.catch((error) => {
    console.log(error);
    })
}

button.addEventListener('click', ()=> {
    let city = input.value;
    cityName.innerHTML = `<h1>${city.toUpperCase()}</h1>`;
    console.log(city);
    input.value = '';
    getWeather(city);
});