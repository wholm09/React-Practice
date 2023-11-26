import './ExpenseDate.css';

function ExpenseDate(props) {
  const day = props.date.toLocaleString(['ban', 'id'], { day: '2-digit' });
  const month = props.date.toLocaleString(['ban', 'id'], { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      {/* <div>{date.toISOString()}</div> */}
      <div>{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;