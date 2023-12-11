import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from "./Login";
import Adminpage from "./Adminpage";
import Courses from "./Courses";
import AddNewCourses from "./AddNewCourses";
import Adminlogin from "./Adminlogin";
import StudentRegistration from "./StudentRegistration";

function RedirectComponent() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true });
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/admin" element={<Adminpage/>}/>
            <Route path="/coursespage/:id" element={<Courses/>}/>
            <Route path="/addnewcourses/:id" element={<AddNewCourses/>}/>
            <Route path="/adminlogin" element={<Adminlogin/>}/>
            <Route path="/registration" element={<StudentRegistration/>}/>
        </Routes>
    );
}

export default RedirectComponent;