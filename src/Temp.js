import React, { Component } from 'react'
import './Temp.css'
export default class  extends Component {

constructor(props){
    super(props)

    this.state={
        temp:10,
        tempClass:'cold'
    }
this.addHandler=this.addHandler.bind(this);
this.minHandler=this.minHandler.bind(this);
// this.minHandler=this.minHandler.bind(this);
}

addHandler(){
    if(this.state.temp >= 30){
        return false
    }

    this.setState((prevState)=> {
       return {temp:prevState.temp + 1}
    })

    if(this.state.temp >= 14){
        this.setState({tempClass:'hot'})
    }
}

minHandler(){
    if(this.state.temp <= 0){
       return false
    }

    this.setState((nextPrev)=>{
        return{
            temp:nextPrev.temp - 1
        }
    })

    if(this.state.temp < 16){
        this.setState({tempClass:'cold'})
    }
}

  render() {
    return (
      <div>
        <div className='app-container'>
            <div className='temperature-display-container'>
                <div className={`temperature-display ${this.state.tempClass}`}>
                   <h3>{this.state.temp}</h3> 
                </div>
                <div className='button-container'>
                <button onClick={this.addHandler}>+</button>
                <button onClick={this.minHandler}>-</button>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
