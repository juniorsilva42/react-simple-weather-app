import React from 'react'

const Weather = props => (
    <div className="weather-info">
        {
           props.city && props.country && 
           <p className="weather-key"> Localização: 
                <span className="weather-value"> { props.city }, { props.country }</span>
           </p> 
        }

        {
           props.temperature && 
           <p className="weather-key"> 
                Temperatura: <span className="weather-value"> { props.temperature }°F</span>
           </p> 
        } 

        { 	
            props.humidity && 
            <p className="weather-key">  
                Humidade: <span className="weather-value"> { props.humidity }</span>
            </p> 
        }

        { 	
            props.description && 
            <p className="weather-key"> 
                Condições: <span className="weather-value"> { props.description }</span>
            </p> 
        }               
    </div>
)

export default Weather
