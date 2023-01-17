import { Box, TextField } from '@mui/material';
import React from 'react';

function Stepper() {
  const [num, setNum] = React.useState(0);

  return (
    <Box component="form">
      <TextField
        type="number"
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setNum(Number(e.target.value))}
        value={num}
      />
    </Box>
  );
}

export default Stepper;
