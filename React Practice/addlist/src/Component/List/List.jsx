import React from 'react'
import './List.css'
export const List = (props) => {
    console.log( "Data in List",props.goalData)
    // const goalname1=JSON.stringify(props.goalData.goalname)
  
    return (
    <div className="outercontainer">
        
    
    <div className="listcontainer">

        <div className="list">
               { props.goalData.map(item=>
                {
                    return(
                        <div className="itemname">
                            
                        {item.goal}
                        </div>
                        
                    )
                })}
            
            


        </div>

    </div>
    </div>
  )
}

export default List