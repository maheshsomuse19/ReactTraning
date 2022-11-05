// import logo from './logo.svg';
import React,{useState} from 'react';

import './App.css';
import AddItem from './Component/AddItem/AddItem';
import ItemTotal from './Component/ItemTotal/ItemTotal';
function App() {
  const [dataItem,setDataItem]=useState();
  const sendData=(d)=>{
     setDataItem(d)

  }
  console.log("dfgh/jk",dataItem);
    return (
    <div className="App">
      <div>
        
      <AddItem data={sendData}/>
      </div>
      <ItemTotal fetchData={dataItem}/>
    </div>
  );
}

export default App;
