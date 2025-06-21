const apikey = "6ef786d195d828e12287a6c37459fce4";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

    async function checkweather(city){
        const response = await fetch(apiurl + city +  `&appid=${apikey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }

        else{

            let data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "clear.png";
            }
            else if(data.weather[0].main == "drizzle"){
            weatherIcon.src = "drizzle.png";
            }
            else if(data.weather[0].main == "mist"){
            weatherIcon.src = "mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
   
    }

    searchbtn.addEventListener("click",()=>{
         checkweather(searchbox.value);
    })

   