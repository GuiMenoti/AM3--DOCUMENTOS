import { Switch, styled } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const AntSwitch = styled(Switch)(({ theme }: Theme) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',

  '& .Mui-disabled': {
    color: 'white !important',
  },
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(13px)',
      color: 'white',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.color.primary,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.color.danger,
    boxSizing: 'border-box',
  },
}));
