import React, { Fragment } from 'react';

function ListItem({item}){
    return(
        <Fragment>
            <dt>{item.term}</dt>
            <dt>{item.description}</dt>
        </Fragment>
    )
}
function Glossary(props){
    return(
        <dl>
            {props.items.map(item=>(
                <ListItem item={item} key={item.id} />
            ))}
        </dl>
    )
}
function CustomerTextInput(props){
    return(
        <div>
            <input ref={props.inputRef} />
        </div>
    )
}
class Wcag extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
        this.toggleContainer = React.createRef();
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
    componentDidMount(){
        window.addEventListener('click', this.onClickOutsideHandler);    
    }
    componentWillUnmount(){
        window.removeEventListener('click', this.onClickOutsideHandler);
    }
    onClickHandler(){
        this.setState(currentState=>({
            isOpen: !currentState.isOpen
        }))
    }
    onClickOutsideHandler(event){
        if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)){
            this.setState({isOpen: false});
        }
    }
    render(){
        return(
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>Select an option</button>
                {this.state.isOpen && (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </div>
        )
    }
}
export default class BlurExample extends React.Component {
    constructor(props){
        super(props);

        this.state = { isOpen : false };
        this.timeOutId = null;

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }
    onClickHandler(){
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }))
    }
    onBlurHandler(){
        this.timeOutId = setTimeout(()=>{
            this.setState({
                isOpen: false
            })
        })
    }
    onFocusHandler(){
        clearTimeout(this.timeOutId);
    }
    render(){
        return(
            <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
                <button onClick={this.onClickHandler} aria-haspopup="true" aria-expanded={this.state.isOpen}>Select an option</button>
                {this.state.isOpen && (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </div>
        )
    }
}