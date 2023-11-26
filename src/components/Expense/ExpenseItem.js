// import { Fragment } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({ date, title, price, lotAmount }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
        <div className="expense-item__price">{lotAmount}</div>
        <div>{price * lotAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;