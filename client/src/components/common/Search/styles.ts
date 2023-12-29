'use client';

import {TextField, styled} from '@mui/material';

const StyledSearch = styled(TextField)({
  width: '100%',

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 10,
    },
  },
});

export default StyledSearch;
