import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Courses = () => {

    const loction = useLocation()

    const studId = loction.pathname.split("/")[2]

    const [student,setStudent] = useState()

    useEffect(() => {
      const getStudent = async() =>{
        try{
          const res = await axios.get("http://localhost:8080/courses")
          setStudent(res.data);
          console.log(res.data);
        }catch(err){
          console.log(err)
        }
      }
      getStudent();
    },[]);

    const [courses, setCourses] = useState(student.Courses);
    
    
  return (
    <div>
        <h1>Courses</h1>
        <h3>Student id:{studId}</h3>
        <h3>Student id:{student.name}</h3>
        <h3>Credits taken:{0}</h3>
        <h3>Credits remaining:{24}</h3>
        <div>
        {courses.map((course,index) => (
            <div key={index}>
                <span>{course.id}</span>
                <span>{course.name}</span>
                <span>Credits:{course.credits}</span>
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