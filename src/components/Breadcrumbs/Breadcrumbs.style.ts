import Typography from '@mui/material/Typography';
import { Breadcrumbs as MuiBreadCrumbs, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { Theme } from '@mui/material/styles';

export const StyledBreadcrumbs = styled(MuiBreadCrumbs)(({ theme }: Theme) => ({
  color: `${theme.palette.text.span} !important`,
}));

export const StyledCurrentRoute = styled(Typography)(({ theme }: Theme) => ({
  color: theme.palette.text.span,
}));

export const StyledPreviousRoute = styled(Link)(({ theme }: Theme) => ({
  textDecoration: 'none',
  color: theme.palette.text.subtitle,
  '&:hover': {
    textDecoration: 'underline',
  },
}));
