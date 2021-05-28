import {useState} from 'react';
import './App.css';

function App() {
  const arr = [1,2,3,4,5,6,7,8,9];
  const [chances, updateChances] = useState(3);
  const [ inputNumber, setInput ] = useState('');
  const click =(num)=> {
    if(parseInt(inputNumber) === num){
      alert('Congrats you win');
      updateChances(3);
      setInput('');
    }else if(chances === 1){
      alert('Sorry, you loose');
      updateChances(3);
      setInput('');
    }else{
      updateChances(chances-1);
    }
  };
  return (
    <div className="App">
      <div className="App-header">
          <div className="input-style">
            <label className="mg-bt-16">Enter a number between 1 to 9</label>
            <input type="number" min="0" max="9" value={inputNumber} onChange={(event)=> setInput(event.target.value)} className="mg-bt-16" />
          </div>
          {inputNumber > 0 && inputNumber< 10 && <div className="tile-style">
            {
              arr.map((ele, index)=><button className="tile-element" key ={index} onClick={()=>click(ele)}>Find</button>)
            }
          </div>}
          {inputNumber>0 && inputNumber< 10 && <div className="chances-label">
            chances: {chances}
          </div>}
      </div>
    </div>
  );
}

export default App;
