/* eslint-disable react/prop-types */
// src/components/CustomerTable.js
import { useState, useEffect } from "react";
import data from "../../data/db.json";
import "./customer.scss";

const CustomerTable = ({ filteredTransactions, setFilteredTransactions }) => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setCustomers(data.customers);
    setTransactions(data.transactions);
    setFilteredTransactions(data.transactions);
  }, []);

  const filterTransactions = (name, amount) => {
    let filtered = transactions;
    if (name) {
      filtered = filtered.filter((t) =>
        customers.find(
          (c) =>
            c.id === t.customer_id &&
            c.name.toLowerCase().includes(name.toLowerCase())
        )
      );
    }
    if (amount) {
      filtered = filtered.filter((t) => t.amount >= amount);
    }
    setFilteredTransactions(filtered);
  };

  return (
    <div className="customer">
      <h2>Customer Transactions</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Filter by customer name"
          onChange={(e) => filterTransactions(e.target.value, null)}
        />

        <input
          type="number"
          placeholder="Filter by transaction amount"
          onChange={(e) => filterTransactions(null, e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Transaction Amount</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transactions) => (
            <tr
              key={transactions.id}
              // onClick={() => onCustomerSelect(transactions.customer_id)}
            >
              <td>{transactions.customer_id}</td>
              <td>
                {customers.find((c) => c.id === transactions.customer_id)?.name}
              </td>
              <td>{transactions.amount}</td>
              <td>{transactions.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
