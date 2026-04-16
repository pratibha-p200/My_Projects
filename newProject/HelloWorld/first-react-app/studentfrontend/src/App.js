import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar';
import Student from  './components/Student';
import Register from './components/Register';
import Welcome from './components/Welcome';
import CourseRegistrationForm from './components/CourseRegistrationForm';

function App() {
  return (
    <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/register" element={<Register />} />
           <Route path="/welcome" element={<Welcome />} />
           <Route path="/course-registration" element={<CourseRegistrationForm />} />
          {/* Add other routes as needed */}
        </Routes>
    </Router>

  );
}

export default App;
