import { ThemeOptions } from '@mui/material/styles';
import { styled } from '@mui/material';

type DrawerHeaderProps = {
  theme: ThemeOptions;
  open: boolean;
};

export const openedMixin = (theme: any) => ({
  width: 240,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme: any) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

export const StyledDrawerHeader = styled('div')(
  ({ theme }: DrawerHeaderProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 20px',
    boxShadow: `0px 0.5px ${theme.palette.color.borderInput}`,
  })
);
