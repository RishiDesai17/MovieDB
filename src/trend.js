import React, {Component} from 'react';
import Body from './body/body';
//import BodyTV from './body/bodyTV';
import Navbar from './Navbar/navbar';
import Form from './form/form';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';

class Trend extends Component {
  state = {
    movies: [],
    tv: []
  }
  async componentDidMount(){
    const url="https://api.themoviedb.org/3/trending/movie/day?api_key=ff7afca553045f40e54ae8f23ff54c47";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({movies: data.results});
    const url1="https://api.themoviedb.org/3/trending/tv/day?api_key=ff7afca553045f40e54ae8f23ff54c47";
    const response1 = await fetch(url1);
    const data1 = await response1.json();
    this.setState({tv: data1.results});
  }
  render(){
    let trendingM = (
      <div>
      {this.state.movies.map((movie) => {
          return <Body title={movie.title} image={movie.poster_path} overview={movie.overview.substr(0,450)} date={movie.release_date} vote={movie.vote_average}/>
        })}
      </div>
    );
    let trendingT = (
      <div>
      {this.state.tv.map((tv) => {
          return <Body title={tv.name} image={tv.poster_path} overview={tv.overview.substr(0,450)} vote={tv.vote_average} date={tv.first_air_date}/>
        })}
      </div>
    );

    return (
      <div className="back">
      <h1>&nbsp;</h1>
      <div className="App">
      <h1 className="trending">TRENDING <i class="fa fa-line-chart" aria-hidden="true"></i></h1>
      <Grid container>
      <Grid item xs={12} sm={6}>
        <div className="movie">
        <h1 className="topic">MOVIES <i class="fa fa-video-camera" aria-hidden="true"></i></h1>
          {trendingM}
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div className="tv">
        <h1 className="topic">TV <i class="fa fa-television" aria-hidden="true"></i></h1>
          {trendingT}
        </div>
        </Grid>
        </Grid>
      </div>
      </div>
    );
  }
}

export default Trend;
