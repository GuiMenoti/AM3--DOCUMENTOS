import { StyledCheckbox } from '../../styles/checkbox';
import { StyledTableRow, StyledTableRowCell } from './TableRow.style';
import { InfoTableRow } from '../InfoTableRow/InfoTableRow';
import { useSelectedTableStore } from '../../store/useSelectedTableStore';
import { Data } from '../Table/dataCell';

type TableRowProps = {
  row: Data;
};

export function TableRow({ row }: TableRowProps) {
  const { selectedClick, selectedTable } = useSelectedTableStore();
  const isItemSelected: boolean = selectedTable[row?.id]
    ? selectedTable[row?.id]
    : false;
  const labelId = `enhanced-table-checkbox-${row?.id}`;

  return (
    <StyledTableRow
      hover
      aria-checked={isItemSelected}
      tabIndex={-1}
      selected={isItemSelected}
    >
      <StyledTableRowCell padding="checkbox">
        <StyledCheckbox
          onClick={(event) => {
            const checked: boolean = (event.target as HTMLInputElement).checked;
            selectedClick(row.id, checked);
          }}
          checked={isItemSelected}
          inputProps={{
            'aria-labelledby': labelId,
          }}
        />
      </StyledTableRowCell>
      <StyledTableRowCell
        component="th"
        id={`${labelId}${row?.nome}`}
        scope="row"
        padding="none"
      >
        {row?.nome}
      </StyledTableRowCell>
      <StyledTableRowCell
        component="th"
        id={`${labelId}${row.apelido}`}
        scope="row"
        padding="none"
      >
        {row?.apelido}
      </StyledTableRowCell>
      <StyledTableRowCell
        component="th"
        id={`${labelId}${row.cpf}`}
        scope="row"
        padding="none"
      >
        {row?.cpf}
      </StyledTableRowCell>
      <StyledTableRowCell
        component="th"
        id={`${labelId}${row.ativoPrograma}`}
        scope="row"
        padding="none"
      >
        {row?.ativoPrograma ? 'Ativo' : 'Inativo'}
      </StyledTableRowCell>
      <StyledTableRowCell align="right">
        <InfoTableRow id={row?.id} />
      </StyledTableRowCell>
    </StyledTableRow>
  );
}
