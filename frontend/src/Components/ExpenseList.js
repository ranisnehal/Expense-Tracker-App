import React from 'react';

export default function ExpenseList({ expenses, onDelete }) {
  if (!expenses.length) return <p>No expenses yet.</p>;

  const total = expenses.reduce((s, e) => s + (e.amount || 0), 0);

  return (
    <div>
      <div className="summary">
        <strong>Total:</strong> ₹{total.toFixed(2)}
      </div>
      <ul className="expense-list">
        {expenses.map(exp => (
          <li key={exp._id}>
            <div>
              <div className="title">{exp.title} <span className="category">({exp.category})</span></div>
              <div className="meta">{new Date(exp.date).toLocaleDateString()}</div>
            </div>
            <div className="right">
              <div className="amount">₹{exp.amount.toFixed(2)}</div>
              <button className="del" onClick={() => onDelete(exp._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
