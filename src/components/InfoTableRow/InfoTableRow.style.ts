import { styled } from '@mui/material';
import Menu from '@mui/material/Menu';
import { Theme } from '@mui/material/styles';

export const StyledMenuTableRow = styled(Menu)(({ theme }: Theme) => ({
  '& .MuiMenu-paper': {
    backgroundColor: theme.palette.color.containerBackground,
  },
  '& .MuiMenu-list': {
    padding: '10px',
  },
  '& .MuiMenuItem-root': {
    borderRadius: '4px',
    fontSize: '0.9rem',
    svg: {
      fontSize: '1.3rem',
    },
  },
}));
