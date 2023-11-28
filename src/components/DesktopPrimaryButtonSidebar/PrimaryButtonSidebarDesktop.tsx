import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import { SecondaryButtonSidebar } from '../MobileSecondaryButtonSidebar/SecondaryButtonSidebar';
import { useNavigate } from 'react-router-dom';
import { itemsProps, sidebarControllerModelProps } from 'sidebar';
import {
  StyledListDesktop,
  StyledPrimaryButtonSidebarDesktop,
} from './PrimaryButtonSidebarDesktop.style';
import { getIconComponent } from '../../utils/getIconComponent';
import { isIcon } from '../MobilePrimaryButtonSidebar/isIcon';
import { SecondaryButtonSidebarDesktop } from '../DesktopSecondaryButtonSidebar/SecondaryButtonSidebarDesktop';
import { useSidebarOpen } from '../../store/useSidebarOpen';
import { useOpenMenuSidebar } from '../../store/useOpenMenuSidebar';
import { Grid } from '@mui/material';

type PrimaryButtonSidebarProps = {
  sidebarController: sidebarControllerModelProps;
};

export default function PrimaryButtonSidebarDesktop({
  sidebarController,
}: PrimaryButtonSidebarProps) {
  const navigate = useNavigate();
  const { menuSidebar, openSidebarMenu } = useOpenMenuSidebar();
  const { isOpen } = useSidebarOpen();
  const [anchorEl, setAnchorEl] = React.useState({});

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    item: itemsProps
  ) => {
    if (item.subItems?.length === 0) {
      navigate(`${item?.path}`);
    }
    openSidebarMenu(item.path);
    if (!isOpen) {
      setAnchorEl((prev) => ({ ...prev, [item?.path]: event }));
    }
  };

  return (
    <StyledListDesktop
      aria-labelledby={`nested-list-subheader${sidebarController?.title}`}
      subheader={
        <ListSubheader
          id={`nested-list-subheader${sidebarController?.title}`}
          sx={{
            whiteSpace: 'nowrap',
            width: isOpen ? '' : '0 !important',
            height: isOpen ? '' : '0 !important',
            fontSize: isOpen ? '' : '0',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          {sidebarController?.title.toUpperCase()}
        </ListSubheader>
      }
    >
      {sidebarController.items?.map((item) => {
        return (
          <Grid
            sx={{ padding: '0', flexDirection: 'column' }}
            key={`${item.path}${item.name}`}
          >
            <ListItem sx={{ padding: '0' }}>
              <Tooltip title={!isOpen ? item?.name : ''} placement="right">
                <StyledPrimaryButtonSidebarDesktop
                  onClick={(event) => handleClick(event, item)}
                  // @ts-ignore
                  open={open[item.path]}
                  selected={item.selected}
                >
                  <ListItemIcon>{getIconComponent(item?.icon)}</ListItemIcon>
                  <ListItemText primary={item.name} />
                  {isIcon(item, menuSidebar)}
                </StyledPrimaryButtonSidebarDesktop>
              </Tooltip>
            </ListItem>
            {isOpen ? (
              <SecondaryButtonSidebar open={menuSidebar} item={item} />
            ) : (
              <SecondaryButtonSidebarDesktop
                item={item}
                anchorEl={{ anchorEl, setAnchorEl }}
              />
            )}
          </Grid>
        );
      })}
    </StyledListDesktop>
  );
}
