import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '75vw',
    padding: '24px 16px'
  },
  imgContainer: {
    width: '100%',
    textAlign: 'center'
  },
  img: {
    width: 100
  },
  contentContainer: {
    marginTop: theme.spacing(2)
  },
  relatedCourseContainer: {
    padding: 16,
    textAlign: 'center',
    color: 'white'
  }
}));

const relatedCoursesObj = [
  {
    name: 'HTML',
    url: 'https://www.wegodev.com/tutorial/case-study/html5-css-fundamental/introduction.html',
    color: '#F2672E',
  },
  {
    name: 'CSS',
    url: 'https://www.wegodev.com/tutorial/case-study/html5-css-fundamental/introduction.html',
    color: '#30AADD',
  },
  {
    name: 'JavaScript',
    url: 'https://www.wegodev.com/tutorial/case-study/javascript-basic/introduction.html',
    color: '#F2BF26',
  },
  {
    name: 'React Intro',
    url: 'https://www.wegodev.com/tutorial/case-study/introduction-to-react/introduction.html',
    color: '#00D8FF',
  }
]

const SideBar = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            src="/wegodev-logo.png"
            alt="wegodev-logo"
          />
        </div>
        <Grid
          className={classes.contentContainer}
          container
          direction="column"
          spacing={2}
        >
          <Grid item align="center">
            <Typography variant="button">React E-Commerce Frontend</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" paragraph>
              Jika mengalami kesulitan untuk mengikuti course ini.
            </Typography>
            <Typography variant="body2" paragraph>
              Course ini adalah level selanjutnya dari React Todo-List course sebelumnya. Untuk dapat mengikuti course ini dengan baik, ada baiknya untuk lebih dulu mempelajari HTML, CSS, JavaScript Fundamental. Setelah itu pelajari React Introduction Course (Todo-List) untuk mendapatkan basic React yang lebih kuat.
            </Typography>
          </Grid>
          {
            relatedCoursesObj.map(obj => {
              return (
                <Grid key={obj.name} item>
                  <a
                    href={obj.url}
                    target="_blank"
                    rel="noopener"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Paper
                      className={classes.relatedCourseContainer}
                      style={{
                        background: `linear-gradient(45deg, #833ab4 30%, ${obj.color} 90%)`,
                      }}
                    >
                      <Typography variant="button">
                        {obj.name}
                      </Typography>
                    </Paper>
                  </a>
                </Grid>
              );
            })
          }
          <Grid item align="center">
            <Typography variant="button">
              Selamat belajar, ya! :)
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  )
}

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default SideBar;