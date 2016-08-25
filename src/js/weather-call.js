"use strict"

function getZip () {
    let userZip = $('#zipInput').val()
    console.log('user zip', userZip)
    return userZip
}

function getWeatherByZip () {
    console.log("getWeatherByZip running")
    let zip = getZip()
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=7673295b59b0787e94246f813ff94480`
        }).done(function (weatherData) {
            console.log('weatherData', weatherData)
            resolve(weatherData)
        })
    })
}

module.exports = getWeatherByZip