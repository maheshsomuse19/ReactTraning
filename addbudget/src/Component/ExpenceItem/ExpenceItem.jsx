import { useState } from "react";
// import ExpenceDetails from "../ExpenceDetails/ExpenceDetails";

import './ExpenceItem.css'
const ExpenceItem = () => {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    const value = event.target.value;
    console.log(value)
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

  }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <p>Lets create expence details !!!</p>
        
        <div className="inner">
            <label>Enter Date</label><br />
            <input type="date"  
            className="dateinput"
            name="date" 
            value={inputs.date || ""} 
            onChange={handleChange}
            />
        </div>
        <div className="inner">
            <label>Enter Item Name</label><br />
            <input 
            type="text" 
            className="input1" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}/>
        </div>
        <div className="inner">
            <label>Enter Amount</label><br />
            <input
             type="text" 
             className="input1"
             name="amount" 
             value={inputs.amount || ""} 
             onChange={handleChange}
        />
        </div>
        <div className="inner">

        {/* <button type="button" className="addbutton">Add</button> */}
        <input type="submit" className="addbutton" />

        </div>    
        </form>
        {/* <div>
          <ExpenceDetails data={inputs}/>
        </div> */}
    </div>
  )
}
export  default ExpenceItem