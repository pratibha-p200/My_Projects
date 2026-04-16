import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Container, Paper, Button, Typography, Alert, Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(4),
    width: 400,
    margin: '20px auto',

  },
  button: {
    marginTop: theme.spacing(2),
  },
  tooltipIcon: {
    marginLeft: theme.spacing(1),
    color: 'red',
  },
}));

export default function Student() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = { username, password }; // Correctly create an object
    console.log(student);


    // Validate input
    if (username.trim() === '') {
      setMessage('Please enter the UserName');
      return;
    }

    if (password.trim() === '') {
      setMessage('Please enter Password');
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      setMessage('Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one number.');
      return;
    }

    // Simulate AJAX request
    fetch('http://localhost:8080/student/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    })
    .then((response) => response.json().then(data => ({ status: response.status, body: data })))
              .then((response) => {
                    if (response.status === 200) {
                      setMessage('Login successful! Redirecting...');
                      setTimeout(() => {
                        navigate('/welcome');
                      }, 2000);
                    } else if (response.status === 404) {
                      setMessage('User not found! Redirecting to registration page...');
                      setTimeout(() => {
                        navigate('/register');
                      }, 2000);
                    } else if (response.status === 401) {
                      setMessage(response.body.message);
                    } else {
                      setMessage('Login failed. Please check your username and password.');
                    }
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                    setMessage('An error occurred. Please try again.');
                  });
  };

  return (
    <Container>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" component="h1" gutterBottom>
            User Login
        </Typography>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField id="username" label="User Name" variant="outlined" fullWidth value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              endAdornment: (
                <Tooltip title="Please enter your username">
                  <i className={`fas fa-info-circle ${classes.tooltipIcon}`} />
                </Tooltip>
              ),
            }}
          />
          <TextField id="password" label="Password" variant="outlined" fullWidth type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <Tooltip title="Please enter your password">
                  <i className={`fas fa-info-circle ${classes.tooltipIcon}`} />
                </Tooltip>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button} onClick={handleSubmit}>
            Login
          </Button>
        </form>
        {message && <Alert severity="error" className={classes.button}>{message}</Alert>}
        <Typography variant="body2" align="center" className={classes.button}>
          Not registered? <Link to="/register">Register</Link>
        </Typography>
      </Paper>
    </Container>
  );
}
