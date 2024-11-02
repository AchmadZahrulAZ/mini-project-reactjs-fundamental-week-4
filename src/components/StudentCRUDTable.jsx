import React from 'react';

export default function StudentCRUDTable({ toogleModalForm, toogleModalDetail, students, handleEditStudent, handleDeleteStudent }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered border-dark caption-top">
        <caption className="text-center fw-bold text-dark">TABLE STUDENT CRUD</caption>
        <thead>
          <tr>
            <th scope="col" colSpan="4" className="bg-dark bg-gradient">
              <button onClick={() => toogleModalForm(false)} className="float-end btn btn-primary btn-sm">
                <i className="bi bi-plus-circle-fill"></i> Add New Student
              </button>
            </th>
          </tr>
          <tr className="text-center">
            <th scope="col" className="bg-black bg-gradient text-white">
              No
            </th>
            <th scope="col" className="bg-black bg-gradient text-white">
              NIM
            </th>
            <th scope="col" className="bg-black bg-gradient text-white">
              Name
            </th>
            <th scope="col" className="bg-black bg-gradient text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students.map((student, index) => (
            <tr key={index}>
              <th scope="row">{ index + 1 }</th>
              <td>{student.nim}</td>
              <td>{student.name}</td>
              <td>
                <button className="btn btn-primary float-center" onClick={() => toogleModalDetail(student)}>
                  <i className="bi bi-info-square-fill"></i>
                </button>
                <button className="btn btn-warning mx-3 float-center" onClick={() => handleEditStudent(student, index)}>
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button className="btn btn-danger float-center" onClick={() => handleDeleteStudent(index)}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}        
          </tbody>
      </table>
    </div>
  );
}
