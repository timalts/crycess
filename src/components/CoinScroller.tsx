import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import './styles/CoinScroller.css'

interface Column {
  id: 'name' | 'id' | 'price';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'id', label: 'Id', minWidth: 100 },
  { id: 'price', label: 'Price', minWidth: 100}
];;

interface Data {
  name : string,
  id : string,
  price : number
}

function createData(name : string, id : string, price : number): Data {
  return { name, id, price};
}

function handleRowClick (event: any, id : any){
    console.log(id);
}

export default function Table1(droplets : any) {
  const rows : any[] = []
  Array.of(droplets.droplets)[0].forEach((element : any) => {
        if (element.price_usd != undefined)
          rows.push(createData(element.name, element.asset_id, element.price_usd));
  })

  return (
    <Paper className="root">
      <TableContainer className="container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow onClick={event => handleRowClick(event, row)} hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'id' ? <img src={`https://cryptoicons.org/api/icon/${value}/20`}></img> : undefined }
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
