import React from 'react';
import './studentform.css';
import { UserContext } from '../context/UserContextProvider';

const Studentform: React.FC = () => {
  const userContext = React.useContext(UserContext);
  const personalDetails = userContext?.personalDetails;

  return (
    <div className="studentform-container">
      <h2>Student Form</h2>
      {personalDetails && personalDetails.length > 0 ? (
        personalDetails.map((details, index) => (
          <div key={index}>
            <p>Name: {details.name}</p>
            <p>Surname: {details.surname}</p>
            <p>Age: {details.age}</p>
            <p>Email: {details.email}</p>
            <p>Phone: {details.phone}</p>
            <p>Address: {details.address}</p>
            <p>School: {details.school}</p>
            <p>School Location: {details.schoolLocation}</p>
            <p>College: {details.college}</p>
            <p>College Location: {details.collegeLocation}</p>
            <p>Degree: {details.degree}</p>
            <p>Degree Location: {details.degreeLocation}</p>
          </div>
        ))
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Studentform;