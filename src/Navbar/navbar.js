import React from 'react';
import {AppBar, Tabs, Tab, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return(
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit" className="name">
            MOVIES APP <i className="fa fa-film" aria-hidden="true"></i>
        </Typography>
        <Tabs>
          <Link to="/" className="linkStyle">
            <Tab label="TRENDING" />
          </Link>
          <Link to="/search" className="linkStyle">
            <Tab label="SEARCH" />
          </Link>
          <Link to="/filter" className="linkStyle">
            <Tab label="FILTER" />
          </Link>
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
