import './App.css';
import Search from './components/search/search'
import CurrentWeather from './components/currentWeather/currentWeather';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';

function App() {
    // hook
    const [currentWeather, setCurrentWeatherFetch] = useState(null)
    const [forecast, setForecast] = useState(null)


    const handleOnSearchChange = (searchData) => {
        // console.log(searchData);
        // split the searchData value ot lat latitude lon longitude
        const [lat, lon ] = searchData.value.split(" ")

        // fetch url api from weather  and api key of it then import lan and lon here this is current weather from weather api
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
                                        // base url             weather    latitude     longitude app id or api key
                                        //forecast 
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    // Promise
    Promise.all([currentWeatherFetch, forecastFetch ])
    .then(async (response) => {
        const weatherResponse = await response[0].json(); //we need to called the .json to map weather response 
        const forecastResponse = await response[1].json(); //we need to called the .json to map forecast response

        // now to update and extend data that we are sending and saving here and object that passed in
        setCurrentWeatherFetch({city: searchData.label , ...weatherResponse}); //city:searchData.label comes from  search.js the label city.name/countryCode
        setForecast({city:searchData.label , ...forecastResponse})
    }) 
    //if fails catch error 
    .catch((err) => console.log(err))
    }

    console.log(currentWeather);
    console.log(forecast);



  return (
    <div className="container">
     <Search onSearchChange={handleOnSearchChange}/>
     {/* check if exist or not  */}
     {currentWeather && <CurrentWeather data={currentWeather}/>}
     {/* check if forecast exist or not  */}
   {forecast &&  <Forecast data={forecast} />}
    </div>
  );
}

export default App;








// import './App.css';
// import Search from './components/search/search'
// import CurrentWeather from './components/currentWeather/currentWeather';
// import Forecast from './components/forecast/forecast';
// import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
// import { useState } from 'react';

// function App() {
//     // hook
//     const [currentWeather, setCurrentWeatherFetch] = useState(null)
//     const [forecast, setForecast] = useState(null)
//     // const data = {
//     //     coord: { lat: 37.7749, lon: -122.4194 }, // Sample latitude and longitude
//     //     alerts: [
//     //       {
//     //         event: "Test Alert",
//     //         description: "This is a test alert.",
//     //         start: 1650115200, // Set the start time for the alert in UNIX timestamp format
//     //         end: 1650201600 // Set the end time for the alert in UNIX timestamp format
//     //       }
//     //     ]
//     //   };

//     const handleOnSearchChange = (searchData) => {
//         // console.log(searchData);
//         // split the searchData value ot lat latitude lon longitude
//         const [lat, lon ] = searchData.value.split(" ")

//         // fetch url api from weather  and api key of it then import lan and lon here this is current weather from weather api
//         const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
//                                         // base url             weather    latitude     longitude app id or api key
//                                         //forecast 
//         const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

//     // Promise
//     Promise.all([currentWeatherFetch, forecastFetch ])
//     .then(async (response) => {
//         const weatherResponse = await response[0].json(); //we need to called the .json to map weather response 
//         const forecastResponse = await response[1].json(); //we need to called the .json to map forecast response

//         // now to update and extend data that we are sending and saving here and object that passed in
//         setCurrentWeatherFetch({city: searchData.label , ...weatherResponse}); //city:searchData.label comes from  search.js the label city.name/countryCode
//         setForecast({city:searchData.label , ...forecastResponse})
//     }) 
//     //if fails catch error 
//     .catch((err) => console.log(err))
//     }

//     console.log(currentWeather);
//     console.log(forecast);



//   return (
//     <div className="container">
//      <Search onSearchChange={handleOnSearchChange}/>
//      {/* check if exist or not  */}
//      {currentWeather && <CurrentWeather data={currentWeather}/>}
//      {/* check if forecast exist or not  */}
//    {forecast &&  <Forecast data={forecast} />}
//     </div>
//   );
// }

// export default App;
