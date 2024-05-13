const searchBar = document.querySelector('#searchBar')
const searchBTN = document.querySelector('#searchBTN')
const temperature = document.querySelector('#temperature')
const cityName = document.querySelector('#cityName')
const windSpeed = document.querySelector('#windSpeed')
const humidity = document.querySelector('#humidity')
const weatherIcon = document.querySelector('#weatherIcon')



async function gettingInfo() {
    let city = searchBar.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d450f62b7a507a642d8338d319d31942&units=metric`;
    const response =await fetch(url);
    const data =await response.json();
    temperature.innerHTML = `${data.main.temp}°C`
    cityName.innerHTML = `${city}`
    windSpeed.innerHTML = `${data.wind.speed}mph`
    humidity.innerHTML = `${data.main.humidity}%`

    if(data.weather[0].main == `Clear`){
        weatherIcon.classList = `fa-solid fa-cloud-sun text-4xl`;
    }
    else if(data.weather[0].main == `Rain`){
        weatherIcon.classList = `fa-solid fa-cloud-showers-heavy text-4xl`;
    }
    else if(data.weather[0].main == `Clouds`){
        weatherIcon.classList = `fa-solid fa-cloud text-4xl`;
    }
    else if(data.weather[0].main == `Clouds`){
        weatherIcon.classList = `fa-solid fa-cloud text-4xl`;
    }
}

searchBTN.addEventListener('click',gettingInfo);

searchBar.addEventListener('keydown',(event)=>{
    if(event.key == `Enter`){
        gettingInfo();
    }
})