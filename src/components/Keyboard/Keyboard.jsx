import './Keyboard.css';

function Keyboard() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <div onClick="handleClick('1')">1</div>
            <div onClick="handleClick('2')">2</div>
            <div onClick="handleClick('3')">3</div>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td></td>
            <td>0</td>
            <td>&larr;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Keyboard;
