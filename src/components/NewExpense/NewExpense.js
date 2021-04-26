import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const toggleEditingHandler = () => {
    setIsEditing((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={toggleEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel={toggleEditingHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
