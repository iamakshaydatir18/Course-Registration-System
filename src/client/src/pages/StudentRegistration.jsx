import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const StudentRegistration = () => {
  const [id, setId] = useState(0)
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const navigate = useNavigate()
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    id: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "id") setId(value);
    if (name === "password") setPassword(value);
    if (name === "name") setName(value); // Corrected this line
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`/student/new`, {
        name: name,
        id: id,
        password: password,
      });
      navigate(`/`);
    } catch(err){

    }
  };

  return (
    <div>
      <h1>Student Registration</h1>
      <input type="text" placeholder='ID' onChange={handleInputChange} name='id' required/>
      <input type="text" placeholder='Name' onChange={handleInputChange} name='name' required/>
      <input type="password" placeholder='Password' onChange={handleInputChange} name='password' required/>
      <br />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default StudentRegistration;
