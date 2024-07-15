// src/App.js
import { useState } from "react";
import CustomerTable from "./component/cutomerTable/CustomerTable";
import TransactionChart from "./component/transaction/TransactionChart";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
// import data from "../src/data/db.json";

const App = () => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  return (
    <div className="home">
      <Header/>
      <div className="container">
      <CustomerTable
        filteredTransactions={filteredTransactions}
        setFilteredTransactions={setFilteredTransactions}
      />
      <TransactionChart transactions={filteredTransactions} />
      </div>

      <Footer/>

    </div>


  );
};

export default App;
