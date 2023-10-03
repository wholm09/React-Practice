import { Fragment } from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <Fragment>
      <div className="expense-item">
        <div>3rd October 2023</div>
        <div className="expense-item__description">
          <h2>Mr. Beast</h2>
          <div className="expense-item__price">USD 100</div>
        </div>
      </div>
      <div className="expense-item">
        <div>4th October 2023</div>
        <div className="expense-item__description">
          <h2>Neko Neko</h2>
          <div className="expense-item__price">USD 125</div>
        </div>
      </div>
    </Fragment>
  );
}

export default ExpenseItem;
