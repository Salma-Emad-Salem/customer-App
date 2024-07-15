/* eslint-disable react/prop-types */
// src/components/TransactionGraph.js
// import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./transaction.scss";
const TransactionChart = ({ transactions }) => {
  const dailyTotals = transactions.reduce((acc, transactions) => {
    const date = transactions.date;
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += transactions.amount;
    return acc;
  }, {});

  const data = Object.keys(dailyTotals).map((date) => ({
    date,
    amount: dailyTotals[date],
  }));

  return (
    <div className="transaction">
      <h2>transaction</h2>
      <ResponsiveContainer width="80%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#fff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionChart;
