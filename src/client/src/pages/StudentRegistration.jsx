import React, { useState } from 'react';

const StudentRegistration = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    id: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Info:', studentInfo);
  };

  return (
    <div>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={studentInfo.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={studentInfo.id}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={studentInfo.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
