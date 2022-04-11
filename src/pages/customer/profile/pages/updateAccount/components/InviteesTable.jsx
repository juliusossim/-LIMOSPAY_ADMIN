import * as React from 'react';
import format from 'date-fns/format';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Card, CardContent, CardHeader, IconButton, TableFooter } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import PropTypes from 'prop-types';
import Image from '../../../../../../components/Image';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // [`&.${tableCellClasses.head}`]: {
  //   backgroundColor: 'rgb(249 249 249)',
  //   color: '#202020',
  //   fontWeight: 600
  // },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // '&:nth-of-type(even)': {
  //   backgroundColor: theme.palette.action.hover
  // },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));


InviteesTable.propTypes = {
  status: PropTypes.string,
  data: PropTypes.array
};

export default function InviteesTable({ data, status }) {
  function createData(name, date, time, transactions, amount) {
    return {
      date, name, time, transactions, amount
    };
  }
  const rows = data?.map((item) => createData(
    item.username,
    format(new Date(item.createdAt), 'mm:ss'),
    format(new Date(item.createdAt), 'mm:ss'),
    item.transactions,
    item.amountEarned
  ));
  const cols= [
    {name: 'user name'},
    {name: 'sign-up date'},
    {name: 'time'},
    {name: 'transaction performed'},
    {name: 'amount earned'}
  ];

  return (
    <div className="mt-5">
      {
        status === 'pending'
          ? (  <Card>
            <CardHeader title="" sx={{bgcolor:'#F1F7FA'}}/>
            <CardContent sx={{p:15,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Image src="/images/alarm.svg" height={205} width={205}/>
            </CardContent>
            <div/>
          </Card>)
          : (
            <TableContainer component={Box}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead className="blue-bg text-blue">
                  <TableRow>
                    {
                      cols.map((col) => <StyledTableCell key={col.name} className="text-blue" align={col.align || 'center'}>{col.name?.toUpperCase()}</StyledTableCell>)
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row) => (
                    <StyledTableRow key={row.index}>
                      <StyledTableCell component="th" scope="row">
                        <div className="bold theme-font font-small">{row.name}</div>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <div className="bold theme-font font-small" style={{ width: '100px' }}>{row.date}</div>
                      </StyledTableCell>
                      <StyledTableCell align="left"><div className="theme-font-2">{row.time}</div></StyledTableCell>
                      <StyledTableCell align="right"><div className="theme-font-2">{row.transactions}</div></StyledTableCell>
                      <StyledTableCell align="center"><div className="theme-font-2">{row.amount}</div></StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
                {/* <TableFooter className="blue-bg text-blue" style={{with: '100%'}}> */}
                {/*   <div className="row"> */}
                {/*     <div className='d-flex justify-content-end'> */}
                {/*       <Box>1-6 0f 6</Box> */}
                {/*       <Box> */}
                {/*         <IconButton> */}
                {/*           <ArrowBackIosNewOutlinedIcon /> */}
                {/*         </IconButton> */}
                {/*         <IconButton> */}
                {/*           <ArrowForwardIosOutlined /> */}
                {/*         </IconButton> */}
                {/*       </Box> */}
                {/*     </div> */}
                {/*   </div> */}
                {/* </TableFooter> */}
              </Table>
            </TableContainer>
          )
      }
    </div>
  );
}
