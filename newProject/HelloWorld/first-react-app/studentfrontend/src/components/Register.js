import React, { useState, useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Container, Paper, Button, Typography, Alert } from '@mui/material';
import { useNavigate  } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    maxWidth: 500,
    margin: '50px auto',

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
    color: 'white',
    textAlign: 'center',
  },
}));

export default function Register() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const navigate = useNavigate();

//  useEffect(() => {
//      fetch('http://localhost:8080/csrf', {
//        credentials: 'include'
//      })
//        .then(response => response.json())
//        .then(data => {
//          setCsrfToken(data.token);
//        })
//        .catch(error => console.error('Error fetching CSRF token:', error));
//    }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

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
    console.log('Submitting form with:', { username, password });

    // Simulate AJAX request
    fetch('http://localhost:8080/student/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
       body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json()) // Expecting JSON response
            .then((data) => {
              if (data.status === 'success') {
                setMessage('User registered successfully!');
                navigate('/');
              } else {
                setMessage(data.message || 'An error occurred.');
              }
            })
            .catch(() => {
              setMessage('An error occurred. Please try again.');
            });
  };

  const handleBackToLogin = () => {
    navigate('/'); // Assuming you have a login route
  };

  return (
    <Container>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create User Account
        </Typography>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField id="username" label="User Name" variant="outlined" fullWidth value={username}
                onChange={(e) => setUsername(e.target.value)}/>
              <TextField id="password" label="Password" variant="outlined" fullWidth type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
              <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
                Register
              </Button>
              <Button variant="contained" color="secondary" fullWidth className={classes.button} onClick={handleBackToLogin}>
                Back to Login
              </Button>
        </form>
        {message && <Alert severity={message.includes('success') ? 'success' : 'error'}>{message}</Alert>}
      </Paper>
    </Container>
  );
}
