import React from 'react';
class Cat extends React.Component{
    render(){
        const mouse = this.props.mouse;
        return(
            <img src={require("./img/cat.jpg")} alt="cat" style={{position:'absolute',left:mouse.x, top:mouse.y, width:'50px'}} />
        );
    }
}
class Mouse extends React.Component {
    constructor(props){
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            x:0,
            y:0
        }
    }
    handleMouseMove(event){
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render(){
        return(
            <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove} >
                {this.props.render(this.state)}
            </div>
        )
    }
}
export default class MouseTracker extends React.Component{
   render(){
       return(
           <div>
               <Mouse render={mouse => (
                   <Cat mouse={mouse} />
               )} />
           </div>
       )
   }
}