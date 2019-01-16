import React from 'react'

export default class Form extends React.Component {
    render () {
        return (
            <form>
                <input type="text" name="city" placeholder="Cidade"/>
                <input type="text" name="country" placeholder="País"/>
            </form>
        )   
    }
}