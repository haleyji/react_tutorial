import React from 'react';
import PropTypes from 'prop-types';
import MouseTracker from './MouseTracker';

class Component extends React.Component {
    render(){
        const children = this.props.children;
        return (
            <>
                {children}
            </>
        )
    }
}

class Component2 extends React.Component {
    render(){
        return (
            <>
            <Component>
                <h1>hello ,{this.props.name}</h1>
            </Component>
            <MouseTracker />
            </>
        )
    }
}
Component.propTypes={
    children:PropTypes.element.isRequired
}
Component2.propTypes ={
    name: PropTypes.string
}
Component2.defaultProps = {
    name: 'Stranger'
}

export default Component2;