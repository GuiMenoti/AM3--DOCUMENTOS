import DescriptionIcon from '@mui/icons-material/Description';
import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { lightBlue } from '@mui/material/colors';

type FileManagerListItemProps = {
  primaryText: string;
  secondaryText?: string;
  endIcon?: JSX.Element;
};

export function FileManagerListItem({
  primaryText,
  secondaryText,
  endIcon,
}: FileManagerListItemProps) {
  return (
    <>
      <ListItem secondaryAction={<>{endIcon}</>} disablePadding>
        <ListItemButton role={undefined}>
          {/* <ListItemIcon>
            <Checkbox
              edge="start"
              defaultChecked={false}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon> */}
          <ListItemAvatar>
            <DescriptionIcon sx={{ color: lightBlue[200] }} />
          </ListItemAvatar>
          <ListItemText primary={primaryText} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
