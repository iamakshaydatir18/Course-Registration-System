import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import './AddNewCourses.scss'


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

    <div className='add-new-courses'>
        <h1>Register for Courses</h1>
        <div className='info'>
        <span><h3>Student id:{studentId}</h3></span>
        </div>
        <div>
        <div className='table-container'>
        <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Instructor ID</th>
            <th>Instructor Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className='course-item'>
              <td>{course.courseId}</td>
              <td>{course.courseName}</td>
              <td>{course.courseDescription}</td>
              <td>{course.courseCredit}</td>
              <td>{course.instructor.id}</td>
              <td>{course.instructor.name}</td>
              <td>
                <button onClick={() => registerStudentForCourse(course.courseId)}>Add Course</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

        <br />
        <br />
      </div>
      <div className='button-container'>
      <span><button><Link to={`/coursespage/${studentId}`}>Go back to registered courses</Link></button></span>
      </div>
    </div>
  )
}

export default AddNewCourses