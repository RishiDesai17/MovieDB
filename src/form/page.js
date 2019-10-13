import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import './form.css';

const Page = (props) => {
  const [value, setValue] = React.useState('1');
  const handleChange = event => {
    setValue(event.target.value);
  };
  return(
  <FormControl component="fieldset">
  <div className="radio">
  <FormLabel component="legend"><p className="radioCol label">Page No.</p></FormLabel>
  <RadioGroup aria-label="position" name="position" value={value} onChange={props.page} onClick={handleChange} row>
  <FormControlLabel className="radioCol"
    value="1"
    control={<Radio color="primary" />}
    label="1"
    labelPlacement="start"
  />
    <FormControlLabel className="radioCol"
      value="2"
      control={<Radio color="primary" />}
      label="2"
      labelPlacement="start"
    />
    <FormControlLabel className="radioCol"
      value="3"
      control={<Radio color="primary" />}
      label="3"
      labelPlacement="start"
    />
  </RadioGroup>
  </div>
</FormControl>
)
}

export default Page;
