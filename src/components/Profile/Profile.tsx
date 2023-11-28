import AccountCircle from '@mui/icons-material/AccountCircle';
import { Grid, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { ThemeOptions } from '@mui/material/styles';
import * as React from 'react';
import { version } from '../../../package.json';
import { useAuth } from '../../store/useAuth';
import { SwitchThemeIcon } from '../SwitchThemeIcon/SwitchThemeIcon';
import {
  StyledIconProfile,
  StyledMenuProfile,
  StyledTooltipProfile,
} from './Profile.style';

export default function Profile() {
  const theme: ThemeOptions = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { logout } = useAuth();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'inline-flex' }}>
      <Toolbar>
        <div>
          <StyledTooltipProfile title={'Conta'}>
            <StyledIconProfile
              size="large"
              aria-label="conta do usuario"
              aria-controls="usuario minha-conta tema"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </StyledIconProfile>
          </StyledTooltipProfile>
          <StyledMenuProfile
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem id={'usuario'} onClick={handleClose}>
              Usuário
            </MenuItem>
            <MenuItem id={'minha-conta'} onClick={handleClose}>
              Minha conta
            </MenuItem>
            <MenuItem id={'minha-conta'} onClick={() => logout()}>
              Logout
            </MenuItem>
            <SwitchThemeIcon />
            <Grid container justifyContent={'center'}>
              <Grid
                item
                sx={{
                  borderTop: `1px solid ${theme.palette.text.button}`,
                  width: '80%',
                }}
              >
                <Typography
                  variant={'subtitle2'}
                  whiteSpace={'nowrap'}
                  sx={{
                    paddingTop: 1,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontSize: '11px',
                  }}
                >
                  Versão {version}
                </Typography>
              </Grid>
            </Grid>
          </StyledMenuProfile>
        </div>
      </Toolbar>
    </Box>
  );
}
