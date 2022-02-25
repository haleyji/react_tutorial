import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
))
const ref = React.createRef();

export default class Memo extends React.Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }    
    render(){
        return(
            <>
                <input type="text" ref={this.inputRef} />
                <FancyButton ref={ref}>Click me</FancyButton>
            </>
        )
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
}