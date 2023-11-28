import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { format } from 'date-fns';

interface DateInputProps {
  id?: string;
  label?: string;
  slotProps?: any;
  disableFuture?: boolean;
  value?: Date | null;
  onChange: (date: Date | null) => void;
}

export function DateInput(props: DateInputProps) {
  const { value, onChange, ...rest } = props;

  const formatDate = (date: Date) => {
    return format(date, 'dd/MM/yyyy');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        sx={{ width: '100%' }}
        textField={(params: any) => <TextField {...params} />}
        {...rest}
        value={value}
        onChange={onChange}
        format="dd/MM/yyyy"
        views={['day', 'year']}
        // @ts-ignore
        renderDay={(
          day: any,
          _value: any,
          _dayState: any,
          dayPickerProps: any
        ) => (
          <div {...dayPickerProps}>
            {day.toLocaleString('pt-BR', { day: 'numeric' })}
          </div>
        )}
        renderMonth={(
          month: any,
          _value: any,
          monthState: any,
          dayPickerProps: any
        ) => (
          <div {...dayPickerProps}>
            {month.toLocaleString('pt-BR', { month: 'short' })}
          </div>
        )}
        renderYear={(
          year: any,
          _value: any,
          yearState: any,
          dayPickerProps: any
        ) => (
          <div {...dayPickerProps}>
            {year.toLocaleString('pt-BR', { year: 'numeric' })}
          </div>
        )}
      />
    </LocalizationProvider>
  );
}
