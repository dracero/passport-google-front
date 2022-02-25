import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from "react";
import Cookies from 'js-cookie';

function Login() {
  const [sid, setSid] = useState(false)
  useEffect(() => {
        Cookies.get('session') ? setSid(true) : setSid(false);
    }, []); 
  
  return (
    <div className="App">
      {console.log(Cookies.get('connect.sid'))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:8080/auth/google"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Login;
