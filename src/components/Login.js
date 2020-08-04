import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


//applies additional styling to elements in Login 
const useStyles = makeStyles({
    root: {
      '& > *': {
        display: 'flex',
        margin: '10px',
     }, 
    },
    card: {
      padding: '40px',
    },
    div: {
      padding: '100px',
      backgroundColor: '#1652f0',
      height: '100vh',
    },
    h4: {
      color: 'white',
      fontFamily: 'helvetica',
    },
    account: {
      color: 'white',
    },
    button: {
      backgroundColor: '#134ce4',
      color: 'white',
    }
  });


//Login Page 
export default function Login() {
    const classes = useStyles();

    return (
    <div className={classes.div}>
      <Grid container direction="column" alignItems="center">
      {/* Using Box component to act as a wrapper to apply bootstrap spacing */}
        <Box pb={3}>
          <Typography variant='h4' className={classes.h4}>Login To BOLT</Typography>
        </Box>
          <Card raised="true" className={classes.card} variant="outlined">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField type="text" id="username-input" label="username" variant="outlined" required error={false} />
              <TextField type="password" id="password-input" label="password" variant="outlined" required error={false} />
              <FormControlLabel control={<Checkbox name="checkedA" />} label="keep me logged in on this computer" />
              <CardActions>
                <Box mx={'auto'}>
                  <Button className={classes.button} variant="outlined" size="large">Login</Button>
                </Box>
              </CardActions>
            </form>
          </Card>
          <Box pt={2}>
            <Typography variant='p'><Link className={classes.account} href="#">Forgot password?</Link> <Link className={classes.account} href="#">Don't have an account?</Link> <Link className={classes.account} href="#">Privacy Policy</Link></Typography>
          </Box>
      </Grid>
    </div>
    );
}
