import React from 'react';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            age:'',
            email:'',
            description:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit(e){
        console.log(this.state.name, this.state.age, this.state.email, this.state.description)
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} name="name" value={this.state.name} placeholder="Input Your Name"/>
                <input type="text" onChange={this.handleChange} name="age" value={this.state.age} placeholder="Input Your Age" />
                <input type="text" onChange={this.handleChange} name="email" value={this.state.email} placeholder="Input Your Email" />
                <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                <input type="submit" value="submit" />
            </form>
        )
    }
}
export default NameForm;