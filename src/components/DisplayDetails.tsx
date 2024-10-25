import React from 'react';
import './DisplayDetails.css';
import { UserContext } from '../context/UserContextProvider';

const DisplayDetails: React.FC = () => {
  const userContext = React.useContext(UserContext);

  if (!userContext) {
    return <p>No user data available</p>;
  }

  const { personalDetails } = userContext;

  return (
    <div className="details-container">
      <h2>Saved Personal and Academic Details</h2>
      {personalDetails.length > 0 ? (
        personalDetails.map((details, index) => (
          <div key={index} className="details">
            <h3>Student Personal Details {index + 1}</h3>
            <p>Name: {details.name}</p>
            <p>Surname: {details.surname}</p>
            <p>Age: {details.age}</p>
            <p>Email: {details.email}</p>
            <p>Phone: {details.phone}</p>
            <p>Address: {details.address}</p>
            <h3>Student Academic Details {index + 1}</h3>
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

export default DisplayDetails;