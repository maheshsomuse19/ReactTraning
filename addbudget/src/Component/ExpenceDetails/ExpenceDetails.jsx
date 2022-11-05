import React from 'react'

const ExpenceDetails = (props) => {
  return(
    <div>
        <h1>{props.data.date}</h1>
        <h1>{props.data.username}</h1>
        <h1>{props.data.amount}</h1>
    </div>
  )
}
export default ExpenceDetails