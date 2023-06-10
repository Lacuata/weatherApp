import './currentWeather.css';

const CurrentWeather = ({ data, alert }) => {

  // Get current date
  const currentDate = new Date();
  const options = { weekday: 'long', year:'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const temperatureCelsius = data.main.temp;
const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

  return (
    <div className='weather'>
      <div className="top">
        <div>
          <p className='current-date'>{formattedDate}</p> {/* Display current date */}
          <p className='city'>{data.city}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
        </div>
        <img alt="weather" className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className='parameter'>   
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter'>   
                        <span className='parameter-label'>Fahrenheit</span>
                        <span className='parameter-value'>{Math.round(temperatureFahrenheit)}°F</span>
                    </div>
                    <div className='parameter'>   
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                        <div className='parameter'>   
                        <span className='parameter-label'>Wind </span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                        <div className='parameter'>   
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                        <div className='parameter'>   
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;



























// import './currentWeather.css';
// // import { useEffect, useState } from "react";
// // import { WEATHER_API_KEY, WEATHER_API_URL } from "../../api";


// const CurrentWeather = ({ data, alert }) => {
// //     const [alerts, setAlerts] = useState([]);

// //   useEffect(() => {
// //     // Fetch weather alerts
// //     const fetchWeatherAlerts = async () => {
// //       const response = await fetch(`${WEATHER_API_URL}/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly,daily&appid=${WEATHER_API_KEY}`);
// //       const result = await response.json();
// //       if (result.alerts) {
// //         setAlerts(result.alerts);
// //       }
// //     };

// //     fetchWeatherAlerts();
// //   }, [data]);


//     // if (!data) {
//     //     return <p>No weather data available for the selected city.</p>;
//     //   }
//   // Get current date
//   const currentDate = new Date();
//   const options = { weekday: 'long', year:'numeric', month: 'long', day: 'numeric' };
//   const formattedDate = currentDate.toLocaleDateString(undefined, options);

//   const temperatureCelsius = data.main.temp;
// const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

//   return (
//     <div className='weather'>
//       <div className="top">
//         <div>
//           <p className='current-date'>{formattedDate}</p> {/* Display current date */}
//           <p className='city'>{data.city}</p>
//           <p className='weather-description'>{data.weather[0].description}</p>
//         </div>
//         <img alt="weather" className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
//       </div>
//       <div className="bottom">
//         <p className='temperature'>{Math.round(data.main.temp)}°C</p>
//                 <div className="details">
//                     <div className='parameter'>   
//                         <span className='parameter-label'>Details</span>
//                     </div>
//                     <div className='parameter'>   
//                         <span className='parameter-label'>Fahrenheit</span>
//                         <span className='parameter-value'>{Math.round(temperatureFahrenheit)}°F</span>
//                     </div>
//                     <div className='parameter'>   
//                         <span className='parameter-label'>Feels like</span>
//                         <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
//                     </div>
//                         <div className='parameter'>   
//                         <span className='parameter-label'>Wind </span>
//                         <span className='parameter-value'>{data.wind.speed} m/s</span>
//                     </div>
//                         <div className='parameter'>   
//                         <span className='parameter-label'>Humidity</span>
//                         <span className='parameter-value'>{data.main.humidity}%</span>
//                     </div>
//                         <div className='parameter'>   
//                         <span className='parameter-label'>Pressure</span>
//                         <span className='parameter-value'>{data.main.pressure}hPa</span>
//                     </div>
//                 </div>
//             </div>
//                  {/* Display weather alerts */}
//       {/* {alerts.length > 0 && (
//         <div className="alerts">
//           <h3>Weather Alerts</h3>
//           {alerts.map((alert, index) => (
//             <div key={index} className="alert">
//               <p>{alert.event}</p>
//               <p>{alert.description}</p>
//               <p>{new Date(alert.start * 1000).toLocaleDateString()}</p>
//               <p>{new Date(alert.end * 1000).toLocaleDateString()}</p>
//             </div>
//           ))}
//         </div>
//       )} */}
//         </div>
//     )
// }

// export default CurrentWeather;