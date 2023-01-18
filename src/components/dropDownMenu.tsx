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

  const menuItem = () => {
    if (inputLabel === 'restaurant') {
      return dropDownMenuObjects?.map(({ restaurant }, index) => (
        <MenuItem key={index} value={restaurant}>
          {restaurant}
        </MenuItem>
      ));
    } else {
      return dropDownMenuObjects?.map(({ name }, index) => (
        <MenuItem key={index} value={name}>
          {name}
        </MenuItem>
      ));
    }
  };

  return (
    <FormControl sx={{ width: '300px' }}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select value={value} onChange={handleChange}>
        {menuItem()}
      </Select>
    </FormControl>
  );
}

export default DropDownMenu;
