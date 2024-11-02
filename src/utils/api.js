import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Fetch all students (LIST)
export const fetchStudents = async () => {
    const res = await axios.get(`${API_URL}/students`, {
        headers: {
            "api-key": "RJS1-202401",
        },
    });
    return res.data;
};

// Add a new student (POST)
export const addStudent = async (data) => {
    const res = await axios.post(`${API_URL}/students`, data, {
        headers: {
            'Content-Type': 'application/json',
            "api-key": "RJS1-202401",
        },
    });
    return res.data;
};

// Update student by ID (PUT)
export const updateStudent = async (id, data) => {
    const res = await axios.put(`${API_URL}/students/${id}`, data, {
        headers: {
            'Content-Type': 'application/json',
            "api-key": "RJS1-202401",
        },
    });
    return res.data;
};

// Delete student by ID (DELETE)
export const deleteStudent = async (id) => {
    const res = await axios.delete(`${API_URL}/students/${id}`, {
        headers: {
            "api-key": "RJS1-202401",
        },
    });
    return res.data;
};

// Fetch student details by ID (DETAIL)
export const fetchStudentDetail = async (id) => {
    const res = await axios.get(`${API_URL}/students/${id}`, {
        headers: {
            "api-key": "RJS1-202401",
        },
    });
    return res.data;
};
