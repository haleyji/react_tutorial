import React from 'react';
import './Dialog.css';

function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    )
}
function WelcomeDialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}
function SplitPane(props){
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}
function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat() {
    return <div className="Chat" />;
  }
  
export default class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleChange(e){
        this.setState({login: e.target.value})
    }
    handleSignup(){
        console.log('ddfdfsds')
        alert(`Welcome aboard, ${this.state.login}`);    
    }
    render(){
        return(
            <WelcomeDialog title="Mars Exploration Program" message="How Should we refer to you?" >
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignup} > Sign me up ! </button>
            </WelcomeDialog>
        )
    }
}