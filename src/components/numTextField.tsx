import { Box, TextField } from '@mui/material';
import React from 'react';

interface INumTextField {
  numValue: number | undefined;
  setNumValue: (value: number) => void;
}

function NumTextField({ numValue, setNumValue }: INumTextField) {
  return (
    <Box component="form">
      <TextField
        type="number"
        variant="outlined"
        onChange={(e) => setNumValue(Number(e.target.value))}
        value={numValue}
      />
    </Box>
  );
}

export default NumTextField;
