import React from 'react';
import ReactDOM from 'react-dom';
import Example from './hooks/HookOne';
import Form from './hooks/Form';
ReactDOM.render(
    <React.StrictMode>
       <Form />
    </React.StrictMode>,
    document.getElementById('root')
)
// import App from './concepts/App';
// import Clock from './concepts/Clock';
// import Toggle from './concepts/Toggle';
// import LoginButton from './concepts/LoginButton';
// import Greeting from './concepts/Greeting';
// import Login from './concepts/Login';
// import Mailbox from './concepts/Mailbox';
// import Page from './concepts/Page';
// import NameForm from './concepts/NameForm';
// import FlavorForm from './concepts/FlavorForm';
// import Calculator from './concepts/Calculator';
// import Calculator2 from './concepts/Calculator2';
// import Dialog from './concepts/Dialog';
// import Mock from './concepts/Mock';
// import Wcag from './concepts/Wcag';
// import Code from './concepts/Code';
// import Context from './concepts/Context';
// import MouseTracker from './concepts/MouseTracker';
// import PropType from './concepts/PropType';
// import Name from './concepts/Name';
// import Memo from './concepts/Memo';
// class Brick extends HTMLElement {
//     connectedCallback(){
//         const mountPoint = document.createElement('span');
//         this.attachShadow({mode:'open'}).appendChild(mountPoint);
//         const name = this.getAttribute('name');
//         const url = 'https://wwww.google.com/search?q='+encodeURIComponent(name);
//         ReactDOM.render(<a href={url}>{name}</a>,mountPoint)
//     }
// }
// customElements.define('x-search', Brick);