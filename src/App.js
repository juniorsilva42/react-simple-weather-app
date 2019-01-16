import React from 'react'

import axios from 'axios'

import Titles from './components/Titles'
import Weather from './components/Weather'
import Form from './components/Form'

import apiKeys from './config//apiKeys'

export default class App extends React.Component {
    
    getWeather = async e => {
        e.preventDefault();

        const city = e.target.elements.city.value
        const country = e.target.elements.country.value

        const callToApi = await 
            fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKeys.pubKey}
            `)
        
        const data = await callToApi.json()
        console.log(data)
    }
    
    render () {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather />
            </div>
        )
    }
}
