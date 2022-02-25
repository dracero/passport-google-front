import logo from './logo.svg';
import './App.css';
import { useState} from "react";

function Check() {
  let valor = document.cookie.split("token=");
  const [cookie] = useState(valor[1]);
  
  
  return (
    <div className="App">
      {console.log([cookie])}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:8080/check"
          rel="noopener noreferrer"
        >
          Verificar
        </a>
      </header>
    </div>
  );
}

export default Check;