import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // creating amounts array with all transaction amounts
  const amounts = transactions.map(transaction => transaction.amount);
  
  // adding up all amounts and rounding up to 2 decimal places
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>£{total}</h1>
    </>
  )
}
