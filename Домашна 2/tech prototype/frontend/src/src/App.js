import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Home from "./Home/Home";
import List from "./List/List";
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/list" element={<List/>}/>
        </Routes>
      </Router>
  );
}

export default App;
