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
import AddNewCourses from './pages/AddNewCourses';
import StudentRegistration from './pages/StudentRegistration';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin" element={<Adminpage/>}/>
          <Route path="/coursespage/:id" element={<Courses/>}/>
          <Route path="/addnewcourses/:id" element={<AddNewCourses/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/registration" element={<StudentRegistration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
