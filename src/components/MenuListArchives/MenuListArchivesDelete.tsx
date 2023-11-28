import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
} from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { useState } from 'react';
import { MenuListType } from '../../pages/Archives/configs';
import { useAgricultorDeleteFile } from '../../queries/Agricultor/useAgricultorDeleteFile';
import { SmallMenu } from '../SmallMenu';

interface Item extends MenuListType {
  paste: string;
  file: any;
}

interface MenuListArchives {
  item: Item;
}
export function MenuListArchivesDelete({ item }: MenuListArchives) {
  const theme: ThemeOptions = useTheme();
  const { mutate } = useAgricultorDeleteFile();
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <SmallMenu.MenuItem
        key={item.id}
        onClick={() => setConfirm(true)}
        sx={{
          color: theme.palette.color.danger,
          fontSize: 14,
          '& svg': {
            fontSize: '20px',
            marginRight: '8px',
          },
        }}
      >
        <>
          {item.icon}
          {item.message}
        </>
      </SmallMenu.MenuItem>
      <Dialog
        open={confirm}
        keepMounted
        onClose={() => setConfirm(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Deseja realmente excluir esse arquivo?'}</DialogTitle>
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
          <Button
            onClick={() => {
              if (item.file) {
                mutate(item.file.id);
              }
            }}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
