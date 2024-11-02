import React from 'react';

export default function StudentCRUDDetail({ toogleModal, student }) {
  return (
    // modal-overlay untuk menampilkan detail student
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Student Detail</h5>
          <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="modal" 
          aria-label="Close"
          onClick={toogleModal}
          ></button>
        </div>
        <div className="modal-body">
            <p>
                <strong>Name : </strong> {student.name}
            </p>
            <p>
                <strong>Class : </strong> {student.class}
            </p>
            <p>
                <strong>Year : </strong> {student.year}
            </p>
            <p>
                <strong>NIM : </strong> {student.nim}
            </p>
            <p>
                <strong>Guardian : </strong> {student.guardianName}
            </p>
            <p>
                <strong>BirthDate : </strong> {student.birthDate}
            </p>
            <p>
                <strong>Address : </strong> {student.address}
            </p>
            <p>
                <strong>Gender : </strong> {student.gender}
            </p>
        </div>
      </div>
    </div>
  );
}
