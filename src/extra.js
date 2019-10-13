const [values, setValues] = React.useState({
  age: '',
  name: 'popularity.desc',
});
const handleChange = event => {
  setValues(oldValues => ({
    ...oldValues,
    [event.target.name]: event.target.value,
  }));
};
<Select onChange={props.generateList} onClick={handleChange}
inputProps={{
      name: 'SortBy',
      id: 'SortBy-label-placeholder',
    }}
  >
<InputLabel shrink htmlFor="SortBy-label-placeholder">
  Sort By
</InputLabel>
  <MenuItem value="popularity.desc">Popularity Descending</MenuItem>
  <MenuItem value={12}>Popularity Ascending</MenuItem>
  <MenuItem value={16}>Rating Descending</MenuItem>
  <MenuItem value={35}>Rating Ascending</MenuItem>
  <MenuItem value={80}>Release Date</MenuItem>
</Select>


optionList={(event) => {this.xyzList(event)}}
