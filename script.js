function getWeather(){
    const cityName = document.getElementById('inputWeather').value;
    if (cityName === ""){
        window.alert('please input a city')
    }

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=36bca2398779597e2feec8e112edb51d')
    .then(res => res.json())
    .then(data =>{
        let nameVal = data['name'];
        let tempVal = Math.floor(data['main']['temp'] - 273.15) + '`C';
        let descVal = data['weather'][0]['description'];
        let imgVal = data['weather'][0]['icon'];
        var img = new Image();
        img.src = 'http://openweathermap.org/img/wn/'+imgVal+'@2x.png';

        let output = `
            <h2>${nameVal}</h2>
            <p>${tempVal}</p>
            <p>${descVal}</p>
            <img src="http://openweathermap.org/img/wn/${imgVal}@2x.png">
        `;
        document.getElementById('displayWeather').innerHTML = output;
    })
}