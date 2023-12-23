import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Home from "./home/Home";
import Search from "./search/Search";
import About_Us from './about_us/About_Us'
import Login from './login/Login'
import Register from './register/Register'
import Winery from './winery/Winery'
function App() {
  return (
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about_us" element={<About_Us/>}/>
            <Route path="/winery" element={<Winery/>}/>
        </Routes>
      </Router>
  );
}

export default App;
