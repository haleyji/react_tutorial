import React from 'react';

class Context extends React.Component{
    render(){
        return <Toolbar theme="dark" />;
    }
}
function Toolbar(props){
    return(
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    )
}
class ThemedButton extends React.Component {
    render(){
        return(
            <button theme={this.props.themem} >click here</button>
        );
    }
}
export default Context;