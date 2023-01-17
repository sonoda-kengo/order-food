import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { IDishesaObject, typeMeal } from 'App';
import React from 'react';

interface IDropDownMenu {
  inputLabel: string;
  value: typeMeal | string | undefined;
  setValue: (value: any) => void;
  dropDownMenuObjects?: IDishesaObject[];
}

function DropDownMenu({
  inputLabel,
  value,
  setValue,
  dropDownMenuObjects,
}: IDropDownMenu) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: '300px' }}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select value={value} onChange={handleChange}>
        {dropDownMenuObjects?.map(({ name }, index) => (
          <MenuItem key={index} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DropDownMenu;
