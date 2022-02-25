import React from 'react';

class LoginButton extends React.Component{
    handleClick(e){
        console.log('this is ',this);
        console.log('this is E ',e);
    }
    render(){
        return (
            <button onClick={(e)=> this.handleClick(e)}>click me</button>
        )
    }
}
export default LoginButton; 