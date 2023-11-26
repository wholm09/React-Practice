import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses }) {
  let expensesArr = [];

  for(let i = 0; i <= expenses.length; i++) {
    // console.log(expenses[i]);
    expensesArr.push(
      <ExpenseItem
        date={expenses[i].date}
        title={expenses[i].title}
        lotAmount={expenses[i].lotAmount}
        price={expenses[i].price}
      />
    );
  }

  console.log(expensesArr);

  return (
    <ExpenseItem
      date={expenses[0].date}
      title={expenses[0].title}
      lotAmount={expenses[0].lotAmount}
      price={expenses[0].price}
    />
  );
};

export default ExpenseList;