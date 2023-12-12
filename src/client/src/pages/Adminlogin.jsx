import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import './Adminlogin.scss'

const Adminlogin = () => {
    const [id, setId] = useState(0)
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const handleChange = (e) =>{
        if(e.target.name === "id")
            setId(e.target.value)
        if(e.target.name === "password")
            setPassword(e.target.value)
        console.log(id,password)
    }

    const handleLogin = async () =>{
        try {
            const res = await axios.post(`/admin/login`, {
                id:id,
                password:password
            });

            navigate(`/admin`);
        } catch(err){
            setError("Incorrect login or password entered")
        }
    }

  return (
    <div className='Adminlogin'>
        <h1>Admin Login</h1>
        <h2>{error}</h2>
        <input type="text" placeholder='ID' onChange={handleChange} name='id' required/>
        <input type="password" placeholder='Password' onChange={handleChange} name='password' required/>
        <button onClick={()=> handleLogin()}>Login</button>
        <p><Link to="/">Are you a student?</Link></p>
    </div>
  )
}

export default Adminlogin