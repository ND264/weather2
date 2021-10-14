import React from 'react';

function Prps(props){
    return  <div>
              <div className='location-box'>
                <div className='location'>
                 {/* {weather.name},{weather.sys.country} */}
                 {props.xxx1},{props.xxx2}
                </div>
                <div className="date">
                 {/* {formatDate(new Date())} */}
                 {props.xxx3}
                </div>          
              </div>
              <div className="weather-box">
                <div className="temp">
                 {/* {Math.round(weather.main.temp)} &deg;C */}
                 {props.xxx4 + ' °C'}
                </div>
              </div>
            </div>;
}
export default Prps;