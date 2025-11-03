import React, { useEffect, useState } from 'react';
import API from './api';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const data = await API.getExpenses();
      setExpenses(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchExpenses(); }, []);

  const handleAdd = async (expense) => {
    await API.addExpense(expense);
    fetchExpenses();
  };

  const handleDelete = async (id) => {
    await API.deleteExpense(id);
    setExpenses(prev => prev.filter(e => e._id !== id));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <AddExpense onAdd={handleAdd} />
      {loading ? <p>Loading...</p> : <ExpenseList expenses={expenses} onDelete={handleDelete} />}
    </div>
  );
}

export default App;
