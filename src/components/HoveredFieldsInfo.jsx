import React from 'react';
import { instanceOf } from 'prop-types';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  resultPaper: {
    padding: theme.spacing(2),
    marginTop: 10,
  },
}));

const HoveredFieldsInfo = ({ hovered }) => {
  const classes = useStyles();

  return (
    hovered.map((elem, index) => (
      <Grid key={index} container justify="center">
        <Grid item>
          <Paper
            className={classes.resultPaper}
            id={index}
            square
          >
            You hover filed # {+elem + 1}
          </Paper>
        </Grid>
      </Grid>
    ))
  );
};

HoveredFieldsInfo.propTypes = {
  hovered: instanceOf(Array).isRequired,
};

export default HoveredFieldsInfo;
