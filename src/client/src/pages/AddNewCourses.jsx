import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const AddNewCourses = () => {
    const location = useLocation();
    const studentId = location.pathname.split("/")[2];
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const getCourses = async() =>{
          try{
            const res = await axios.get("/courses")
            setCourses(res.data);
            console.log(res.data);
          }catch(err){
            console.log(err)
          }
        }
        getCourses();
      },[]);

    const registerStudentForCourse = async (courseId) =>{
        try {
            const res = await axios.post(`/student/${studentId}/register/${courseId}`);
            navigate(`/coursespage/${studentId}`);
        } catch(err){
            setError("Unable to register for course")
        }
    }

  return (
    <div>
        <h1>Courses</h1>
        <h3>Student id:{studentId}</h3>
        <h3>Credits taken:{0}</h3>
        <h3>Credits remaining:{24}</h3>
        <div>
        {courses.map((course,index) => (
            <div key={index}>
                <span>{course.courseId}  </span>
                <span>{course.courseName}  </span>
                <span>{course.courseDescription}  </span>
                <span>{course.courseCredit}  </span>
                <span>{course.instructor.name}  </span>
                <span>{course.instructor.id}  </span>
                <span>
                    <button onClick={() => registerStudentForCourse(course.courseId)}>Add Course</button>
                </span>
            </div>
        ))}
        <br />
        <br />
      </div>
      <div><button><Link to={`/coursespage/${studentId}`}>Go back to registered courses</Link></button></div>
    </div>
  )
}

export default AddNewCourses