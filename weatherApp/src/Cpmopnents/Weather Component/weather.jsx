import { useState } from "react";
import Search from "../Search Component/search";
import { useEffect } from "react";


function Weather() {
    const [search,setSearch]=useState('')
    const [loading,setLoading]=useState(false)
    const [weather,setWeather]=useState(null)

async function FetchWeatherData(param) {
    setLoading(true)
  try {
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=87396c4683e8288c23482dfc9a821a26`)
    const data =await response.json()
    setWeather(data)
    setLoading(false)
    console.log(data);
    
} catch (e) {
    console.log(e.message);
    setLoading(false)
  }
}

function handleSearch(search) {
    if(!search || search.trim() === '') return
    FetchWeatherData(search)
}

useEffect(()=>{
  FetchWeatherData('Lahore')
},[])

const getCurrentDate=()=>{
    return new Date().toLocaleDateString('en-us',
        {
            weekday:'long',
            month:'long',
            day:'numeric',
            year:'numeric'
        }
    )
}

    return ( 
<div className="min-h-screen bg-gray-100 flex items-center justify-center">       
    <div className="bg-emerald-400 rounded-3xl p-8 w-full max-w-md text-center shadow-lg">

    <Search
    search={search}
    setSearch={setSearch}
    handleSearch={handleSearch}
    />

      { loading ? <div className="text-white mt-6">Loading ...</div> :
      <div className="mt-6">

        <div>
            <h2 className="text-xl font-bold text-gray-900">{weather?.name }, <span>{weather?.sys?.country}</span></h2>
        </div>

        <div className="mt-1">
            <span className="text-gray-700 italic text-sm">{getCurrentDate()}</span>
        </div>

        <div className="text-7xl font-bold text-gray-900 my-4">
            {weather?.main?.temp}
        </div>

          <p className="text-gray-800 text-sm"> {(weather && weather.weather && weather.weather[0]) ? weather.weather[0].description : ''} </p>

          <div className="flex justify-around mt-6">
            <div>
                <div>
                    <p className="font-bold text-gray-900">{(weather && weather.wind) ? weather.wind.speed : ''}</p>
                    <p className="text-sm text-gray-700">Wind Speed</p>
                </div>
            </div>
            <div>
                <div>
                    <p className="font-bold text-gray-900">{(weather && weather.main) ? weather.main.humidity : ''}%</p>
                    <p className="text-sm text-gray-700">Humidity</p>
                </div>
            </div>
          </div>

      </div>
      }
    </div>
</div>
     );
}

export default Weather;