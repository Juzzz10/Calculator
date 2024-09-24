import logo from './logo.svg';
import './App.css';

function Key({label, onClick}) {
  return (
    <button onClick={onClick}>
      {label}
    </button>       
  );
}

function Display() {
  return (
    <>0</>    
  );
}

function App() {

  const ClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
  }

  return (
    <div className="App">
      <div className="Calc">
       <div className="Disp">
        <Display />
        </div>
        <div className="Buttons">
          <Key label={7} onClick={ClickHandler}/>
          <Key label={8} onClick={ClickHandler}/> 
          <Key label={9} onClick={ClickHandler}/> 
          <Key label={"÷"} onClick={ClickHandler}/>
          <Key label={4} onClick={ClickHandler}/>
          <Key label={5} onClick={ClickHandler}/> 
          <Key label={6} onClick={ClickHandler}/> 
          <Key label={"*"} onClick={ClickHandler}/> 
          <Key label={1} onClick={ClickHandler}/>
          <Key label={2} onClick={ClickHandler}/> 
          <Key label={3} onClick={ClickHandler}/> 
          <Key label={"-"} onClick={ClickHandler}/>
          <Key label={"C"} onClick={ClickHandler}/> 
          <Key label={0} onClick={ClickHandler}/>
          <Key label={"="} onClick={ClickHandler}/> 
          <Key label={"+"} onClick={ClickHandler}/>      
        </div>
      </div>
    </div>
  );
}

export default App;
