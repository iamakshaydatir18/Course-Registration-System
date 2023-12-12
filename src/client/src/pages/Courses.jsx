import React from 'react'
import { useState } from 'react';
import {useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import './AddNewCourses.scss'

const Courses = () => {
    const location = useLocation()
    const studentId = location.pathname.split("/")[2]
    const [student,setStudent] = useState({
      name:"",
      courseList:[],
    })
    const [courses, setCourses] = useState([]);
    const totalCreditsTaken = courses.reduce((total, course) => total + course.courseCredit, 0);

    useEffect(() => {
        getStudent();
    },[]);

    useEffect(() => {
        getStudentCourses();
    },[student]);

    const getStudent = async() =>{
        try{
            const res = await axios.get(`/student/${studentId}`)
            setStudent(res.data);
            console.log(res.data);
        }catch(err){
            console.log(err)
        }
    }

    const getStudentCourses = async() =>{
        try{
            const res = await axios.get(`/student/${studentId}/courses`)
            setCourses(res.data);
            console.log(res.data);
        }catch(err){
            console.log(err)
        }
    }

    const dropStudentFromCourse = async (courseId) =>{
        try {
            const res = await axios.post(`/student/${studentId}/drop/${courseId}`);
            setCourses(res.data);
        } catch(err){
            //setError("Unable to drop course")
        }
    }

  return (
    <div className='add-new-courses'>
        <h1>Courses</h1>
        <div className='info'>
          <span><h3>Student id:{studentId}</h3></span>
          <span><h3>Student name:{student.name}</h3></span>
          <span><h3>Credits taken:{totalCreditsTaken}</h3></span>
          <span><h3>Credits remaining:{24-totalCreditsTaken}</h3></span>
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
              <button onClick={() => dropStudentFromCourse(course.courseId)}>Drop Course</button>
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
        <div><button><Link to={`/addnewcourses/${studentId}`}>Add New Course</Link></button></div>
      </div>
    </div>
  )
}

export default Courses