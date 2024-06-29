import {hourMinutes, msTokmH, getDate, getCurrentHourMinute, separateDate,separateTime} from "./functions.js";

const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=71bfdbe2ba7c731e9616bbd559f9bc11"
const foreCast5DaysURL = "https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=71bfdbe2ba7c731e9616bbd559f9bc11"

const latLonURL = "https://api.openweathermap.org/data/2.5/weather?appid=71bfdbe2ba7c731e9616bbd559f9bc11"

export function getWeatherData(city) {
    fetch(latLonURL + `&q=${city}`)
        .then(res => res.json())
        .then(data => {
            const main = document.querySelector("main");
            const diverr = document.getElementById("err404")
            if (data.cod !== 200) {

                main.classList.add("hidden");
                diverr.classList.remove("hidden");
                return
            }else main.classList.remove("hidden")
            const {lat, lon} = data.coord

            fetch(currentWeatherURL + `&lat=${lat}&lon=${lon}`)
                .then(res => res.json())
                .then(data => {
                    const city = document.getElementById("name-city")
                    const celcius = document.getElementById("temperature-celcius")
                    const feelslike = document.getElementById("feelslike-celcius")
                    const sunrise = document.getElementById("sunrise")
                    const sunset = document.getElementById("sunset")
                    const windSpeed = document.getElementById("windSpeed")
                    const humidity = document.getElementById("humidity")
                    const pressure = document.getElementById("pressure")
                    const image = document.getElementById("icon-svg")
                    const main = document.getElementById("main-weather")
                    const date = document.getElementById("current-date")
                    const hour = document.getElementById("current-hour")
                    const main2 = document.querySelector("main");
                    const weatherData =
                        {
                            name: data.name,
                            temperature: data.main.temp,
                            feelsLike: data.main.feels_like,
                            sunrise: data.sys.sunrise,
                            sunset: data.sys.sunset,
                            windSpeed: data.wind.speed,
                            humidity: data.main.humidity,
                            pressure: data.main.pressure,
                            timeZone: data.timezone,
                            image: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                            main: data.weather[0].main
                        }
                    city.innerText = weatherData.name
                    celcius.innerText = `${Math.trunc(weatherData.temperature)}ºC`
                    feelslike.innerText = `Feels like ${Math.trunc(weatherData.feelsLike)}ºC`
                    humidity.innerText = `${weatherData.humidity}%`
                    pressure.innerText = `${weatherData.pressure}hPa`
                    image.setAttribute("src", weatherData.image)
                    main.innerText = weatherData.main
                    windSpeed.innerText = `${msTokmH(weatherData.windSpeed)}km/h`
                    sunrise.innerText = hourMinutes(weatherData.sunrise,weatherData.timeZone)
                    sunset.innerText = hourMinutes(weatherData.sunset,weatherData.timeZone)
                    date.innerText = getDate(weatherData.timeZone)
                        hour.innerText = getCurrentHourMinute(weatherData.timeZone)

                }).catch(err => {
                console.error(err.message)
            })
        })
}

export function get5DaysForecast(city) {
    fetch(latLonURL + `&q=${city}`)
        .then(res => res.json())
        .then(data => {
            if (data.cod === "404") return
            const {lat, lon} = data.coord

            fetch(foreCast5DaysURL + `&lat=${lat}&lon=${lon}`)
                .then(res => res.json())
                .then(data => {
                    const fiveDays=[
                        {
                            temperature1: data.list[9].main.temp,
                            date: data.list[9].dt_txt,
                            icon: `https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`,
                        },
                        {
                            temperature1: data.list[17].main.temp,
                            date: data.list[17].dt_txt,
                            icon: `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`,
                        },
                        {
                            temperature1: data.list[25].main.temp,
                            date: data.list[25].dt_txt,
                            icon: `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`,
                        },
                        {
                            temperature1: data.list[33].main.temp,
                            date: data.list[33].dt_txt,
                            icon: `https://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`,
                        },
                        {
                            temperature1: data.list[39].main.temp,
                            date: data.list[39].dt_txt,
                            icon: `https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`,
                        }
                    ]
                    const currentDay=[
                        {
                            hour: data.list[0].dt_txt,
                            temperature: data.list[0].main.temp,
                            windSpeed: data.list[0].wind.speed,
                            windDegree: data.list[0].wind.deg,
                            icon2: `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
                        },
                        {
                            hour: data.list[1].dt_txt,
                            temperature: data.list[1].main.temp,
                            windSpeed: data.list[1].wind.speed,
                            windDegree: data.list[1].wind.deg,
                            icon2: `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`,
                        },
                        {
                            hour: data.list[2].dt_txt,
                            temperature: data.list[2].main.temp,
                            windSpeed: data.list[2].wind.speed,
                            windDegree: data.list[2].wind.deg,
                            icon2: `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`,
                        },
                        {
                            hour: data.list[3].dt_txt,
                            temperature: data.list[3].main.temp,
                            windSpeed: data.list[3].wind.speed,
                            windDegree: data.list[3].wind.deg,
                            icon2: `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`,
                        },
                        {
                            hour: data.list[4].dt_txt,
                            temperature: data.list[4].main.temp,
                            windSpeed: data.list[4].wind.speed,
                            windDegree: data.list[4].wind.deg,
                            icon2: `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`,
                        }
                    ]
                    const ulForecast = document.getElementById("forecastList")
                    console.log(data)
                    console.log(currentDay)
                    fiveDays.forEach(day => {

                        let {temperature1, date, icon} = day
                        let liElement = document.createElement("li")
                        let imgtag = document.createElement("img")
                        let p1 = document.createElement("p")
                        let p2 = document.createElement("p")
                        liElement.className = "flex items-center gap-x-[53px]"
                        imgtag.src = icon
                        imgtag.alt = "icon of the weather"
                        p1.className = "text-[1.25rem]"
                        p1.innerText = `${Math.trunc(temperature1)}ºC`
                        p2.className = "text-[1.25rem]"
                        p2.innerText = separateDate(date)
                        liElement.append(imgtag , p1 , p2)

                        ulForecast.append(liElement)
                        //---------------------------------------------------------------



                        })
                    currentDay.forEach(day => {

                        let {hour,temperature,windSpeed, windDegree,icon2} = day
                        const hourlyForecast = document.getElementById("hourlyForecast")
                        let liForecast  = document.createElement("li")
                        let pHour = document.createElement("p")
                        let iconImg = document.createElement("img")
                        let pTemperature = document.createElement("p")
                        let divArrow = document.createElement("div")
                        let pWindSpeed = document   .createElement("p")
                        if (Number(separateTime(hour).split(":")[0])>=21 || Number(separateTime(hour).split(":")[0]) <=5){
                            liForecast.className = "flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 evening"
                        }else  liForecast.className = "flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 day"

                        pHour.className = "text-[1.5rem] font-semibold"
                        pHour.innerText = separateTime(hour)
                        iconImg.className = "max-w-[60px]"
                        iconImg.src = icon2
                        pTemperature.className = "text-[1.5rem] font-semibold"
                        pTemperature.innerText = `${Math.trunc(temperature)}ºC`
                        divArrow.style.rotate = `${windDegree}deg`
                        divArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M12 13v-10"/>
                                                <path d="M9 6l3 -3l3 3"/>
                                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>
                                              </svg>`
                        pWindSpeed.className = "text-[1.5rem] font-semibold"
                        pWindSpeed.innerText = `${Math.trunc(windSpeed)}km/h`
                        liForecast.append(pHour, iconImg, pTemperature ,divArrow, pWindSpeed)
                        hourlyForecast.append(liForecast)
                    })
                })
        })
}


export function generateWeather5daysForecast(lat, lon) {
    fetch(foreCast5DaysURL + `&lat=${lat}&lon=${lon}`)
        .then(res => res.json())
        .then(data => {
            const fiveDays=[
                {
                    temperature1: data.list[9].main.temp,
                    date: data.list[9].dt_txt,
                    icon: `https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`,
                },
                {
                    temperature1: data.list[17].main.temp,
                    date: data.list[17].dt_txt,
                    icon: `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`,
                },
                {
                    temperature1: data.list[25].main.temp,
                    date: data.list[25].dt_txt,
                    icon: `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`,
                },
                {
                    temperature1: data.list[33].main.temp,
                    date: data.list[33].dt_txt,
                    icon: `https://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`,
                },
                {
                    temperature1: data.list[39].main.temp,
                    date: data.list[39].dt_txt,
                    icon: `https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`,
                }
            ]
            const currentDay=[
                {
                    hour: data.list[0].dt_txt,
                    temperature: data.list[0].main.temp,
                    windSpeed: data.list[0].wind.speed,
                    windDegree: data.list[0].wind.deg,
                    icon2: `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
                },
                {
                    hour: data.list[1].dt_txt,
                    temperature: data.list[1].main.temp,
                    windSpeed: data.list[1].wind.speed,
                    windDegree: data.list[1].wind.deg,
                    icon2: `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`,
                },
                {
                    hour: data.list[2].dt_txt,
                    temperature: data.list[2].main.temp,
                    windSpeed: data.list[2].wind.speed,
                    windDegree: data.list[2].wind.deg,
                    icon2: `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`,
                },
                {
                    hour: data.list[3].dt_txt,
                    temperature: data.list[3].main.temp,
                    windSpeed: data.list[3].wind.speed,
                    windDegree: data.list[3].wind.deg,
                    icon2: `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`,
                },
                {
                    hour: data.list[4].dt_txt,
                    temperature: data.list[4].main.temp,
                    windSpeed: data.list[4].wind.speed,
                    windDegree: data.list[4].wind.deg,
                    icon2: `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`,
                }
            ]
            const ulForecast = document.getElementById("forecastList")
            console.log(data)
            fiveDays.forEach(day => {

                let {temperature1, date, icon} = day
                let liElement = document.createElement("li")
                let imgtag = document.createElement("img")
                let p1 = document.createElement("p")
                let p2 = document.createElement("p")
                liElement.className = "flex items-center gap-x-[53px]"
                imgtag.src = icon
                imgtag.alt = "icon of the weather"
                p1.className = "text-[1.25rem]"
                p1.innerText = `${Math.trunc(temperature1)}ºC`
                p2.className = "text-[1.25rem]"
                p2.innerText = separateDate(date)
                liElement.append(imgtag , p1 , p2)

                ulForecast.append(liElement)
                //---------------------------------------------------------------



            })
            currentDay.forEach(day => {

                let {hour,temperature,windSpeed, windDegree,icon2} = day
                const hourlyForecast = document.getElementById("hourlyForecast")
                let liForecast  = document.createElement("li")
                let pHour = document.createElement("p")
                let iconImg = document.createElement("img")
                let pTemperature = document.createElement("p")
                let divArrow = document.createElement("div")
                let pWindSpeed = document   .createElement("p")
                if (Number(separateTime(hour).split(":")[0])>=21 || Number(separateTime(hour).split(":")[0]) <=5){
                    liForecast.className = "flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 evening"
                }else  liForecast.className = "flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 day"

                pHour.className = "text-[1.5rem] font-semibold"
                pHour.innerText = separateTime(hour)
                iconImg.className = "max-w-[60px]"
                iconImg.src = icon2
                pTemperature.className = "text-[1.5rem] font-semibold"
                pTemperature.innerText = `${Math.trunc(temperature)}ºC`
                divArrow.style.rotate = `${windDegree}deg`
                divArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M12 13v-10"/>
                                                <path d="M9 6l3 -3l3 3"/>
                                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>
                                              </svg>`
                pWindSpeed.className = "text-[1.5rem] font-semibold"
                pWindSpeed.innerText = `${Math.trunc(windSpeed)}km/h`
                liForecast.append(pHour, iconImg, pTemperature ,divArrow, pWindSpeed)
                hourlyForecast.append(liForecast)
            })
        })
}
export function generateWeatherdata (lat,lon){
    fetch(currentWeatherURL + `&lat=${lat}&lon=${lon}`)
        .then(res => res.json())
        .then(data => {
            const city = document.getElementById("name-city")
            const celcius = document.getElementById("temperature-celcius")
            const feelslike = document.getElementById("feelslike-celcius")
            const sunrise = document.getElementById("sunrise")
            const sunset = document.getElementById("sunset")
            const windSpeed = document.getElementById("windSpeed")
            const humidity = document.getElementById("humidity")
            const pressure = document.getElementById("pressure")
            const image = document.getElementById("icon-svg")
            const main = document.getElementById("main-weather")
            const date = document.getElementById("current-date")
            const hour = document.getElementById("current-hour")
            const main2 = document.querySelector("main");
            const weatherData =
                {
                    name: data.name,
                    temperature: data.main.temp,
                    feelsLike: data.main.feels_like,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    windSpeed: data.wind.speed,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    timeZone: data.timezone,
                    image: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                    main: data.weather[0].main
                }
            city.innerText = weatherData.name
            celcius.innerText = `${Math.trunc(weatherData.temperature)}ºC`
            feelslike.innerText = `Feels like ${Math.trunc(weatherData.feelsLike)}ºC`
            humidity.innerText = `${weatherData.humidity}%`
            pressure.innerText = `${weatherData.pressure}hPa`
            image.setAttribute("src", weatherData.image)
            main.innerText = weatherData.main
            windSpeed.innerText = `${msTokmH(weatherData.windSpeed)}km/h`
            sunrise.innerText = hourMinutes(weatherData.sunrise,weatherData.timeZone)
            sunset.innerText = hourMinutes(weatherData.sunset,weatherData.timeZone)
            date.innerText = getDate(weatherData.timeZone)
            hour.innerText = getCurrentHourMinute(weatherData.timeZone)

        }).catch(err => {
        console.error(err.message)
    })
}


