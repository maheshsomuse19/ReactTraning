import React from 'react'
import AddGoalForm from './AddGoalForm/AddGoalForm'
export const AddId = (props) => {
    const onSaveGoalDataHandler = (enteredGoalData)=>{

        const goalData={
          ...enteredGoalData,
          id:Math.random().toString()
    
        }
    
        console.log("FROM NewGoal",goalData)
        props.onAddGoal(goalData)
    
      }
    
  return (
    <div>
        <AddGoalForm onSaveData={onSaveGoalDataHandler}/>


    </div>
  )
}


export default AddId 