import React from 'react'

import axios from 'axios'

import Titles from './components/Titles'
import Weather from './components/Weather'

import apiKeys from './config//apiKeys'

export default class App extends React.Component {
    
    getWeather = async () => {
        const callToApi = await 
            axios(`https://samples.openweathermap.org/data/2.5/weather?q=Picos,BR&appid=${apiKeys.pubKey}`)
        
        const data = await callToApi.json()
        console.log(data)
    }
    
    render () {
        return (
            <div>
                <Titles />
                <Weather />
            </div>
        )
    }
}
