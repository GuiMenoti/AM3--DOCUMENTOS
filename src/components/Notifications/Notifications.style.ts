import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const StyledIconNotifications = styled(IconButton)(
  ({ theme }: Theme) => ({
    color: `${theme.palette.text.button} !important`,
    svg: {
      color: `${theme.palette.button}`,
    },
  })
);

export const StyledMenu = styled(Menu)(({ theme }: Theme) => ({
  '& .MuiMenu-paper': {
    backgroundColor: `${theme.palette.color.containerBackground} !important`,
    color: `${theme.palette.text.h1} !important`,
  },

  '& 	.MuiMenuItem-root': {
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const StyledEmptyNotifications = styled('p')(({ theme }: Theme) => ({
  textAlign: 'center',
  margin: '20px',
}));
