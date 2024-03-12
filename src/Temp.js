import React, { Component } from 'react'
import './Temp.css'
export default class  extends Component {
  render() {
    return (
      <div>
        <div className='app-container'>
            <div className='temperature-display-container'>
                <div className='temperature-display cold'>
                   <h3>10^c</h3> 
                </div>
                <div className='button-container'>
                <button>+</button>
                <button>-</button>
            </div>
            </div>
        
        </div>
      </div>
    )
  }
}
