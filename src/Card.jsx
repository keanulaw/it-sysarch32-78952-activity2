// Card.jsx
import React from 'react';
import List from './List';

function Card() {
  const students = List();

  return (
    <>
      {students.map((student) => (
        <div className="card" key={student.id}>
          <img className="img" src={student.profile} alt={student.name} />
          <div className="card-info">
            <p className="card-title">{student.name}</p>
            <p className="card-text">{student.email}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
