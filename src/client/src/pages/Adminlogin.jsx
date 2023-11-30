
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Adminlogin = () => {
    const [id,setId] = useState(0)

    const handleChange = (e) =>{
        setId(e.target.value)
        console.log(id)
    }

  return (
    <div className='Adminlogin'>
        <h1>Admin Login</h1>
        <input type="text" placeholder='ID' onChange={handleChange}/>
        <input type="password" placeholder='Password' />
        <button><Link to={"/admin"}>Login</Link></button>
    </div>
  )
}

export default Adminlogin