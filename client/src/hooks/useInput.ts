import {ChangeEvent, useCallback, useRef, useState} from 'react';
import {UseInputProps, UseInputR} from 'src/types';

function useInput({initialValue = ''}: UseInputProps): UseInputR {
  const ref = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    setValue('');
    ref.current?.focus();
  }, []);

  return {value, onChange, onReset, ref};
}

export default useInput;
