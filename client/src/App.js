
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from './components/SignUp';
import Loginpage from './components/LoginPage';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // test
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={<SignUp/>}/>
         <Route path="/login" element={<Loginpage/>}  />
         <Route path="/profile" element={<Profile/>}/>  
       </Routes>
     </Router>
    </div>
  );
}

export default App;
