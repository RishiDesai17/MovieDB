import React, {Component} from 'react';
import Form from './form/form';
import FilterForm from './form/filter';
import Page from './form/page';
import Body from './body/body';
import Grid from '@material-ui/core/Grid';
import './App.css';

let nameVal;
class List extends Component{
  state = {
    list: [],
  }
  nameList(event){
    let val = event.target.value;
    const arr=[];
    if(val===""){
      this.setState({list: arr})
    }
    else{
        const url="https://api.themoviedb.org/3/search/movie?api_key=ff7afca553045f40e54ae8f23ff54c47&language=en-US&query="+val+"&page=1&include_adult=false";
        fetch(url)
        .then(response => response.json()).then(data => {this.setState({
          list: data.results,
        })
      });
    }
  }
  namePageChange(event){
    let val = event.target.value;
    const url="http://api.themoviedb.org/3/discover/movie?api_key=ff7afca553045f40e54ae8f23ff54c47&language=en-US&query="+nameVal+"&page="+val+"&include_adult=false"
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
      <h1>SEARCH MOVIE</h1>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Form nameList={(event) => {this.nameList(event)}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Page page={(event) => {this.namePageChange(event)}} />
        </Grid>
      </Grid>
      <div className="movie">
      <Grid container>
        {list}
      </Grid>
      </div>
      </div>
    );
  }
}

export default List;
