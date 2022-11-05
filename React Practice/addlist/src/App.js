// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import AddId from './Component/AddId';
import List from './Component/List/List';
const dummygoal=[
  {id:'101  ',
  goal:'HTML',
  },
]

function App() {
  
  const [goal,setGoal] = useState(dummygoal);

  const addGoalhandler = (goal) =>{

  setGoal((prevGoal)=>{

      return[goal, ...prevGoal];

    });
  }
  console.log("APP Data",goal)

  
  return (
    <div className="App">
      <AddId onAddGoal={addGoalhandler}/>
      <List goalData={goal}/>
    </div>
  );
}

export default App;
