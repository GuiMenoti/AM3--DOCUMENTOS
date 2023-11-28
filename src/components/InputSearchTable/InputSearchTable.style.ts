import { Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import { Theme } from '@mui/material/styles';

export const StyledInputSearchTableContainer = styled(Box)(
  ({ theme }: Theme) => ({
    padding: '25px 15px',
  })
);

export const StyledSearchIcon = styled(SearchIcon)(({ theme }: Theme) => ({
  color: theme.palette.text.p,
}));

export const StyledInputControl = styled(FormControl)(({ theme }: Theme) => ({
  label: {
    color: `${theme.palette.text.p} !important`,
  },
  fieldset: {
    borderColor: `${theme.palette.text.p} !important`,
  },
  input: {
    color: theme.palette.text.h1,
  },
}));
