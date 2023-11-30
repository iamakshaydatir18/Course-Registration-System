import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Courses = () => {

    const loction = useLocation()

    const studId = loction.pathname.split("/")[2]

    const [courses, setCourses] = useState([
        'Introduction to React',
        'JavaScript Fundamentals',
        'Java for Beginners',
        'Intro to DSA',
        'Object Oriented Design',
      ]);

  return (
    <div>
        <h1>Courses</h1>
        <h3>Student id:{studId}</h3>
        <h3>Credits taken:{0}</h3>
        <h3>Credits remaining:{24}</h3>
        <div>
        {courses.map((course,index) => (
            <div key={index}>
                <span>{course}</span>
                <span>
                    <button>Add</button>
                    <button>Delete</button>
                </span>
            </div>
        ))}
      </div>
      <br />
      <br />
      <button>Register</button>
    </div>
  )
}

export default Courses