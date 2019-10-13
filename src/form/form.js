import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Page from './page';
import './form.css';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
   minWidth: 120,
 },
 textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
})
);
const Form = (props) => {
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });
  const classes = useStyles();

  return(
    <div>
    <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        name="genre"
        onChange={props.nameList}
        margin="normal"
        variant="outlined"
      />

      </div>
  )
}

export default Form;
