import React from 'react'
import './List.css'
export const List = (props) => {
    console.log( "Data in List",props.goalData)
    // const goalname1=JSON.stringify(props.goalData.goalname)
  
    return (
    
    <div className="listcontainer">

        <div className="list">
            <ul>
               { props.goalData.map(item=>
                {
                    return(
                        <li>{item.goal}</li>
                        
                    )
                })}
            </ul>
        </div>

    </div>
  )
}

export default List