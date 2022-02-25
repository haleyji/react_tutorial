import React from 'react';

function FormattedDate(props){
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount(){
        this.timerId = setInterval(() => this.tick(),1000);
    }
    componentWillMount(){
        clearInterval(this.timerId);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return (
            <div>
                <h3>hello world</h3>
                <FormattedDate date={this.state.date} />
                
            </div>
        )
    }
}

export default Clock;