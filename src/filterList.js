import React, {Component} from 'react';
import Form from './form/form';
import FilterForm from './form/filter';
import Page from './form/page';
import Body from './body/body';
import Grid from '@material-ui/core/Grid';
import './App.css';

var option="popularity.desc";
var genre="";
class FilterList extends Component{
  state={
    list: []
  }
  generateList(event){
    genre = event.target.value;
    const arr = [];
    if(genre===""&&option===""){
      this.setState({list: arr})
    }
    else{
      const url="http://api.themoviedb.org/3/discover/movie?api_key=ff7afca553045f40e54ae8f23ff54c47&language=en-US&sort_by="+option+"&with_genres="+genre+"&page=1&include_adult=false";
      fetch(url)
      .then(response => response.json()).then(data => {this.setState({
        list: data.results,
      })
    });
  }
}
xyzList(event){
  option = event.target.value;
  const arr = [];
  if(genre===""&&option===""){
    this.setState({list: arr})
  }
  else{
    const url="http://api.themoviedb.org/3/discover/movie?api_key=ff7afca553045f40e54ae8f23ff54c47&language=en-US&sort_by="+option+"&with_genres="+genre+"&page=1&include_adult=false";
    fetch(url)
    .then(response => response.json()).then(data => {this.setState({
      list: data.results,
    })
  });
}
}
  pageChange(event){
    let val = event.target.value;
    const url="http://api.themoviedb.org/3/discover/movie?api_key=ff7afca553045f40e54ae8f23ff54c47&language=en-US&sort_by="+option+"&with_genres="+genre+"&page="+val+"&include_adult=false";
    fetch(url)
    .then(response => response.json()).then(data => {this.setState({
      list: data.results,
      })
    });
  }
  render(){
    let list = (
      <div className="back">
      {this.state.list.map((list) => {
          return <Body title={list.title} image={list.poster_path} overview={list.overview} vote={list.vote_average} date={list.release_date}/>
        })}
      </div>
    );
    return(
      <div>
      <h1>&nbsp;</h1>
      <h1>FILTER MOVIE</h1>
      <Grid container className="form">
        <Grid item xs={12} sm={6}>
          <span>Genre: </span><FilterForm generateList={(event) => {this.generateList(event)}} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Page page={(event) => {this.pageChange(event)}} />
        </Grid>
      </Grid>
      <div className="movie">
      <Grid container>
        {list}
      </Grid>
      </div>
      </div>
    )
  }
}

export default FilterList;
