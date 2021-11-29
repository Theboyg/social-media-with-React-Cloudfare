import './login.css';
/*
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Link, } from '@material-ui/core';
import React from "react";
import {useHistory} from "react-router-dom";


// This is a login form from Aswin vp from Medium 2020. I just used to insert a class component to my code. He used a class component which was used with earlier version of React. I can Understand how it works but it seems a bit complicated for a minute

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = { username: '', password: '', authflag: 1 }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
    
   handleChange(event) {
    this.setState({
      username: event.state.username,
      password: event.state.password,
    })
  }
   handleSubmit(event) {

         const history = useHistory();
        event.preventDefault();

     if (this.state.username === 'gaoussou.diallo@sjsu.edu' && this.state.password === 'secret') {
      this.props.history.push('/home')
     } else {
      alert('Incorrect Credntials!')
     }
  }
    render() {
      
    return (
      <div>
        <AppBar position="static" alignitems="center" color="primary">
          <Toolbar>
            <Grid container justify="center" wrap="wrap">
              <Grid item>
                <Typography variant="h6">{ `This is just a test`}</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                </Grid>
                <Grid item>
                  <form onSubmit={this.handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="username"
                          variant="outlined"
                          value={this.state.username}
                          onChange={event =>
                            this.setState({
                              [event.target.name]: event.target.value,
                            })
                          }
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={this.state.password}
                          onChange={event =>
                            this.setState({
                              [event.target.name]: event.target.value,
                            })
                          }
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default Login
*/

export default function Login() {
  return (
    <div className="login">

      <div className="loginWrapper">

        <div className="loginLeft">
          <h4 className="loginLogo"> G's Social </h4>
          <span className="loginDesc"> To make friend everywhere </span>
        </div>
        
        <div className="loginRight">

          <div className="loginBox">

            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton"> Log In </button>
            <span className="loginForgot"> Forgot password ? </span>
            <button className="loginRegistration"> Create a new Account  </button>
          
          </div>

        </div>

        
      </div>
      
    </div>
  )
}

