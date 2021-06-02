import React, { useEffect, useState } from 'react';
import { number } from 'prop-types';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// components
import HoveredFieldsInfo from '../components/HoveredFieldsInfo';

// helpers
import createGameFieldFunc from '../helpers/createGameFieldFunc';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  defaultPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    background: theme.palette.error.main,
  },
  hoveredPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    background: theme.palette.info.main,
  },
}));

const GameField = ({ selectMode }) => {
  const classes = useStyles();

  const gameField = createGameFieldFunc(selectMode);

  const [hovered, setHovered] = useState([]);

  const handleHover = (event) => {
    const { target } = event;

    setHovered((prevState) => [...prevState, target.id]);

    target.classList.toggle(classes.hoveredPaper);

    // to set length to hovered array to show only 5 cards
    if (hovered.length >= 5) {
      hovered.shift();
    }
  };

  useEffect(() => {
    setHovered([]);
  }, [selectMode]);

  return (
    <Grid container justify="center" alignContent="center">
      <Grid container justify="center" alignContent="center" item xs={8}>
        {gameField.map((elem, index) => (
          <Grid key={index} item xs={2}>
            <Paper
              id={index}
              className={classes.defaultPaper}
              onMouseEnter={handleHover}
              variant="outlined"
              square
              selected
            />
          </Grid>
        ))}
        {hovered.length ? <HoveredFieldsInfo hovered={hovered} /> : null}
      </Grid>
    </Grid>
  );
};

GameField.propTypes = {
  selectMode: number.isRequired,
};

export default GameField;
