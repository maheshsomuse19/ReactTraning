import React from 'react'
import Total from './Total'
import './ItemTotal.css'
const ItemTotal = (props) => {
  
  return (  
    <>
      <div className="inner">
        <div className='showdata'>
          <h1>{props.fetchData}</h1>
        </div>
        <div className="sign">
          <h1> * </h1> 
 
          </div>
        <div>
          <Total totalData={props.fetchData}/>
        </div>

      </div>
      </>
      
  
  )
}

export default ItemTotal
