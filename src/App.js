import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { DUMMY_EXPENSES } from "./data";

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const deleteExpense = (id) => {
    const newItems = expenses.filter((e) => e.id !== id);
    setExpenses(newItems);
  };
  const updateExpense = (expense) => {
    const newExpenses = [...expenses];
    const targetExpense = newExpenses.find((e) => e.id === expense.id);
    targetExpense.title = expense.title;
    targetExpense.amount = expense.amount;
    targetExpense.date = expense.date;

    setExpenses(newExpenses);
  };

  return (
    <div>
      <NewExpense onExpenseFormSubmit={addExpenseHandler} />
      <Expenses
        items={expenses}
        updateExpense={updateExpense}
        deleteExpense={deleteExpense}
      />
    </div>
  );
};

export default App;
