let c1 = 0
let c2 = 0
let c3 = 0
let c4 = 0
if (c1 == 0) {
    weather()
    c1++
}



async function main() {
    let city
    if (c2 == 0) {
        city = "indore"
        c2++
    } else {
        city = document.getElementById("search_city").value
    }
    let event = document.getElementById("search_city")
    let response = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=1f1d9b9875ca928d7b05d92de2787ec6");
    data = await response.json();
    // console.log(data);
    return data[0].lat
}
async function main2() {
    let city
    if (c3 == 0) {
        city = "Indore"
        c3++
    } else {
        city = document.getElementById("search_city").value
    }
    let response = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=1f1d9b9875ca928d7b05d92de2787ec6");
    data = await response.json();
    // console.log(data);
    return data[0].lon
}

async function weather() {
    let temp1 = await main()
    let temp2 = await main2()
    let city
    if (c4 == 0) {
        city = "Indore"
        c4++
    } else {
        city = document.getElementById("search_city").value
    }

    let add_city_name = document.getElementById("city_name")
    city = city.charAt(0).toUpperCase() + city.slice(1);
    add_city_name.innerText = city
    // console.log(temp)
    // console.log(temp2);

    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + temp1 + "&lon=" + temp2 + "&appid=1f1d9b9875ca928d7b05d92de2787ec6")
    data = await response.json();
    // console.log(data)

    let temperature = data.main.temp
    temperature -= 273.15
    temperature = temperature.toFixed(2)
    let temp = document.getElementById("temp")
    temp.innerText = " Temp: "
    temp.innerText = temp.innerText + temperature + " C"
    // console.log(temperature);

    let feel_like = data.main.feels_like
    feel_like -= 273.15
    feel_like = feel_like.toFixed(2)
    let feel = document.getElementById("feel_like")
    feel.innerText = " Feel like: "
    feel.innerText = feel.innerText + feel_like + " C"
    // console.log(feel_like);

    let humidity = data.main.humidity
    let output_humidity = document.getElementById("humidity")
    output_humidity.innerText = " Humidity: "
    output_humidity.innerText = output_humidity.innerText + humidity
    // console.log(humidity);

    let visibility = data.visibility
    let output_visiblity = document.getElementById("visibility")
    output_visiblity.innerText = " Visibility: "
    output_visiblity.innerText = output_visiblity.innerText + visibility
    // console.log(visibility);

    let wind_speed = data.wind.speed
    let output_speed = document.getElementById("speed")
    output_speed.innerText = " Wind speed: "
    output_speed.innerText = output_speed.innerText + wind_speed
    // console.log(wind_speed);

    let wind_deg = data.wind.deg
    let output_dir = document.getElementById("deg")
    output_dir.innerText = " Wind Directionn: "
    output_dir.innerText = output_dir.innerText + wind_deg
    // console.log(wind_deg);

    let description = data.weather[0].description
    let output_description = document.getElementById("description")
    description = description.charAt(0).toUpperCase() + description.slice(1);
    output_description.innerText = description
    console.log(description);

    const time_response = await fetch("https://api.api-ninjas.com/v1/worldtime?city=" + city, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'NTJdiJOZXdXNMiXZkW6Xjg==Ilokw2VkztShBC21',
            'Content-Type': 'application/json'
        }
    });

    let time_data = await time_response.json();
    console.log(time_data)
    let time = time_data.hour
    let main_weather = data.weather[0].main
    console.log(time)
    console.log(main_weather)

    if (time === "20" || time === "21" || time ==="22 "|| time === "19" || time === "23" || time == "00" || time === "01" || time === "02" || time === "03" || time === "04" || time === "05" || time === "06") {
        if (main_weather === "Clouds" || main_weather === "Smoke") {
            document.getElementById("output1").style.backgroundImage = "url('nightclouds.png')";
        }
        else if (main_weather === "Rain" || main_weather === "Drizzle") {
            document.getElementById("output1").style.backgroundImage = "url('rainy.jpg')";
        }
        else if (main_weather === "Clear") {
            document.getElementById("output1").style.backgroundImage = "url('night.jpg')";
        }
        else if (main_weather === "Haze") {
            document.getElementById("output1").style.backgroundImage = "url('haze.png')";
        }
        else if (main_weather === "Mist") {
            document.getElementById("output1").style.backgroundImage = "url('nightfog.jpg')";
        }
    } else {
        if (main_weather === "Clouds" || main_weather === "Smoke") {
            document.getElementById("output1").style.backgroundImage = "url('cloudy.jpg')";
        }
        else if (main_weather === "Rain" || main_weather === "Drizzle") {
            document.getElementById("output1").style.backgroundImage = "url('rainy.jpg')";
        }
        else if (main_weather === "Clear") {
            document.getElementById("output1").style.backgroundImage = "url('sunny.jpg')";
        }
        else if (main_weather === "Haze") {
            document.getElementById("output1").style.backgroundImage = "url('haze.png')";
        }
        else if (main_weather === "Mist") {
            document.getElementById("output1").style.backgroundImage = "url('dayfog.jpg')";
        }
    }
    

}

document.getElementById("search_city").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        weather();
    }
})



let c = 0;
let c11 = 0;
hello()

async function hello() {
    for (let i = 0; i < 5; i++) {
        await famous_weatherPr()
    }
}



async function famous_weatherPr() {
    let city = ["Paris", "Mumbai", "Delhi", "London", "New york"]
    let t = ["tempPr", "tempMum", "tempDel", "tempLn", "tempNy"]
    let fl = ["feel_likePr", "feel_likeMum", "feel_likeDel", "feel_likeLn", "feel_likeNy"]
    let h = ["humidityPr", "humidityMum", "humidityDel", "humidityLn", "humidityNy"]
    let v = ["visibilityPr", "visibilityMum", "visibilityDel", "visibilityLn", "visibilityNy"]
    let s = ["speedPr", "speedMum", "speedDel", "speedLn", "speedNy"]
    let de = ["degPr", "degMum", "degDel", "degLn", "degNy"]
    let descr = ["description1Pr", "description1Mum", "description1Del", "description1Ln", "description1Ny"]
    let ids = ["paris", "mumbai", "delhi", "london", "new_york"]

    let response1 = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city[c] + "&limit=5&appid=1f1d9b9875ca928d7b05d92de2787ec6");
    // console.log(city[c])
    data1 = await response1.json();
    let temp1 = data1[0].lat
    let temp2 = data1[0].lon
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + temp1 + "&lon=" + temp2 + "&appid=1f1d9b9875ca928d7b05d92de2787ec6")
    data = await response.json()



    let temperature = data.main.temp
    temperature -= 273.15
    temperature = temperature.toFixed(2)
    let temp = document.getElementById(t[c])
    temp.innerText = " Temp: "
    temp.innerText = temp.innerText + temperature + " C"
    // console.log(temperature);

    let feel_like = data.main.feels_like
    feel_like -= 273.15
    feel_like = feel_like.toFixed(2)
    let feel = document.getElementById(fl[c])
    feel.innerText = " Feel like: "
    feel.innerText = feel.innerText + feel_like + " C"
    // console.log(feel_like);

    let humidity = data.main.humidity
    let output_humidity = document.getElementById(h[c])
    output_humidity.innerText = " Humidity: "
    output_humidity.innerText = output_humidity.innerText + humidity
    // console.log(humidity);

    let visibility = data.visibility
    let output_visiblity = document.getElementById(v[c])
    output_visiblity.innerText = " Visibility: "
    output_visiblity.innerText = output_visiblity.innerText + visibility
    // console.log(visibility);

    let wind_speed = data.wind.speed
    let output_speed = document.getElementById(s[c])
    output_speed.innerText = " Wind speed: "
    output_speed.innerText = output_speed.innerText + wind_speed
    // console.log(wind_speed);

    let wind_deg = data.wind.deg
    let output_dir = document.getElementById(de[c])
    output_dir.innerText = " Wind Directionn: "
    output_dir.innerText = output_dir.innerText + wind_deg
    // console.log(wind_deg);

    let description = data.weather[0].description
    description = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById(descr[c]).innerText = description

    let main = data.weather[0].main
    console.log(main);

    let time = background_time()
     
    if (24 >= time >= 19 || time <= 6 || time == 23) {
        if (main === "Clouds" || main === "Smoke") {
            document.getElementById(ids[c]).style.backgroundImage = "url('nightclouds.png')"
        }
        else if (main === "Rain" || main === "Drizzle") {
            document.getElementById(ids[c]).style.backgroundImage = "url('rainy.jpg')"
        }
        else if (main === "Clear") {
            document.getElementById(ids[c]).style.backgroundImage = "url('night.jpg')"
        }
        else if (main === "Haze") {
            document.getElementById(ids[c]).style.backgroundImage = "url('haze.png')"
        }
        else if(  main === "Mist")
            document.getElementById(ids[c]).style.backgroundImage = "url('nightfog.jpg')"
}
 
    else {
    if (main === "Clouds" || main === "Smoke")
        document.getElementById(ids[c]).style.backgroundImage = "url('cloudy.jpg')"
    else if (main === "Rain" || main === "Drizzle")
        document.getElementById(ids[c]).style.backgroundImage = "url('rainy.jpg')"
    else if (main === "Clear")
        document.getElementById(ids[c]).style.backgroundImage = "url('sunny.jpg')"
    else if (main === "Haze")
        document.getElementById(ids[c]).style.backgroundImage = "url('haze.png')"
    else if(  main === "Mist")
        document.getElementById(ids[c]).style.backgroundImage = "url('dayfog.jpg')"
}

c++;
}
async function background_time() {
    let city = ["Paris", "Mumbai", "Delhi", "London", "New york"]
    // console.log(city[c11])
    const time_response = await fetch("https://api.api-ninjas.com/v1/worldtime?city=" + city[c11], {
        method: 'GET',
        headers: {
            'X-Api-Key': 'NTJdiJOZXdXNMiXZkW6Xjg==Ilokw2VkztShBC21',
            'Content-Type': 'application/json'
        }
    });

    let time_data = await time_response.json();
    // console.log(time_data.hour);
    return time_data.hour

}
// async function background_time(city11) {
//     // console.log(city[c11])
//     const time_response = await fetch("https://api.api-ninjas.com/v1/worldtime?city=" + city11, {
//         method: 'GET',
//         headers: {
//             'X-Api-Key': 'NTJdiJOZXdXNMiXZkW6Xjg==Ilokw2VkztShBC21',
//             'Content-Type': 'application/json'
//         }
//     });

//     let time_data = await time_response.json();
//     // console.log(time_data.hour);
//     return time_data.hour

// }


