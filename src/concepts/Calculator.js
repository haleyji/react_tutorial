import { render } from '@testing-library/react';
import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fehrenheit'
};
function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function toFehrenheit(celsius){
    return (celsius*9/5)+32;
}
function tryConvert(temperture, func){
    const input = parseFloat(temperture);
    if(Number.isNaN(input)){
        return '';
    }
    const output = func(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}
function BoilingVerdict (props){
    if(props.celsius>=100){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}
class TempertureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]} : </legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFehrenheitChange = this.handleFehrenheitChange.bind(this);
        this.state = {
            temperature: '', 
            scale: 'c'
        }
    }
    handleCelsiusChange(temperature){
        this.setState({scale:'c', temperature})
    }
    handleFehrenheitChange(temperature){
        this.setState({scale:'f', temperature})
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale==='f' ? tryConvert(temperature, toCelsius) : temperature;
        const fehrenheit = scale==='c' ? tryConvert(temperature, toFehrenheit) : temperature;
        return(
            <div>
                <TempertureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TempertureInput scale="f" temperature={fehrenheit} onTemperatureChange={this.handleFehrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator;