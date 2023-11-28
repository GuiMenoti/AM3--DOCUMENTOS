import { MenuItem } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { useTheme } from '@mui/material';

interface SmallMenuItemProps extends React.ComponentProps<typeof MenuItem> {
  children: JSX.Element[] | JSX.Element;
}

export function SmallMenuItem(props: SmallMenuItemProps) {
  const theme: ThemeOptions = useTheme();
  const { children, ...rest } = props;

  return (
    <MenuItem
      sx={{
        color: theme.palette.text.h1,
        fontSize: 14,
        '& svg': {
          fontSize: '20px',
          marginRight: '8px',
        },
      }}
      dense
      {...rest}
    >
      {children}
    </MenuItem>
  );
}
