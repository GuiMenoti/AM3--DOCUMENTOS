import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ListIcon from '@mui/icons-material/List';
import { Sidebar } from '../Sidebar/Sidebar';
import {
  StyledDrawerHeader,
  closedMixin,
  openedMixin,
} from './SidebarDesktop.style';
import Avatar from '@mui/material/Avatar';
import { Drawer, Grid, Typography, useTheme } from '@mui/material';
import PrimaryButtonSidebarDesktop from '../DesktopPrimaryButtonSidebar/PrimaryButtonSidebarDesktop';
import { Fragment } from 'react';
import { UserNameSidebar } from '../UserNameSidebar/UserNameSidebar';
import { MiniUserNameSidebar } from '../MiniUserNameSidebar/MiniUserNameSidebar';
import { ThemeOptions } from '@mui/material/styles';
import { useSidebarOpen } from '../../store/useSidebarOpen';
import { useSidebarStates } from '../../store/useSidebarStates';
import { useOpenMenuSidebar } from '../../store/useOpenMenuSidebar';
import Logo from '../../../public/logo.png';
import { version } from '../../../package.json';

export function SidebarDesktop({ children }: Sidebar) {
  const theme: ThemeOptions = useTheme();
  const { isOpen, openSidebar, closedSidebar } = useSidebarOpen();
  const { states } = useSidebarStates();
  const { closedAllSidebarMenu } = useOpenMenuSidebar();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          ...(isOpen && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!isOpen && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          }),
          '& .MuiDrawer-paper': {
            width: !isOpen ? 80 : 240,
            transitionProperty: 'width',
            transitionDuration: '0.5s',
            backgroundColor: theme.palette.color.backgroundColor,
            borderColor: `${theme.palette.color.borderInput}80`,
            overflowX: 'hidden',
          },
        }}
      >
        {/* @ts-ignore */}
        <StyledDrawerHeader>
          <Avatar
            sx={{
              width: isOpen ? '40px' : '0',
              height: isOpen ? '40px' : '0',
              opacity: isOpen ? 1 : 0,
              transition: '0.5s ease',
              filter: 'hue-rotate(250deg)',
            }}
            alt="Logo da SMAG"
            src={Logo}
          >
            L
          </Avatar>
          <IconButton
            aria-label="botão para abrir ou fechar o menu lateral"
            onClick={() => {
              isOpen ? closedSidebar() : openSidebar();
              closedAllSidebarMenu();
            }}
            sx={{
              color: theme.palette.text.p,
            }}
          >
            {!isOpen ? <ListIcon /> : <MenuOpenIcon />}
          </IconButton>
        </StyledDrawerHeader>
        <Grid
          p={1.5}
          height={'100%'}
          sx={{ display: 'flex' }}
          justifyContent={'space-between'}
          flexDirection={'column'}
        >
          <div>
            {isOpen ? (
              <UserNameSidebar m={'10px 0'} />
            ) : (
              <MiniUserNameSidebar />
            )}
            {states?.map((value: any) => (
              <Fragment key={value?.title}>
                <PrimaryButtonSidebarDesktop sidebarController={value} />
                {!isOpen ? (
                  <Divider
                    sx={{
                      margin: '0 0 10px 0',
                      backgroundColor: theme.palette.color.borderInput,
                    }}
                  />
                ) : (
                  ''
                )}
              </Fragment>
            ))}
          </div>
          <div>
            {isOpen && (
              <Typography
                variant={'subtitle2'}
                pt={4}
                whiteSpace={'nowrap'}
                sx={{
                  textAlign: 'end',
                  textTransform: 'uppercase',
                }}
              >
                Versão {version}
              </Typography>
            )}
          </div>
        </Grid>
      </Drawer>
      {children}
    </Box>
  );
}
