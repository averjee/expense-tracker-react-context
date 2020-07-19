import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

// transaction is the prop from TransactionList
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  //using deleteTransaction function within GlobalState.js to delete transaction using id
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}£{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
