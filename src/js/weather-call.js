"use strict"

let weatherTemplate = require('../../templates/article/weather.hbs')

function getZip () {
    let userZip = $('#zipInput').val()
    return userZip
}

function getWeatherByZip () {
    console.log("getWeatherByZip running")
    let zip = getZip()
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=7673295b59b0787e94246f813ff94480`
        }).done(function (weatherData) {
            $('.output').append(weatherTemplate(weatherData))
            resolve(weatherData)
        })
    })
}


module.exports = getWeatherByZip