import AccountCards from "./components/account-cards/AccountCards";
import Greeting from "./components/greeting/Greeting";
import Navbar from "./components/navbar/Navbar";
import TransactionHistory from "./components/transaction-history/TransactionHistory";
import "./globals.css";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container my-8">
        <Greeting name="John" />
        <AccountCards />
        <TransactionHistory />
      </div>
    </div>
  );
}

export default App;
