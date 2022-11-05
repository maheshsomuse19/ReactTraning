import React,{useState} from 'react'
import './AddGoalForm.css'
import styles  from './AddGoal.module.css'
import Button from '../Button'
const AddGoalForm = (props) => {
 
  const [isvalid,setIsValid]=useState(false)
  const [userInput,updateUserInput]=useState(
    {
      inputGoal:'',
    }
  )
  const goalUpdateHandler=(event)=>{
    updateUserInput({
      ...userInput,
      inputGoal:event.target.value,
    })  
  
    if(userInput.inputGoal.trim().length>0){
      setIsValid(false)
  
    }
  }

  const submitButtonHandler=(event)=>{

    if(userInput.inputGoal.trim().length===0){
      setIsValid(true)

      event.preventDefault();
      
    }
    else{

      event.preventDefault();
  
      const goalData={
        goal:userInput.inputGoal,
      
      
      }
      props.onSaveData(goalData)
       
    }
    

     
    // console.log("Data in Goal form",goalData);
    
    updateUserInput({
      inputGoal:'',
    })
  }

  return (
    <div className="container">
      
    
  <div class="center">
  <h1 className={styles.heading}>Add Course Goal</h1>
  <form onSubmit={submitButtonHandler}>
    <div className={`formcontrol ${isvalid ? "invalid":''}`}>
      <div class="inputbox">
      <input 
      // style={{background:isvalid ? 'red':''}}
      type="text" 
      value={userInput.inputGoal}
      />
      <span 
      // style={{color:isvalid ? 'red':'black'}}
      >Enter Goal</span>
    </div>
    <div class="inputbox">
      {/* <button type="submit"  value="submit">Submit</button> */}
      <Button type="submit"onClick={goalUpdateHandler} valid={isvalid}>Submit</Button>
    </div>

    </div>
  </form>

</div>
</div>

    )
}

export default AddGoalForm
