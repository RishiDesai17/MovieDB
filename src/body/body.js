import React from 'react';
import './body.css'
import { makeStyles } from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.common.black,
    /*backgroundImage: `url(${"https://cnet3.cbsistatic.com/img/Z9sw9A3lDMDh0W3KyAc7rScxOiA=/2019/03/26/13d0a566-7355-4381-be24-dee281227504/spider-man-far-from-home-promo-image-1.jpg"})`,*/
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: 'white',
  },
})
)
const Body = (props) =>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return(
    <div>
      <Grid item>
      <div className="main" onClick={handleOpen}>
      <Box className="card">
      <img
        className="cover"
        src={"https://image.tmdb.org/t/p/w342"+props.image} />
        <div className="details">
          <div className="content">
            <h2 component="h5" variant="h5" className="title">
              {props.title}
            </h2>
            <p variant="subtitle1" color="white" className="overview">
              {props.overview}
            </p>
          </div>
        </div>
      </Box>
      </div>
      </Grid>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Box className="modalDiv">
          <img
            className=""
            src={"https://image.tmdb.org/t/p/w342"+props.image} />
            <div className="details">
              <div className="modalContent">
                <h2 className="modalTitle">
                  {props.title}
                </h2>
                <p className="overview">
                  {props.overview}
                </p>
                <h3>
                  <span className="rating">Rating:</span> {props.vote}<span className="span">/10</span> <span className="star">⭐</span>
                </h3>
                <h3>
                  <span className="date">Release Date:</span> {props.date}
                </h3>
              </div>
            </div>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Body;
