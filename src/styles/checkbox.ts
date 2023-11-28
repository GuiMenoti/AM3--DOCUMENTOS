import { styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { ThemeOptions } from '@mui/material/styles';

type Props = {
  theme?: ThemeOptions;
  checked: boolean;
};

export const StyledCheckbox = styled(Checkbox)(({ theme, checked }: Props) => ({
  color: checked
    ? `${theme?.palette.color.primary} !important`
    : `${theme?.palette.text.button} !important`,
}));
