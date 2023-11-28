import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import { TableRow as Row } from '@mui/material';
import { rows } from './dataCell';
import { EnhancedTableToolbar } from '../TooltipTable/TooltipTable';
import { TableHead } from '../TableHead/TableHead';
import { TableRow } from '../TableRow/TableRow';
import { InputSearchTable } from '../InputSearchTable/InputSearchTable';
import { TabsTable } from '../TabsTable/TabsTable';
import {
  StyledTablePagination,
  StyledContainerTable,
  StyledPaperTable,
} from './Table.style';

export {
  React,
  Box,
  Table,
  TableBody,
  TableContainer,
  StyledTablePagination,
  StyledContainerTable,
  StyledPaperTable,
  TableCell,
  Row,
  rows,
  EnhancedTableToolbar,
  TableHead,
  TableRow,
  InputSearchTable,
  TabsTable,
};
