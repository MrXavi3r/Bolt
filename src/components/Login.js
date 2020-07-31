import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Login() {
    const classes = useStyles();

    return (
      <div>
        <Card raised="true" className={classes.root} variant="outlined">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField type="text" id="username-input" label="username" variant="outlined" required />
            <TextField type="password" id="password-input" label="password" variant="outlined" required />
            <FormControlLabel control={<Checkbox name="checkedC" />} color="primary" label="keep me signed in on this computer" />
            <CardActions>
              <Button variant="primary">Login</Button>
            </CardActions>
          </form>
        </Card>
      </div>
    );
}
