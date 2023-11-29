import './App.css';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Login from './pages/Login';
import Adminpage from './pages/Adminpage';
import Courses from './pages/Courses';
import Adminlogin from './pages/Adminlogin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin" element={<Adminpage/>}/>
          <Route path="/courses/:id" element={<Courses/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
