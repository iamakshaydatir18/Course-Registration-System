import React, {useEffect, useState} from 'react'
import Modal from 'react-modal';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './AddNewCourses.scss'


Modal.setAppElement('#root');

const Adminpage = () => {
    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate()
    const [newCourse, setNewCourse] = useState({
        courseId:0,
        courseName:"",
        courseDescription:"",
        courseCredit:0,
        professorName:"",
        professorId: 0,
    });

    useEffect(() => {
        const getCourses = async () => {
            try {
                const res = await axios.get("/courses")
                setCourses(res.data);
            } catch (err) {

            }
        }
        getCourses();
    },[]);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCourse(prev => ({
            ...prev,
            [name]: (name === 'courseId' || name === 'courseCredit') ? Number(value) : value
        }));
    };

    const addCourse = async () =>{
        try {
            const res = await axios.post(`/courses/add`, newCourse);
            closeModal();
            setCourses(res.data)
        } catch(err){

        }
    }

    const deleteCourse = async (courseId) => {
        try {
            const res = await axios.post(`/courses/${courseId}/remove`);
            setCourses(res.data);
        } catch(err){

        }
    }

  return (
    <div className='add-new-courses'>
        <h1>Admin Page</h1>
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
              <td>{course.instructor?.id || 'N/A'}</td>
              <td>{course.instructor?.name || 'N/A'}</td>
              <td>
                <button onClick={() => deleteCourse(course.courseId)}>Delete Course</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        
    <div className='button-container'>
      <span><h2><button onClick={()=>openModal()}>Add a new course</button></h2></span>
      <span></span>
      </div >

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
                <input type="text" placeholder='Course ID' name='courseId' onChange={handleChange}/>
                <input type="text" placeholder='Course Name' name='courseName' onChange={handleChange}/>
                <input type="text" placeholder='Course Description' name='courseDescription' onChange={handleChange}/>
                <input type="text" placeholder='Course Credit' name='courseCredit' onChange={handleChange}/>
                <input type="text" placeholder='Professor Name' name='professorName' onChange={handleChange}/>
                <input type="text" placeholder='Professor Id' name='professorId' onChange={handleChange}/>
            </div>
            <div>
                <button onClick={()=> addCourse()}>Confirm</button>
                <button onClick={() => closeModal()}>Close</button>
            </div>
      </Modal>
    </div>
  )
}

export default Adminpage