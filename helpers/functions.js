import {get5DaysForecast, getWeatherData, generateWeather5daysForecast,generateWeatherdata} from "./api.js";

export function htmlShow(city) {
    const main = document.querySelector("main");
    main.innerHTML = `
 <section id="top-side" class="mt-[49px] flex xl:gap-x-[55px] xl:gap-y-0 xl:flex-row flex-col max-w-[800px] mx-auto xl:max-w-[1357px] gap-y-10">
        <div class="xl:min-w-[510px] flex flex-col items-center shadow-[10px_10px_4px_rgba(0,0,0,0.5)] bg-[#1B1B1B] rounded-[30px] container min-w-[800px]">
            <h1 id="name-city" class="mt-[53px] mb-[40px] font-bold text-[2.25rem]"></h1>
            <p id="current-hour" class="text-8xl font-bold "></p>
            <span id="current-date" class="text-xl mb-[48px]"></span>
        </div>
        <div class="drop-shadow-2xl w-full flex justify-between flex-row items-center shadow-[10px_10px_4px_rgba(0,0,0,0.5)] bg-[#1B1B1B] rounded-[30px] container xl:min-w-[780px] min-w-[800px]">
            <div id="left-side" class=" flex flex-col gap-y-[26px] h-full mt-12">
                <div id="celcius" class="ml-6">
                    <p id="temperature-celcius" class="text-[5rem] font-bold leading-none mb-3"></p>
                    <span id="feelslike-celcius" class="text-[1.25rem] font-semibold"><span class="text-[2rem]"></span></span>
                </div>
                <div class="flex flex-col gap-y-[10px] ml-[50px]">
                    <div id="sunRise" class="flex gap-x-[10px] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                             class="icon icon-tabler icons-tabler-outline icon-tabler-sunrise">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"/>
                            <path d="M3 21l18 0"/>
                            <path d="M12 9v-6l3 3m-6 0l3 -3"/>
                        </svg>
                        <div>
                            <p class="text-[1.25rem] font-semibold"></p>
                            <span id="sunrise" class="text-[1.25rem] font-semibold"></span>
                        </div>
                    </div>
                    <div id="sunSet" class="flex gap-x-[10px] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                             class="icon icon-tabler icons-tabler-outline icon-tabler-sunset">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"/>
                            <path d="M3 21l18 0"/>
                            <path d="M12 3v6l3 -3m-6 0l3 3"/>
                        </svg>
                        <div>
                            <p class="text-[1.25rem] font-semibold"></p>
                            <span id="sunset" class="text-[1.25rem] font-semibold"></span>
                        </div>
                    </div>
                </div>

            </div>
            <div id="middle-side" class="flex flex-col items-center h-full mt-12 gap-y-9">
                <img id="icon-svg" class="min-w-[180px] " src="" alt="">
                <p id="main-weather" class="font-semibold text-[2rem]"></p>
            </div>
            <div id="right-side" class="flex flex-wrap gap-x-3 gap-y-14 max-w-[247px] min-w-[247px] ">
                <div id="humidity-img" class="flex flex-col items-center gap-y-2 w-[107px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                         class="icon icon-tabler icons-tabler-outline icon-tabler-ripple">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0"/>
                        <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0"/>
                        <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0"/>
                    </svg>
                    <p id="humidity" class="text-[1.25rem] font-semibold">41%</p>
                    <p>Humidity</p>
                </div>
                <div id="wind-speed" class="flex flex-col items-center gap-y-2 w-[107px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="icon icon-tabler icons-tabler-outline icon-tabler-wind">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"/>
                        <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"/>
                        <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"/>
                    </svg>
                    <p id="windSpeed" class="text-[1.25rem] font-semibold">2km/h</p>
                    <p>Wind Speed</p>
                </div>
                <div id="Pressure" class="flex flex-col items-center gap-y-2 w-[107px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="icon icon-tabler icons-tabler-outline icon-tabler-parking-circle">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 16v-8h3.334c.92 0 1.666 .895 1.666 2s-.746 2 -1.666 2h-3.334"/>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
                    </svg>
                    <p id="pressure" class="text-[1.25rem] font-semibold">41%</p>
                    <p>Pressure</p>
                </div>
                <div id="UV" class="flex flex-col items-center gap-y-2 w-[107px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="icon icon-tabler icons-tabler-outline icon-tabler-uv-index">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0"/>
                        <path d="M12 4v-1"/>
                        <path d="M13 16l2 5h1l2 -5"/>
                        <path d="M6 16v3a2 2 0 1 0 4 0v-3"/>
                    </svg>
                    <p class="text-[1.25rem] font-semibold">8</p>
                    <p>UV</p>
                </div>
            </div>
        </div>
    </section>
    <section id="bot-side" class=" mb-20 mt-[49px] flex xl:gap-x-[55px] xl:gap-y-0 xl:flex-row flex-col max-w-[800px] mx-auto gap-y-10 xl:max-w-[1357px]">
        <div class="xl:min-w-[432px] flex flex-col items-center shadow-[10px_10px_4px_rgba(0,0,0,0.5)] bg-[#1B1B1B] rounded-[30px] drop-shadow-2xl container min-w-[800px]">
            <h1 class="mt-[20px] mb-[10px] font-bold text-[2rem]">5 Days Forecast:</h1>
            <ul id="forecastList" class="min-w-[370px] mb-[20px]">
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->

            </ul>
        </div>
        <div class="drop-shadow-2xl w-full flex flex-col items-center shadow-[10px_10px_4px_rgba(0,0,0,0.5)] bg-[#1B1B1B] rounded-[30px] xl:min-w-[870px] container min-w-[800px] pb-9 xl:gap-y-24">

            <h1 class="text-[2rem] font-bold mt-3">Hourly Forecast:</h1>

            <div  class="max-w-[710px] mx-auto ">
                <ul id="hourlyForecast" class="flex justify-around gap-x-4">
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 day">-->
<!--                        <p class="text-[1.5rem] font-semibold" >12:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-semibold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem] font-semibold">3km/h</p>-->
<!--                    </li>-->
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 day">-->
<!--                        <p class="text-[1.5rem] font-semibold">15:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-semibold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem] font-semibold">3km/h</p>-->
<!--                    </li>-->
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 day">-->
<!--                        <p class="text-[1.5rem] font-semibold">18:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-semibold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem] font-semibold">3km/h</p>-->
<!--                    </li>-->
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 evening">-->
<!--                        <p class="text-[1.5rem] font-semibold">21:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-semibold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem] font-semibold">3km/h</p>-->
<!--                    </li>-->
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 evening">-->
<!--                        <p class="text-[1.5rem] font-semibold">00:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-bold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem]">3km/h</p>-->
<!--                    </li>-->
                </ul>
            </div>
        </div>
    </section>

`
    getWeatherData(city);
    get5DaysForecast(city);
}
export function htmlShow2(lat,lon) {
    const main = document.querySelector("main");
    main.innerHTML = `
 <section id="top-side" class="mt-[49px] flex xl:gap-x-[55px] xl:gap-y-0 xl:flex-row flex-col max-w-[800px] mx-auto xl:max-w-[1357px] gap-y-10">
        <div class="xl:min-w-[510px] flex flex-col items-center shadow-[10px_10px_4px_rgba(0,0,0,0.5)] bg-[#1B1B1B] rounded-[30px] container min-w-[800px]">
            <h1 id="name-city" class="mt-[53px] mb-[40px] font-bold text-[2.25rem]"></h1>
            <p id="current-hour" class="text-8xl font-bold "></p>
            <span id="current-date" class="text-xl mb-[48px]"></span>
        </div>
        <div class="drop-shadow-2xl w-full flex justify-between flex-row items-center shadow-[10px_10px_4px_rgba(0,0,0,0.5)] bg-[#1B1B1B] rounded-[30px] container xl:min-w-[780px] min-w-[800px]">
            <div id="left-side" class=" flex flex-col gap-y-[26px] h-full mt-12">
                <div id="celcius" class="ml-6">
                    <p id="temperature-celcius" class="text-[5rem] font-bold leading-none mb-3"></p>
                    <span id="feelslike-celcius" class="text-[1.25rem] font-semibold"><span class="text-[2rem]"></span></span>
                </div>
                <div class="flex flex-col gap-y-[10px] ml-[50px]">
                    <div id="sunRise" class="flex gap-x-[10px] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                             class="icon icon-tabler icons-tabler-outline icon-tabler-sunrise">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"/>
                            <path d="M3 21l18 0"/>
                            <path d="M12 9v-6l3 3m-6 0l3 -3"/>
                        </svg>
                        <div>
                            <p class="text-[1.25rem] font-semibold"></p>
                            <span id="sunrise" class="text-[1.25rem] font-semibold"></span>
                        </div>
                    </div>
                    <div id="sunSet" class="flex gap-x-[10px] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                             class="icon icon-tabler icons-tabler-outline icon-tabler-sunset">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"/>
                            <path d="M3 21l18 0"/>
                            <path d="M12 3v6l3 -3m-6 0l3 3"/>
                        </svg>
                        <div>
                            <p class="text-[1.25rem] font-semibold"></p>
                            <span id="sunset" class="text-[1.25rem] font-semibold"></span>
                        </div>
                    </div>
                </div>

            </div>
            <div id="middle-side" class="flex flex-col items-center h-full mt-12 gap-y-9">
                <img id="icon-svg" class="min-w-[180px] " src="" alt="">
                <p id="main-weather" class="font-semibold text-[2rem]"></p>
            </div>
            <div id="right-side" class="flex flex-wrap gap-x-3 gap-y-14 max-w-[247px] min-w-[247px] ">
                <div id="humidity-img" class="flex flex-col items-center gap-y-2 w-[107px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                         class="icon icon-tabler icons-tabler-outline icon-tabler-ripple">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0"/>
                        <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0"/>
                        <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0"/>
                    </svg>
                    <p id="humidity" class="text-[1.25rem] font-semibold">41%</p>
                    <p>Humidity</p>
                </div>
                <div id="wind-speed" class="flex flex-col items-center gap-y-2 w-[107px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="icon icon-tabler icons-tabler-outline icon-tabler-wind">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"/>
                        <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"/>
                        <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"/>
                    </svg>
                    <p id="windSpeed" class="text-[1.25rem] font-semibold">2km/h</p>
                    <p>Wind Speed</p>
                </div>
                <div id="Pressure" class="flex flex-col items-center gap-y-2 w-[107px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="icon icon-tabler icons-tabler-outline icon-tabler-parking-circle">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 16v-8h3.334c.92 0 1.666 .895 1.666 2s-.746 2 -1.666 2h-3.334"/>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
                    </svg>
                    <p id="pressure" class="text-[1.25rem] font-semibold">41%</p>
                    <p>Pressure</p>
                </div>
                <div id="UV" class="flex flex-col items-center gap-y-2 w-[107px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="icon icon-tabler icons-tabler-outline icon-tabler-uv-index">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0"/>
                        <path d="M12 4v-1"/>
                        <path d="M13 16l2 5h1l2 -5"/>
                        <path d="M6 16v3a2 2 0 1 0 4 0v-3"/>
                    </svg>
                    <p class="text-[1.25rem] font-semibold">8</p>
                    <p>UV</p>
                </div>
            </div>
        </div>
    </section>
    <section id="bot-side" class=" mb-20 mt-[49px] flex xl:gap-x-[55px] xl:gap-y-0 xl:flex-row flex-col max-w-[800px] mx-auto gap-y-10 xl:max-w-[1357px]">
        <div class="xl:min-w-[432px] flex flex-col items-center shadow-[10px_10px_4px_rgba(0,0,0,0.5)] bg-[#1B1B1B] rounded-[30px] drop-shadow-2xl container min-w-[800px]">
            <h1 class="mt-[20px] mb-[10px] font-bold text-[2rem]">5 Days Forecast:</h1>
            <ul id="forecastList" class="min-w-[370px] mb-[20px]">
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->
<!--                <li class="flex items-center gap-x-[53px]">-->
<!--                    <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                    <p class="text-[1.5rem]">20ºC</p>-->
<!--                    <P class="text-[1.5rem]">Friday, 1sep</P>-->
<!--                </li>-->

            </ul>
        </div>
        <div class="drop-shadow-2xl w-full flex flex-col items-center shadow-[10px_10px_4px_rgba(0,0,0,0.5)] bg-[#1B1B1B] rounded-[30px] xl:min-w-[870px] container min-w-[800px] pb-9 xl:gap-y-24">

            <h1 class="text-[2rem] font-bold mt-3">Hourly Forecast:</h1>

            <div  class="max-w-[710px] mx-auto ">
                <ul id="hourlyForecast" class="flex justify-around gap-x-4">
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 day">-->
<!--                        <p class="text-[1.5rem] font-semibold" >12:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-semibold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem] font-semibold">3km/h</p>-->
<!--                    </li>-->
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 day">-->
<!--                        <p class="text-[1.5rem] font-semibold">15:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-semibold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem] font-semibold">3km/h</p>-->
<!--                    </li>-->
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 day">-->
<!--                        <p class="text-[1.5rem] font-semibold">18:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-semibold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem] font-semibold">3km/h</p>-->
<!--                    </li>-->
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 evening">-->
<!--                        <p class="text-[1.5rem] font-semibold">21:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-semibold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem] font-semibold">3km/h</p>-->
<!--                    </li>-->
<!--                    <li class="flex flex-col items-center bg-[#373636] w-[130px] rounded-[40px] gap-y-2 py-3 evening">-->
<!--                        <p class="text-[1.5rem] font-semibold">00:00</p>-->
<!--                        <img class="max-w-[60px] " src="assets/images/yellow-sun-16526.svg" alt="">-->
<!--                        <p class="text-[1.5rem] font-bold">26ºC</p>-->
<!--                        <div>-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"-->
<!--                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                 class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-move-up">-->
<!--                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>-->
<!--                                <path d="M12 13v-10"/>-->
<!--                                <path d="M9 6l3 -3l3 3"/>-->
<!--                                <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                        <p class="text-[1.5rem]">3km/h</p>-->
<!--                    </li>-->
                </ul>
            </div>
        </div>
    </section>

`
    generateWeather5daysForecast(lat, lon)
    generateWeatherdata(lat,lon)

}

export function msTokmH(speed) {
    const newSpeed = speed * 3.6
    return newSpeed.toFixed(1)
}

export function hourMinutes(unixTimestamp, timezoneOffsetSeconds){


// Convertir el timestamp UNIX a una fecha en UTC
    const dateUTC = new Date(unixTimestamp * 1000);


// Calcular el desplazamiento en milisegundos
    const timezoneOffsetMilliseconds = timezoneOffsetSeconds * 1000;

// Crear una nueva fecha aplicando el desplazamiento
    const adjustedDate = new Date(dateUTC.getTime() + timezoneOffsetMilliseconds);

// Formatear la fecha ajustada manualmente
    function formatDate(date) {
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

// Mostrar la fecha ajustada
    return formatDate(adjustedDate)


}
export function getDate(timezoneOffsetSeconds2){
// Obtener la fecha y hora actual en UTC
    const currentDate2 = new Date();

// Calcular el desplazamiento en milisegundos
    const timezoneOffsetMilliseconds2 = timezoneOffsetSeconds2 * 1000;

// Crear una nueva fecha aplicando el desplazamiento
    const adjustedDate2 = new Date(currentDate2.getTime() + timezoneOffsetMilliseconds2);

// Obtener el nombre del día y el mes
    const options2 = { weekday: 'long', month: 'short', day: '2-digit', timeZone: 'UTC' };
    const formatter = new Intl.DateTimeFormat('en-UK', options2);

// Formatear la fecha ajustada
    const formattedDate = formatter.format(adjustedDate2);

// Mostrar la fecha ajustada

    return formattedDate
}
export function getCurrentHourMinute(timezoneOffsetSeconds2){
// Obtener la fecha y hora actual en UTC
    const currentDate2 = new Date();

// Calcular el desplazamiento en milisegundos
    const timezoneOffsetMilliseconds2 = timezoneOffsetSeconds2 * 1000;

// Crear una nueva fecha aplicando el desplazamiento
    const adjustedDate2 = new Date(currentDate2.getTime() + timezoneOffsetMilliseconds2);

// Obtener el nombre del día y el mes
    const options2 = {hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
    const formatter = new Intl.DateTimeFormat('en-UK', options2);

// Formatear la fecha ajustada
    const formattedDate = formatter.format(adjustedDate2);

    const ArrformattedDate = formattedDate.split(", ")

// Mostrar la fecha ajustada

    return ArrformattedDate
}
export function separateDate(date){
    const newDate = date.split(" ")[0]

    // Convertir la cadena de texto a un objeto Date
    const date2 = new Date(newDate);

// Obtener los nombres del día y del mes
    const dayName = new Intl.DateTimeFormat('en-UK', { weekday: 'long' }).format(date2);
    const monthName = new Intl.DateTimeFormat('en-UK', { month: 'short' }).format(date2);

// Formatear la fecha
    const formattedDate = `${dayName}, ${date2.getDate()} ${monthName} `;
    return formattedDate
}
export function separateTime(time){
    const time2 = time.split(" ")[1].split(":")
    const newTime = []
    newTime.push(time2[0])
    newTime.push(time2[1])

    return newTime.join(":")
}

