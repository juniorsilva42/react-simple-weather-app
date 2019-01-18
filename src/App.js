import React from 'react'

import Titles from './components/Titles'
import Weather from './components/Weather'
import Form from './components/Form'

import apiKeys from './config//apiKeys'

import './static/sass/main.sass'

export default class App extends React.Component {
    
    constructor (props) {
        super(props); 
        this.state = { 
            weatherInfo: [],
            isLoading: false,
        };
    }

    getWeather = async e => { 
        e.preventDefault();

        const { city, country } = e.target.elements

        const callToApi = await 
            fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${apiKeys.pubKey}
            `)
        
        const data = await callToApi.json()

        this.setState({
            weatherInfo: {
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                description: data.weather[0].description
            }
        })
    }
    
    render () {
        return (

           <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-xs-5 title-container">
                                <Titles />   
                            </div>

                            <div className="col-xs-7 form-container" >
                                <Form getWeather={this.getWeather} />
                                <Weather  
                                    city={this.state.weatherInfo.city}
                                    country={this.state.weatherInfo.country}
                                    temperature={this.state.weatherInfo.temperature}
                                    humidity={this.state.weatherInfo.humidity}
                                    description={this.state.weatherInfo.description}
                                />
                            </div>

                        </div>
                    </div>
                </div>
           </div>

        )
    }
}
