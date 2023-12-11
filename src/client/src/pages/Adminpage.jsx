import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const Adminpage = () => {

    const [courses, setCourses] = useState([
        {
            id: 1,
            name: 'Introduction to React',
            desc: 'Learn the basics of React framework',
            professor: 'John Doe'
        },
        {
            id: 2,
            name: 'JavaScript Fundamentals',
            desc: 'Foundational concepts of JavaScript programming',
            professor: 'Jane Smith'
        },
        {
            id: 3,
            name: 'Java for Beginners',
            desc: 'Introduction to Java programming language',
            professor: 'Alex Johnson'
        },
        {
            id: 4,
            name: 'Intro to DSA',
            desc: 'Fundamentals of Data Structures and Algorithms',
            professor: 'Emily Brown'
        },
        {
            id: 5,
            name: 'Object Oriented Design',
            desc: 'Principles of Object Oriented Design',
            professor: 'Michael Wilson'
        },
      ]);

    const [newCourse, setNewCourse] = useState({
        id:0,
        name:"",
        desc:"",
        professor:"",
    });
    
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };

    let subtitle;
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    const handleChange = (e) =>{
        setNewCourse((prev)=>({...prev,[e.target.name]: (e.target.name !== 'id') ? e.target.value : Number(e.target.value)}))
        console.log(newCourse)
    }

    const addCourse = () =>{
        setCourses(prev => [...prev, newCourse])
        console.log(courses)
    }

  return (
    <div>
        <h1>Admin Page</h1>
        <div>
            {courses.map((course,index)=>(
                <div key={index}>
                    <span>{course.id}||</span>
                    <span>{course.name}||</span>
                    <span>{course.professor}||</span>
                    <span>{course.desc}||</span>
                    <span><button>Delete Course</button></span>
                </div>
            ))}
        </div>
        <h2><button onClick={()=>openModal()}>Add a new course</button></h2>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={()=>closeModal()}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add a new course</h2>
            <div>Add course details</div>
            <div>
                <input type="text" placeholder='Course ID' name='id' onChange={handleChange}/>
                <input type="text" placeholder='Course Name' name='name' onChange={handleChange}/>
                <input type="text" placeholder='Course Instructor' name='professor' onChange={handleChange}/>
                <input type="text" placeholder='Course Details' name='desc' onChange={handleChange}/>
            </div>
            <div>
                <button onClick={()=>addCourse()}>Confirm Entry</button>
                <button onClick={closeModal}>close</button>
            </div>
            
      </Modal>
    </div>
  )
}

export default Adminpage