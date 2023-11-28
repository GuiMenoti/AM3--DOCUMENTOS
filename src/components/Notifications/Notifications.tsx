import NotificationsIcon from '@mui/icons-material/Notifications';
import { NotificationsNone } from '@mui/icons-material/';
import { Grid } from '@mui/material';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import {
  StyledEmptyNotifications,
  StyledIconNotifications,
  StyledMenu,
} from './Notifications.style';

export function Notifications() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [lengthNotifications, setLengthNotifications] = useState<number>(0);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid sx={{ display: 'inline-block' }}>
      <Tooltip title={`${lengthNotifications} Notificações`}>
        <StyledIconNotifications
          size="large"
          aria-label={`show ${lengthNotifications} new notifications`}
          color="inherit"
          onClick={handleMenu}
        >
          <Badge badgeContent={lengthNotifications} color="warning">
            {anchorEl === null ? <NotificationsNone /> : <NotificationsIcon />}
          </Badge>
        </StyledIconNotifications>
      </Tooltip>
      <StyledMenu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {lengthNotifications <= 0 && (
          <StyledEmptyNotifications>
            Não há nada de novo aqui
          </StyledEmptyNotifications>
        )}
      </StyledMenu>
    </Grid>
  );
}
