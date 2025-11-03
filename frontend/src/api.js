const API = {
  getExpenses: () => fetch('/api/expenses').then(res => res.json()),
  addExpense: (data) => fetch('/api/expenses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),
  deleteExpense: id => fetch(`/api/expenses/${id}`, { method: 'DELETE' }).then(res => res.json()),
  updateExpense: (id, data) => fetch(`/api/expenses/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json())
};

export default API;
