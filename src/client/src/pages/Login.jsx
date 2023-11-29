import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Courses from './Courses'
const Login = () => {

    const [id,setId] = useState(0)

    const handleChange = (e) =>{
        setId(e.target.value)
        console.log(id)
    }

  return (
    <div className='login'>
        <h1>Student Login</h1>
        <input type="text" placeholder='ID' onChange={handleChange}/>
        <input type="password" placeholder='Password' />
        <button><Link to={"/courses/"+id}>Login</Link></button>
        <p><Link to="/adminlogin">Are you an admin?</Link></p>
    </div>
  )
}

export default Login