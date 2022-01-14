import React from 'react';
import Header from './Header';
import ExpenseForm from './ExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet!
        <Header />
        <ExpenseForm />
      </div>
    );
  }
}

export default Wallet;
