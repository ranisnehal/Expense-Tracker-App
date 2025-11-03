import React, { useState } from 'react';

export default function AddExpense({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    onAdd({ title, amount: Number(amount), category });
    setTitle(''); setAmount(''); setCategory('');
  };

  return (
    <form className="add-form" onSubmit={submit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} type="number" />
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
