import { styled } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledLinkRouter = styled(Link)(({ theme }: Theme) => ({
  textDecoration: 'none',
  color: theme.text.button,
  '&:hover': {
    textDecoration: 'underline',
  },
}));
