import React,{useState} from 'react'

export const AddItem = (props) => {

    
    const [item,setItem]=useState(0)
    
    const updatePlusHandler=()=>{
        setItem(item+1)
    }
    const updateMinusHandler=()=>{
        if(item>0){
        setItem(item-1)
        }
    }
    props.data(item)
    console.log("Data in AddItem",item)




  return (
    <div className="outercontainer">
        <h1>Add Item</h1>
        <div className="innercontainer">
            
            <div className="firstbutton">
                <button type="submit" 
                onClick={updatePlusHandler}
                >+</button>
            </div>
            <div className="inputitem">
                {item}
            </div>
            <div className="secondbutton">
            <button type="submit" 
            onClick={updateMinusHandler}
            >-</button>
            
            </div>
        </div>


    </div>
  )
}
export default AddItem