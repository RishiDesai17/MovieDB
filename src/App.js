import React, {Component} from 'react';
import Body from './body/body';
import Navbar from './Navbar/navbar';
import Form from './form/form';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import List from './list';
import FilterList from './filterList';
import Trend from './trend';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Trend} />
          <Route path="/search" component={List} />
          <Route path="/filter" component={FilterList} />
        </Switch>
      </div>
    </BrowserRouter>
  )}
}

export default App;
