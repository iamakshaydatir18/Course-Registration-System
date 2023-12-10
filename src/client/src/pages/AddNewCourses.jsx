import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const AddNewCourses = () => {
    const loction = useLocation()

    const studId = loction.pathname.split("/")[2]

    const [courses, setCourses] = useState([
      // { id: 1, name: 'Introduction to React', credits: 3 },
      // { id: 2, name: 'JavaScript Fundamentals', credits: 4 },
      // { id: 3, name: 'Java for Beginners', credits: 4 },
      // { id: 4, name: 'Intro to DSA', credits: 3 },
      // { id: 5, name: 'Object Oriented Design', credits: 5 },
    ]);

    // const coursesFromServer = async() =>{
    //   try{
    //     const res = await axios.get("http://localhost:8080/courses")
    //     console.log(res.data);
    //     return res.data;
    //   }catch(err){
    //     console.log(err)
    //   }
    // }

    // setCourses(coursesFromServer);
    
      useEffect(() => {
        const getCousres = async() =>{
          try{
            const res = await axios.get("/courses")
            setCourses(res.data);
            console.log(res.data);
          }catch(err){
            console.log(err)
          }
        }
        getCousres();
      },[]);

  return (
    <div>
        <h1>Courses</h1>
        <h3>Student id:{studId}</h3>
        <h3>Credits taken:{0}</h3>
        <h3>Credits remaining:{24}</h3>
        <div>
        {courses.map((course,index) => (
            <div key={index}>
                <span>{course.courseId}</span>
                <span>{course.courseName}</span>
                <span>{course.courseDescription}</span>
                <span>{course.courseCredit}</span>
                <span>{course.instructor.name}</span>
                <span>{course.instructor.id}</span>
                <span>
                    <button>Add Course</button>
                </span>
            </div>
        ))}
        <br />
        <br />
      </div>
      <div><button><Link to={`/coursespage/${studId}`}>Go back to registered courses</Link></button></div>
      <br />
      <br />
      <div><button>Confirm Changes</button></div>
    </div>
  )
}

export default AddNewCourses