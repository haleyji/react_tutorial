import React from 'react';

class FlavorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event){
        console.log(this.state.value);
        //return <Board value={this.state.value} />
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your fav fruit
                
                <select value={this.state.value} onChange={this.handleChange} >
                    <option vlaue="grapefruit">Grapefruit</option>
                    <option value="strawberry">Strawberry</option>
                    <option value="Apple">Apple</option>
                    <option value="Mango">Mango</option>
                </select>
                </label>
                <input type="submit" value="submit" / >
            </form>
        )
    }   

}
export default FlavorForm;