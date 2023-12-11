import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Courses = () => {

    const loction = useLocation()

    const studId = loction.pathname.split("/")[2]

    const [student,setStudent] = useState({
      name:"",
      courseList:[],
    })

    useEffect(() => {
      const getStudent = async() =>{
        try{
          const res = await axios.get(`/student/${studId}`)
          setStudent(res.data);
          console.log(res.data);
        }catch(err){
          console.log(err)
        }
      }
      getStudent();
    },[]);

    const [courses, setCourses] = useState([]);


    useEffect(() => {
      const getCourses = async() =>{
        try{
          const res = await axios.get(`/courses`)
          const filteredCourses = res.data.filter(course => student.courseList.includes(course.courseId));
          setCourses(filteredCourses);
          console.log(filteredCourses);
        }catch(err){
          console.log(err)
        }
      }
      getCourses();
    },[student]);
    
    const totalCreditsTaken = courses.reduce((total, course) => total + course.courseCredit, 0);
    
  return (
    <div>
        <h1>Courses</h1>
        <h3>Student id:{studId}</h3>
        <h3>Student name:{student.name}</h3>
        <h3>Credits taken:{totalCreditsTaken}</h3>
        <h3>Credits remaining:{24}</h3>
        <div>
          
        {courses.map((course,index) => (
            <div key={index}>
                <span>{course.courseId}</span>
                <span>{course.courseName}</span>
                <span>Credits:{course.courseCredit}</span>
                <span>
                    <button>Delete</button>
                </span>
            </div>
        ))}
        <br />
        <br />
      </div>
      <div><button><Link to={`/addnewcourses/${studId}`}>Add New Course</Link></button></div>
      <br />
      <br />
      <div><button>Confirm Changes</button></div>
    </div>
  )
}

export default Courses