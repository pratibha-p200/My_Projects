import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, TextField, Button, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, Select, MenuItem, InputLabel, FormControl, Alert,Grid,CircularProgress } from '@mui/material';
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
  leftAlign: {
      textAlign: 'left',
  },
}));

export default function Welcome() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    postalCode: '',
    places: '',
    gender: '',
    englishClassId: '',
    mathClassId: '',
    comments: '',
  });
  const [courseLevels, setCourseLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

    useEffect(() => {
      const username = 'user'; // Replace with actual username
      const password = 'password'; // Replace with actual password
      const headers = new Headers();
      headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

      fetch('http://localhost:8080/course_level', { headers })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            setCourseLevels(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching course levels:', error);
            setLoading(false);
            setMessage('Failed to load course levels.');
          });
      }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const username = 'user'; // Replace with actual username
      const password = 'password'; // Replace with actual password
      const headers = new Headers();
      headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
      headers.set('Content-Type', 'application/x-www-form-urlencoded');

      fetch('http://localhost:8080/enrollment/register', {
      method: 'POST',
      headers: headers,
          body: new URLSearchParams(formData),
    })
      .then((response) => {
            if (!response.ok) {
              return response.text().then((text) => {
                throw new Error(text);
              });
            }
            return response.json();
          })
          .then((response) => {
            if (response.status === 'success') {
              toastr.info(response.message);
            } else if (response.status === 'duplicate') {
              toastr.warning(response.message);
            } else {
              toastr.error(response.message);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            toastr.error('An error occurred: ' + error.message);
          });
  };

  const handleNext = () => {
      navigate('/course-registration', {
            state: {
              englishClassId: formData.englishClassId,
              mathClassId: formData.mathClassId,
            },
      });
  };

  return (
    <Container>
      <Typography variant="h4" className={classes.title}>
        Free Student Enrollment Form
      </Typography>
      <Paper elevation={3} className={classes.paper}>
       {loading ? (
                <Typography variant="h6" align="center">Loading...</Typography>
              ) : (
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth required />
            </Grid>
            <Grid item xs={6}>
            <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth required />
          </Grid>
          </Grid>
          <Grid container spacing={1}>
          <Grid item xs={12}>
          <TextField label="Address Line 1" name="address1" value={formData.address1} onChange={handleChange} fullWidth required />
          </Grid>
          </Grid>
          <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField label="Address Line 2" name="address2" value={formData.address2} onChange={handleChange} fullWidth />
              </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="City" name="city" value={formData.city} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Region" name="region" value={formData.region} onChange={handleChange} fullWidth required />
          </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField label="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleChange} fullWidth required />
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth required>
              <InputLabel>Places</InputLabel>
              <Select name="places" value={formData.places} onChange={handleChange}>
                <MenuItem value=""><em>Select a place</em></MenuItem>
                <MenuItem value="Place1">Place1</MenuItem>
                <MenuItem value="Place2">Place2</MenuItem>
                <MenuItem value="Place3">Place3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          </Grid>
           <Grid container spacing={1} className={classes.leftAlign}>
            <Grid item xs={12}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup name="gender" value={formData.gender} onChange={handleChange} row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          </Grid>
          </Grid>
          <Grid container spacing={1}>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>English Class</InputLabel>
                  <Select name="englishClassId" value={formData.englishClassId} onChange={handleChange}>
                    <MenuItem value=""><em>Select an option</em></MenuItem>
                    {courseLevels.map((level) => (
                      <MenuItem key={level.id} value={level.id}>
                        {level.level_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
          </Grid>
          <Grid container spacing={1}>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Math Class</InputLabel>
                  <Select name="mathClassId" value={formData.mathClassId} onChange={handleChange}>
                    <MenuItem value=""><em>Select an option</em></MenuItem>
                    {courseLevels.map((level) => (
                      <MenuItem key={level.id} value={level.id}>
                        {level.level_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
                <TextField label="Comments" name="comments" value={formData.comments} onChange={handleChange} fullWidth multiline rows={3} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
                Submit
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="secondary" fullWidth className={classes.button} onClick={() => window.location.href = '/'}>
                Back
              </Button>
            </Grid>
            <Grid item xs={4}>
             <Button variant="contained" color="secondary" fullWidth className={classes.button} onClick={handleNext}>
              Next
             </Button>
            </Grid>
          </Grid>
        </form>
         )}
        {message && <Alert severity="error">{message}</Alert>}
      </Paper>
    </Container>
  );
}
