import React from 'react';

class Name extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }
    handleSubmit(event){
        alert('A Name was submitted! '+this.input.current.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    <input type="text" ref={this.input} defaultValue="Bob"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
class FileInput extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event){
        event.preventDefault();
        alert(
            `Selected File is ${this.fileInput.current.files[0].name}`
        );
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload File
                    <input type="file" ref={this.fileInput} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default FileInput;