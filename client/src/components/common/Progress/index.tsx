import {memo} from 'react';
import {Slider} from '@mui/material';
import {ProgressProps} from 'src/components/common/Progress/types';

function Progress({
  value,
  step = 1,
  max,
  onChange,
}: ProgressProps): JSX.Element {
  return (
    <Slider
      value={value}
      onChange={onChange}
      step={step}
      min={0}
      max={max || 100}
    />
  );
}

export default memo(Progress);
