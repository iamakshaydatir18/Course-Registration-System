import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';

const Adminpage = () => {

    const [courses, setCourses] = useState([
        'Introduction to React',
        'JavaScript Fundamentals',
        'Java for Beginners',
        'Intro to DSA',
        'Object Oriented Design',
      ]);

    const [newCourse, setNewCourse] = useState();
    
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
        <h2><button onClick={()=>openModal()}>Add a new course</button></h2>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={()=>closeModal()}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Example Modal</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
            
      </Modal>
    </div>
  )
}

export default Adminpage