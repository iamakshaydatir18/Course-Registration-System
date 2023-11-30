import React from 'react'
import { useState } from 'react';

const Adminpage = () => {

    const [courses, setCourses] = useState([
        'Introduction to React',
        'JavaScript Fundamentals',
        'Java for Beginners',
        'Intro to DSA',
        'Object Oriented Design',
      ]);

  return (
    <div>
        <h1>Admin Page</h1>
        <div>
            {courses.map((course,index)=>(
                <div key={index}>
                    <span>{course}</span>
                    <span><button>Delete Course</button></span>
                </div>
            ))}
        </div>
        <h2><button>Add a new course</button></h2>
    </div>
  )
}

export default Adminpage