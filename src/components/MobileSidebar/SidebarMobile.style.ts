import { styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { Theme } from '@mui/material/styles';

export const StyledDrawer = styled(Drawer)(({ theme }: Theme) => ({
  '& .MuiDrawer-paper': {
    minWidth: '250px !important',
    padding: '15px',
    backgroundColor: `${theme.palette.color.backgroundColor}100`,
  },
}));
