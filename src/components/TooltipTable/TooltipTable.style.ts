import { styled } from '@mui/material';
import { Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const StyledToolbarTable = styled(Toolbar)(({ theme }: Theme) => ({
  backgroundColor: `${theme.palette.color.primary}40`,
  color: theme.palette.color.primary,
  minHeight: '3.6rem !important',
  paddingLeft: '4px !important',
}));
