import {memo} from 'react';
import {IconButton, InputAdornment} from '@mui/material';
import {Clear, Search as SearchIcon} from '@mui/icons-material';
import useInput from 'src/hooks/useInput';
import StyledSearch from 'src/components/common/Search/styles';

function Search(): JSX.Element {
  const {value, ref, onChange, onReset} = useInput({});

  return (
    <StyledSearch
      placeholder="Search artist, title, album"
      inputRef={ref}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: !!value && (
          <InputAdornment position="end">
            <IconButton onClick={onReset}>
              <Clear />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default memo(Search);
