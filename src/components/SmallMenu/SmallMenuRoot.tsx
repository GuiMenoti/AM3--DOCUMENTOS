import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuProps, Tooltip } from '@mui/material';
import { useState } from 'react';

interface SmallMenuRootProps {
  children: JSX.Element[];
}

export function SmallMenuRoot(props: SmallMenuRootProps) {
  const { children, ...rest } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Mais">
        <IconButton
          edge="end"
          aria-label="abrir mais"
          onClick={handleClick}
          sx={{ mr: -0.5 }}
        >
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        {...rest}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        {children}
      </Menu>
    </>
  );
}
