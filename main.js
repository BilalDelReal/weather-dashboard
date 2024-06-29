
import {htmlShow,htmlShow2} from "./helpers/functions.js";
const themeTogller = document.querySelector("#toggleThem");
const btncurrent = document.querySelector("#btnCurrent");
const inputCity = document.querySelector(".cityInput")
const inputCity2 = document.querySelector(".cityInput2")
const err404 = document.getElementById("btn404")

themeTogller.addEventListener("change", (e) => {
 const body = document.querySelector("body");
 const iconSearch = document.querySelector(".search-icon");
 const iconSearch2 = document.querySelector("#Isolation_Mode");
 e.preventDefault();
 body.classList.toggle("light");
 const svgs = document.querySelectorAll("svg")
 svgs.forEach(svg => {
  svg.setAttribute("stroke", "black")
 })
 iconSearch.setAttribute("stroke", "none")
 iconSearch2.setAttribute("stroke", "none")

})
inputCity.addEventListener("keypress" ,(e)=>{
 if(e.key !== "Enter") return
 const city = inputCity.value

 if(city ==="" || !isNaN(city)) return
 console.log(city)
 htmlShow(city)
})
inputCity2.addEventListener("keypress" ,(e)=>{
 if(e.key !== "Enter") return
 const city = inputCity2.value

 if(city ==="" || !isNaN(city)) return
 console.log(city)
 htmlShow(city)
})
btncurrent.addEventListener("click",(e)=>{
 e.preventDefault()
 if ('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(position => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
   htmlShow2(latitude,longitude)
  })
 }else console.log("Geolocation is not supported");
})
err404.addEventListener("click",(e)=>{
 e.preventDefault()
 location.reload()
})


