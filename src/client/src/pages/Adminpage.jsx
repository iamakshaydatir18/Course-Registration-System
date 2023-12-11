import React, {useEffect, useState} from 'react'
import Modal from 'react-modal';
import axios from "axios";
import {useNavigate} from "react-router-dom";

Modal.setAppElement('#root');

const Adminpage = () => {
    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate()

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

    const [newCourse, setNewCourse] = useState({
        courseId:0,
        courseName:"",
        courseDescription:"",
        courseCredit:0,
        instructor: {
            name:"",
            id: 0,
        },
    });

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

    // const handleChange = (e) =>{
    //     setNewCourse((prev)=>({...prev,[e.target.courseName]: (e.target.courseName !== 'id') ? e.target.value : Number(e.target.value)}))
    //     console.log(newCourse)
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'professorName' || name === 'professorId') {
            // Determine the instructor property to update
            const instructorProperty = name === 'professorName' ? 'name' : 'id';

            // Update the nested instructor object
            setNewCourse(prev => ({
                ...prev,
                instructor: {
                    ...prev.instructor,
                    [instructorProperty]: (instructorProperty === 'id') ? Number(value) : value
                }
            }));
        } else {
            // Update other course fields
            setNewCourse(prev => ({
                ...prev,
                [name]: (name === 'courseId' || name === 'courseCredit') ? Number(value) : value
            }));
        }
    };

    const addCourse = async () =>{
        try {
            const res = await axios.post(`/courses/add`, {
                courseId:newCourse.courseId,
                courseName:newCourse.courseName,
                courseDescription:newCourse.courseDescription,
                courseCredit:newCourse.courseCredit,
                instructor:newCourse.instructor,
            });

            navigate(`/admin`);
        } catch(err){
            //setError("Error while adding the course")
        }
    }

  return (
    <div>
        <h1>Admin Page</h1>
        <div>
            {courses.map((course,index)=>(
                <div key={index}>
                    <span>{course.id}||</span>
                    <span>{course.courseName}||</span>
                    <span>{course.desc}||</span>
                    <span>{course.credit}||</span>
                    <span>{course.instructor.name}||</span>
                    <span>{course.instructor.id}||</span>
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
                <input type="text" placeholder='Course ID' name='courseId' onChange={handleChange}/>
                <input type="text" placeholder='Course Name' name='courseName' onChange={handleChange}/>
                <input type="text" placeholder='Course Description' name='courseDescription' onChange={handleChange}/>
                <input type="text" placeholder='Course Credit' name='courseCredit' onChange={handleChange}/>
                <input type="text" placeholder='Professor Name' name='professorName' onChange={handleChange}/>
                <input type="text" placeholder='Professor Id' name='professorId' onChange={handleChange}/>
            </div>
            <div>
                <button onClick={()=> addCourse()}>Confirm Entry</button>
                <button onClick={() => closeModal()}>close</button>
            </div>
      </Modal>
    </div>
  )
}

export default Adminpage