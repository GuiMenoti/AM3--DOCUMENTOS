import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeOptions } from '@mui/material/styles';

type StyledButtonWithIconProps = {
  theme?: ThemeOptions;
  mode: string;
};

export const StyledButtonWithIcon = styled(Button)(
  ({ theme, mode }: StyledButtonWithIconProps) => ({
    color: 'white',
    backgroundColor:
      mode === 'true'
        ? `${theme?.palette.color.danger} !important`
        : `${theme?.palette.color.primary} !important`,
    margin: '20px 0 !important',
    '&:disabled': {
      opacity: 0.5,
    },
  })
);
