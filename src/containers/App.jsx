import React, { useState } from 'react';

// @material-ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// containers
import SelectMode from './SelectMode';
import GameField from './GameField';

const App = () => {
  const [selectMode, setSelectMode] = useState();

  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <SelectMode setSelectMode={setSelectMode} />
      </Grid>
      {selectMode > 1 ? <GameField selectMode={selectMode} /> : null}
    </Container>
  );
};

export default App;
