import './PinViewer.css';

function PinItem({ value }) {
  return (
    <div>
      <h2>Please input your pin for verification</h2>
      <ul>
        <li>{value}</li>
      </ul>
    </div>
  );
}

export default PinItem;
