import React from 'react';

function ListItem(props){
    return(
        <li>{props.value}</li>
    )
}
function NumberList(props){
    const numbers = props.numbers;
    return(
        <ul>
            {numbers.map((number)=>(
                <ListItem key={number.toString()} value={number} />
            ))}
        </ul>
    )
}
function WarningBanner(props){
    if(!props.warn){
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showWarning: false
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick () {
        this.setState(state=>({
            showWarning: !state.showWarning
        }))
    }
    render(){
        return(
            <div>
                <div>
                    <NumberList numbers={[1,2,3,4,5]} />
                </div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}
export default Page;