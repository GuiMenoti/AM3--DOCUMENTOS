import { IconButton, styled } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const StyledSwitchThemeIcon = styled(IconButton)(({ theme }: Theme) => ({
  color: `${theme.palette.color.borderInputHover} !important`,
  svg: {
    color: `${theme.palette.color.borderInputHover} !important`,
  },
}));
