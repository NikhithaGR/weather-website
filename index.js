var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#submitBtn');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "b9a376228fd74aa0d38cba8661ddbd2a";

function conversion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descripVal = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(temperature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descripVal}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => alert('You entered wrong city name'));
});
