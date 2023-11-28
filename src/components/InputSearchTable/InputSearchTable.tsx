import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { KeyboardEvent, useRef } from 'react';
import { useTableControl } from '../../store/useTableControl';
import {
  StyledInputControl,
  StyledInputSearchTableContainer,
  StyledSearchIcon,
} from './InputSearchTable.style';

export function InputSearchTable() {
  const { controls, setControls, resetState } = useTableControl();
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const button = searchButtonRef?.current;
      if (button) {
        button.click();
      }
    }
  };

  const handleSearchClick = () => {
    if (searchButtonRef?.current) {
      resetState();
      setControls({
        ...controls,
        search: searchButtonRef?.current?.value,
      });
    }
  };

  return (
    <StyledInputSearchTableContainer>
      <StyledInputControl fullWidth onKeyPress={handleKeyPress}>
        <InputLabel htmlFor="outlined-adornment-amount">Pesquisar</InputLabel>
        <OutlinedInput
          onChange={(e) => {
            if (searchButtonRef.current !== null) {
              searchButtonRef.current.value = e.target.value;
            }
          }}
          placeholder="Pesquisar..."
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <IconButton ref={searchButtonRef} onClick={handleSearchClick}>
                <StyledSearchIcon fontSize={'small'} />
              </IconButton>
            </InputAdornment>
          }
          label="Pesquisar"
        />
      </StyledInputControl>
    </StyledInputSearchTableContainer>
  );
}
