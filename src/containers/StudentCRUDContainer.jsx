import React, { Component } from 'react';
import StudentCRUDTable from '../components/StudentCRUDTable';
import StudentCRUDForm from '../components/StudentCRUDForm';
import StudentCRUDDetail from '../components/StudentCRUDDetail';
import { fetchStudents, addStudent, updateStudent, deleteStudent, fetchStudentDetail } from '../utils/api';

export default class StudentCRUDContainer extends Component {
// Inisiasi state
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    editedStudent: null,
    students: [
        {
          name: 'Achmad Zahrul Ali Zadan',
          class: 'XII MIPA 1',
          year: '2024',
          nim: '00002401',
          guardianName: 'Siti',
          birthDate: '',
          address: 'Jl. Jenderal',
          gender: '',
        },
      ],
      currentStudent: {
        name: '',
        class: '',
        year: '',
        nim: '',
        guardianName: '',
        birthDate: '',
        address: '',
        gender: '',
      },
  };

  // Fungsi untuk generate NIM unik
  generateUniqueNIM = (year) => {
    const { students } = this.state;
    let baseNIM = `0000${year}`;
    let uniqueNIM;
    let counter = 1;

    do {
      uniqueNIM = `${baseNIM}${String(counter).padStart(3, '0')}`;
      counter++;
    } while (students.some(student => student.nim === uniqueNIM));

    return uniqueNIM;
  };  

  // Menutup/membuka modalForm
  toogleModalForm = (isEdit = false) => {
    this.setState({ isEdit: isEdit, modalForm: !this.state.modalForm });
  };

  // Menutup/membuka modalDetail
  toogleModalDetail = () => {
    this.setState({ modalDetail: !this.state.modalDetail });
  }

  // Memulai mode edit: currentStudent diisi dengan data mahasiswa yang ingin diedit
  handleEditStudent = (student, index) => {
    this.setState({ modalForm : !this.state.modalForm, isEdit: true, currentStudent: student, editedStudent: index });
  }

  // Menghapus mahasiswa dari daftar students berdasarkan indeks yang diberikan.
  handleDeleteStudent = (index) => {
    const data = this.state.students;
    const newStudents = data.slice(0, index).concat(data.slice(index + 1));
    this.setState(() => ({
      students: newStudents,
    }));
  };  

  // Menampilkan detail mahasiswa di modalDetail dengan mengatur currentStudent ke mahasiswa yang dipilih.
  handleInfoStudent = (student) => {
    this.setState({ currentStudent: student });
    this.toogleModalDetail();
  };  

  // Mengelola perubahan input dalam form dengan memperbarui currentStudent
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevstate) => ({
        currentStudent: {
            ...prevstate.currentStudent,
            [name]: value,
        },
    }));
    // console.log(this.state.currentStudent);
  };

  // Menambahkan atau memperbarui mahasiswa di daftar students
  handleAddOrUpdateStudent = () => {
    const { currentStudent, isEdit } = this.state;

    // Validasi untuk memastikan year berada dalam rentang 2000 hingga 2024
    const year = parseInt(currentStudent.year, 10);
    if (year < 2000 || year > 2024) {
        alert("Year must be between 2000 and 2024.");
        return; // Keluarkan dari fungsi jika tidak valid
    }

    // Validasi untuk memastikan address memiliki minimal 20 karakter
    if (currentStudent.address.length < 20) {
        alert("Address must be at least 20 characters long.");
        return; // Keluarkan dari fungsi jika tidak valid
    }

    if (isEdit) {
        const index = this.state.editedStudent;
        const updateStudents = [...this.state.students];
        console.log(index, updateStudents);
        updateStudents[index] = currentStudent;
        this.setState({ students: updateStudents });        
    } else {
        // Set NIM yang dihasilkan ke student baru jika belum ada NIM
        if (!currentStudent.nim) {
            currentStudent.nim = this.generateUniqueNIM(currentStudent.year);
        }        
        this.setState((prevState) => ({
            students: [...prevState.students, currentStudent],
        }));
    }
    this.setState({ currentStudent: {
        name: '',
        class: '',
        year: '',
        nim: '',
        guardianName: '',
        birthDate: '',
        address: '',
        gender: '',
    }});
    this.toogleModalForm(this.state.isEdit);
  };

  render() {
    return (
      <>
        <StudentCRUDTable 
        students={this.state.students}
        handleEditStudent={this.handleEditStudent}
        toogleModalForm={this.toogleModalForm}
        toogleModalDetail={this.handleInfoStudent}
        handleDeleteStudent={this.handleDeleteStudent}
        />
        {this.state.modalForm && (
            <StudentCRUDForm 
            isEdit={this.state.isEdit}
            onSubmit={this.handleAddOrUpdateStudent}
            onChange={this.handleInputChange}
            toogleModal={this.toogleModalForm}
            student={this.state.currentStudent}
            />
        )}
        {this.state.modalDetail && (
            <StudentCRUDDetail 
            toogleModal={this.toogleModalDetail} 
            student={this.state.currentStudent}
            />
        )}
      </>
    );
  }
}
