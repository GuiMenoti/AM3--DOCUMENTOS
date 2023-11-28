import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  useTheme,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { ThemeOptions } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAgricultorDelete } from '../../queries/Agricultor/useAgricultorDeleteIds';
import { useSelectedTableStore } from '../../store/useSelectedTableStore';
import { StyledMenuTableRow } from './InfoTableRow.style';

type InfoTableRowProps = {
  id: number;
};

export function InfoTableRow({ id }: InfoTableRowProps) {
  const theme: ThemeOptions = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [confirm, setConfirm] = useState(false);
  const { removeFields } = useSelectedTableStore();
  const { mutate } = useAgricultorDelete();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setConfirm(false);
  };

  function handleConfirmDelete() {
    setConfirm(false);
    mutate([id.toString()]);
    removeFields([id.toString()]);
  }

  return (
    <>
      <div style={{ paddingRight: '5px' }}>
        <Tooltip title="Mais">
          <IconButton
            onClick={handleClick}
            sx={{ color: theme.palette.text.h1 }}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <StyledMenuTableRow
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
          <MenuItem
            onClick={() => {
              handleClose();
              setConfirm(true);
            }}
            sx={{ color: theme.palette.color.danger }}
            dense
          >
            <DeleteIcon
              sx={{
                marginRight: '10px',
                width: '18px',
              }}
            />
            Apagar
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate(`ver/:${id}`);
            }}
            dense
          >
            <PersonIcon sx={{ marginRight: '10px', width: '18px' }} />
            Ver
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              navigate(`editar/:${id}`);
            }}
            dense
          >
            <EditIcon sx={{ marginRight: '10px', width: '18px' }} />
            Editar
          </MenuItem>
        </StyledMenuTableRow>
      </div>
      <Dialog
        open={confirm}
        keepMounted
        onClose={() => setConfirm(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Deseja realmente excluir esse registro?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-delete-id">
            Essa ação não pode ser desfeita
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: theme.palette.color.danger }}
            onClick={() => setConfirm(false)}
          >
            Cancelar
          </Button>
          <Button onClick={() => handleConfirmDelete()}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
