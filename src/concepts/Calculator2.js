import React from 'react';
import './Calculator2.css';

class NumOrType extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<span className={this.props.name==='num' ? 'number' : 'func-type'} onClick={this.props.onClick}>{this.props.value}</span>)
    }
    
}
class Calculator2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentValue : '',
            currentFunc : '',
            targetValue : '',
            result : '',
            
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDivide = this.handleDivide.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleTimes =  this.handleTimes.bind(this);
        this.handleOnclickNumber = this.handleOnclickNumber.bind(this);
        this.makeFloat = this.makeFloat.bind(this);
        this.showResult = this.showResult.bind(this);
        this.resetEverything = this.resetEverything.bind(this);
    }
    handleAdd(){
        if(this.state.currentValue!=='' && this.state.currentFunc !=='' && this.state.targetValue!==''){
            this.showResult();
        }
        this.setState({
            currentFunc: 'add'
        });
    }
    handleMinus(){
        if(this.state.currentValue!=='' && this.state.currentFunc !=='' && this.state.targetValue!==''){
            this.showResult();
        }
        this.setState({
            currentFunc: 'minus'
        })
    }
    handleDivide(){
        if(this.state.currentValue!=='' && this.state.currentFunc !=='' && this.state.targetValue!==''){
            this.showResult();
        }
        this.setState({
            currentFunc: 'divide'
        })
    }
    handleTimes(){
        if(this.state.currentValue!=='' && this.state.currentFunc !=='' && this.state.targetValue!==''){
            this.showResult();
        }
        this.setState({
            currentFunc: 'times'
        })
    }
    handleOnclickNumber(e){
        const num = e.target.innerText;
        const targetValue = this.state.targetValue.startsWith('0') ? this.state.targetValue.substring(1) : this.state.targetValue;
        const currentValue = this.state.currentValue.startsWith('0') ? this.state.currentValue.substring(1) : this.state.currentValue;
        const currentFunc = this.state.currentFunc;

        if(currentValue!==''&&currentFunc!==''){
            this.setState({
                targetValue: (targetValue + '' + num),
                result : (targetValue + '' + num),
            })
        }else{
            this.setState({
                currentValue: (currentValue + '' + num),
                result : (currentValue + '' + num),
            })
        }
    }
    makeFloat(){
        let point = '.';
        const targetValue = this.state.targetValue;
        const currentValue = this.state.currentValue;
        const currentFunc = this.state.currentFunc;

        if(currentValue!==''&&currentFunc!==''){
            if(targetValue.indexOf('.')!==-1){
                return;
            }
            this.setState({
                targetValue: targetValue + '' + point
            })
        }else{
            if(currentValue.indexOf('.')!==-1){
                return;
            }
            this.setState({
                currentValue: currentValue + '' + point
            })
        }
    }
    showResult(){
        if(this.state.targetValue===''){
            return;
        }
        const value1 = parseFloat(this.state.currentValue);
        const value2 = parseFloat(this.state.targetValue);
        const currentFunc = this.state.currentFunc;
       
        let result = 0;
        switch(currentFunc){
            case'times':result=value1*value2;break;
            case'divide':result=value1/value2;break;
            case'add':result=value1+value2;break;
            case'minus':result=value1-value2;break;
        }
        this.setState({
            currentValue: result+'',
            result:result+'',
            targetValue:'',
            currentFunc:'',
        });
    }
    resetEverything(){
        this.setState({
            currentValue: '',
            result: '',
            targetValue: '',
            currentFunc: '',
        })
    }
    render(){
        return(
            <>
            <div>
                <div className="display">
                    <input value={this.state.result} readOnly />
                    <button onClick={this.resetEverything}>AC</button>
                </div>
            </div>
            <div>
                <NumOrType value="1" name="num" onClick={this.handleOnclickNumber} />
                <NumOrType value="2" name="num" onClick={this.handleOnclickNumber}  />
                <NumOrType value="3" name="num" onClick={this.handleOnclickNumber}  />
                <NumOrType value="+" name="func" onClick={this.handleAdd} />
            </div>
            <div>
                <NumOrType value="4" name="num" onClick={this.handleOnclickNumber}  />
                <NumOrType value="5" name="num" onClick={this.handleOnclickNumber}  />
                <NumOrType value="6" name="num" onClick={this.handleOnclickNumber}  />
                <NumOrType value="-" name="func" onClick={this.handleMinus} />
            </div>
            <div>
                <NumOrType value="7" name="num" onClick={this.handleOnclickNumber}  />
                <NumOrType value="8" name="num" onClick={this.handleOnclickNumber}  />
                <NumOrType value="9" name="num" onClick={this.handleOnclickNumber}  />
                <NumOrType value="x" name="func" onClick={this.handleTimes} />
            </div>
            <div>
                <NumOrType value="." name="func" onClick={this.makeFloat} />
                <NumOrType value="0" name="num" onClick={this.handleOnclickNumber} />
                <NumOrType value="/" name="func" onClick={this.handleDivide} />
                <NumOrType value="= " name="func" onClick={this.showResult} />
            </div>
            </>
        )
    }
}
export default Calculator2;