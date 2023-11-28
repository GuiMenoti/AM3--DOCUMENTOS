import { styled } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const GlobalStyles = styled('main')(({ theme }: Theme) => ({
  backgroundColor: `${theme.palette.color.backgroundColor}`,
  minHeight: '100vh',
  minWidth: '98.8vw !important',
  overflowX: 'hidden',
}));
