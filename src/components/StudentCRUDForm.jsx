import React from 'react';

export default function StudentCRUDForm({ toogleModal, student, onChange, onSubmit, isEdit }) {
  return (
    // modal-overlay untuk menampilkan form
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{isEdit ? 'Edit Student' : 'Add New Student'}</h5>
          <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="modal" 
          aria-label="Close"
          onClick={() => toogleModal(isEdit)}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            {/* name */}
            <div className="mb-3">
              <label htmlFor="name" className="form label">
                Name :
              </label>
              <input type="text" name="name" value={student.name} onChange={onChange} id="name" className="form-control" required />
            </div>
            {/* class */}
            <div className="mb-3">
              <label htmlFor="class" className="form label">
                Class :
              </label>
              <input type="text" name="class" value={student.class} onChange={onChange} id="class" className="form-control" required/>
            </div>
            {/* year - min 2000 max 2024 */}
            <div className="mb-3">
              <label htmlFor="year" className="form label">
                Year :
              </label>
              <input type="text" name="year" value={student.year} onChange={onChange} id="year" min="2000" max="2024" className="form-control" inputMode="numeric" required />
              <small className="form-text text-muted">#Year must be between 2000 and 2024.</small>
            </div>
            {/* nim - auto generate unique */}
            <div className="mb-3">
              <label htmlFor="nim" className="form label">
                NIM :
              </label>
              <input type="text" name="nim" value={student.nim} onChange={onChange} id="nim" className="form-control" inputMode="numeric" required disabled />
              <small className="form-text text-muted">#Auto generate unique NIM.</small>
            </div>
            {/* guardian_name */}
            <div className="mb-3">
              <label htmlFor="guardianName" className="form label">
                Guardian Name :
              </label>
              <input type="text" name="guardianName" value={student.guardianName} onChange={onChange} id="guardianName" className="form-control" required />
            </div>
            {/* birthDate - https://www.iso.org/iso-8601-date-and-time-format.html */}
            <div className="mb-3">
              <label htmlFor="birthDate" className="form label">
                Birth Date :
              </label>
              <input type="date" name="birthDate" value={student.birthDate} onChange={onChange} id="birthDate" className="form-control" required />
              <small className="form-text text-muted">#Please use the ISO 8601 format (YYYY-MM-DD).</small>
            </div>
            {/* address */}
            <div className="mb-3">
              <label htmlFor="address" className="form label">
                Address :
              </label>
              <textarea name="address" value={student.address} onChange={onChange} id="address" rows="3" minLength="20" className="form-control" required />
            </div>
            {/* gender - male or female */}
            <div className="mb-3">
                <label htmlFor="gender" className="form label">Gender : </label>
                <select className="form-control" id="gender" name="gender" value={student.gender} onChange={onChange} required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
          </form>
        </div>
        <div className="modal-footer mt-5">
            {isEdit ? (
                <button
                    type='button'
                    className="btn btn-warning"
                    onClick={onSubmit}
                >
                    <i className='bi bi-pencil-square'></i> Update
                </button>
            ) : (
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={onSubmit}
                >
                    <i className='bi bi-save'></i> Submit
                </button>
            )}
        </div>
      </div>
    </div>
  );
}
