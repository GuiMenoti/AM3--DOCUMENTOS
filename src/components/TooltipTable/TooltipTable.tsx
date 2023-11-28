import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { ThemeOptions } from '@mui/material/styles';
import { useState } from 'react';
import { useAgricultorDelete } from '../../queries/Agricultor/useAgricultorDeleteIds';
import { useSelectedTableStore } from '../../store/useSelectedTableStore';
import { StyledToolbarTable } from './TooltipTable.style';

export function EnhancedTableToolbar() {
  const [confirm, setConfirm] = useState(false);
  const { getSelectedIsTrueLenght, getAllTrueFields, removeFields } =
    useSelectedTableStore();
  const theme: ThemeOptions = useTheme();
  const { mutate } = useAgricultorDelete();

  function handleConfirmDelete() {
    setConfirm(false);
    mutate(getAllTrueFields());
    removeFields(getAllTrueFields());
  }

  return (
    <StyledToolbarTable>
      <Typography
        sx={{ flex: '2 1 100%', paddingLeft: '15px' }}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {getSelectedIsTrueLenght()} Selecionados
      </Typography>
      <Tooltip title="Delete">
        <IconButton
          sx={{ color: theme.palette.color.danger }}
          onClick={() => setConfirm(true)}
        >
          <DeleteIcon sx={{ color: theme.palette.color.danger }} />
        </IconButton>
      </Tooltip>
      <Dialog
        open={confirm}
        keepMounted
        onClose={() => setConfirm(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {'Deseja realmente excluir os registros selecionados?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-delete">
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
    </StyledToolbarTable>
  );
}
