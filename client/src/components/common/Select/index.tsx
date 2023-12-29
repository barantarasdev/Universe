import {memo} from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from '@mui/material';
import {SelectProps} from 'src/components/common/Select/types';

function Select({value, label, items, onChange}: SelectProps): JSX.Element {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>

      <MUISelect label={label} value={value} onChange={onChange}>
        {items.map(({value: itemValue, name}) => (
          <MenuItem key={itemValue} value={itemValue}>
            {name}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}

export default memo(Select);
