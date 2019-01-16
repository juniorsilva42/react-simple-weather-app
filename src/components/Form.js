import React from 'react'

export default class Form extends React.Component {
    render () {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Cidade"/>
                <input type="text" name="country" placeholder="País"/>
                <button>Obter dados climáticos</button>
            </form>
        )   
    }
}