import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // use one useState instead of multiple
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });





  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);
    // console.log(event.target.value)
   
     // use ... spread operator the keep previous values
      setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
      
    });


    //updating the state that depends on previous states.
    // setUserInput((prevState)=>{

    //   return {...prevState,enteredTitle:event.target.value}

    // });






   
  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
       setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };


  //form submission
  const submithandler = (event)=>{

    event.preventDefault()
    const expenseData={
      title : userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date:userInput.enteredDate
    }


    console.log("From ExpenseFORM",expenseData)
   // after the data receive clear the text


   //step2 
   props.onSaveExpenseData(expenseData)

   setUserInput({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })
  

  } // submitchange handler





  return (
    <form onSubmit={submithandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler}
          
          
          //  two way binding 
          // to clear the input once the button is clicked.
           value={userInput.enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
