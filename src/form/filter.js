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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const FilterForm = (props) => {
  const classes = useStyles();
  return(
    <div>
    <FormControl className={classes.formControl}>
    <Select onChange={props.generateList}
    inputProps={{
          name: 'genre',
          id: 'genre-label-placeholder',
        }}
      >
    <InputLabel shrink htmlFor="genre-label-placeholder">
      Genre
    </InputLabel>
      <MenuItem value={28}>Action</MenuItem>
      <MenuItem value={12}>Adventure</MenuItem>
      <MenuItem value={16}>Animation</MenuItem>
      <MenuItem value={35}>Comedy</MenuItem>
      <MenuItem value={80}>Crime</MenuItem>
      <MenuItem value={99}>Documentary</MenuItem>
      <MenuItem value={18}>Drama</MenuItem>
      <MenuItem value={10751}>Family</MenuItem>
      <MenuItem value={14}>Fantasy</MenuItem>
      <MenuItem value={36}>History</MenuItem>
      <MenuItem value={27}>Horror</MenuItem>
      <MenuItem value={10402}>Music</MenuItem>
      <MenuItem value={9648}>Mystery</MenuItem>
      <MenuItem value={10749}>Romance</MenuItem>
      <MenuItem value={878}>Science Fiction</MenuItem>
      <MenuItem value={10770}>TV Movie</MenuItem>
      <MenuItem value={53}>Thriller</MenuItem>
      <MenuItem value={10752}>War</MenuItem>
      <MenuItem value={37}>Western</MenuItem>
    </Select>

    </FormControl>
    </div>
  )
}

export default FilterForm;
