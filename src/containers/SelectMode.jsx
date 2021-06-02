import React, { useEffect, useState } from 'react';
import { func } from 'prop-types';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

// constants
import gameModeUrl from '../constants/urls';

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formSelect: {
    width: 300,
  },
  formButton: {
    marginLeft: 10,
    background: theme.palette.info.main,
  },
}));

const SelectMode = ({ setSelectMode }) => {
  const classes = useStyles();

  const [value, setValue] = useState('');
  const [gameMode, setGameMode] = useState({});

  useEffect(() => {
    fetch(gameModeUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          if (data.errors) {
            throw new Error();
          }

          return setGameMode(data);
        },
        (error) => error,
      );
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectMode(value);
  };

  return (
    <>
      <FormControl className={classes.formControl} variant="outlined" direction="row">
        <InputLabel id="demo-simple-select-outlined-label">Pick mode</InputLabel>
        <Select
          className={classes.formSelect}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          label="Pick mode"
        >
          {Object
            .keys(gameMode)
            .map((key) => (
              <MenuItem key={key} value={gameMode[key]?.field}>
                {gameMode[key]?.field}
              </MenuItem>
            ))}
        </Select>

        <Button className={classes.formButton} type="button" variant="contained" color="primary" onClick={handleSubmit}>Start</Button>
      </FormControl>
    </>
  );
};

SelectMode.propTypes = {
  setSelectMode: func.isRequired,
};

export default SelectMode;
