import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, Button, Typography, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    maxWidth: 1000,
    margin: '20px auto',
    backgroundColor: '#f5f5f5',
  },
  form: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
  title: {
    color: '#000',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
}));

export default function CourseRegistrationForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [courseLevels, setCourseLevels] = useState([]);
  const [selectedEnglishLevel, setSelectedEnglishLevel] = useState('');
  const [selectedMathLevel, setSelectedMathLevel] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    fetch('http://localhost:8080/api/course-levels')
      .then(response => response.json())
      .then(data => setCourseLevels(data))
      .catch(error => console.error('Error fetching course levels:', error));
  }, []);

  const handleEnglishLevelChange = (e) => {
    setSelectedEnglishLevel(e.target.value);
  };

  const handleMathLevelChange = (e) => {
    setSelectedMathLevel(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enrollmentData = {
      // Add other enrollment data here
      englishClassLevel: { id: selectedEnglishLevel },
      mathClassLevel: { id: selectedMathLevel },
    };

    fetch('http://localhost:8080/enrollment/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrollmentData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          toastr.success(data.message);
        } else {
          toastr.warning(data.message);
        }
      })
      .catch(error => {
        console.error('Error registering course:', error);
        toastr.error('An error occurred: ' + error.message);
      });
  };

  const handleBack = () => {
      navigate('/welcome'); // Navigate back to the Welcome page
  };


  return (
    <Container>
      <Typography variant="h4" className={classes.title}>
        Course Registration Form
      </Typography>
      <Paper elevation={3} className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl fullWidth required>
            <InputLabel>English Class</InputLabel>
            <Select name="englishClassLevel" value={selectedEnglishLevel} onChange={handleEnglishLevelChange}>
              {courseLevels.map(level => (
                <MenuItem key={level.id} value={level.id}>
                  {level.levelName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel>Math Class</InputLabel>
            <Select name="mathClassLevel" value={selectedMathLevel} onChange={handleMathLevelChange}>
              {courseLevels.map(level => (
                <MenuItem key={level.id} value={level.id}>
                  {level.levelName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
                Register
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="secondary" fullWidth className={classes.button} onClick={handleBack}>
                Back
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}