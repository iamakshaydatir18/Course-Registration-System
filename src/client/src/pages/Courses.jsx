import React from 'react'
import { useState } from 'react';
import {useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

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
    <div>
        <h1>Courses</h1>
        <h3>Student id:{studentId}</h3>
        <h3>Student name:{student.name}</h3>
        <h3>Credits taken:{totalCreditsTaken}</h3>
        <h3>Credits remaining:{24-totalCreditsTaken}</h3>
        <div>
          
        {courses.map((course,index) => (
            <div key={index}>
                <span>{course.courseId}  </span>
                <span>{course.courseName}  </span>
                <span>Credits:{course.courseCredit}  </span>
                <span>
                    <button onClick={() => dropStudentFromCourse(course.courseId)}>Drop Course</button>
                </span>
            </div>
        ))}
        <br />
        <br />
      </div>
      <div><button><Link to={`/addnewcourses/${studentId}`}>Add New Course</Link></button></div>
    </div>
  )
}

export default Courses