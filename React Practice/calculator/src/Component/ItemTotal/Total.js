import React from 'react'
import './Total.css'
const Total = (props) => {
    const number=20;
    const result=number*props.totalData;

  return (
    <div className="totalouter">
        <div className="calculate">
          
          <div>
            <h1>{number}</h1>
          </div>
          <div className='sign'>
          <h1>=</h1>
          </div>
          <div className="result">
            <h1>{result}</h1>
          </div>

           
        </div>
        
        

    </div>
  )
}
export  default Total