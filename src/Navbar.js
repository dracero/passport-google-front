import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Login from "./Login"
import Logout from './Logout';
import Check from './Check';

const Navbar = () => {

  return (
    <div className='App'>
       <Router>
         <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="Login" element={<Login />} />
          <Route exact path="Logout" element={<Logout />} />
          <Route exact path="Check" element={<Check />} />
        </Routes>
        <div className="list">
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="Login">Login</Link></li>
           <li><Link to="Logout">Logout</Link></li>
           <li><Link to="Check">Check</Link></li>
         </ul>
        </div>
       </Router>
    </div>
    );
  }

export default Navbar;

