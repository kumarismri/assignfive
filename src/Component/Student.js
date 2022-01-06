import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { MainContext } from './MainContext';

// const [rows] = [
//   {
//       "ID":"1",
//       "Name": "Smriti",
//       "Age":"22",
//       "Course":"cse",
//       "Batch":"2017",
//   },
//   {
//     "Id": "2",
//     "Name": "onik",
//     "Age":"21",
//     "Course":"ece",
//     "Batch":"2016"

// },
// {
//     "Id": "3",
//     "Name": "Smrhjki",
//     "Age":"23",
//     "Course":"csejj",
//     "Batch":"290"
// }
// ,

// {
//     "Id": "4",
//     "Name": "Smrhhh",
//     "Age":"29",
//     "Course":"eee",
//     "Batch":"2016"
// }

// ];

export default function DenseTable() {
  const [rows] = useContext(MainContext)
  return (
    <div>
      <h2>Student Details</h2>
      <button className='buttn'><Link to="/student/addstudent">Add Student Details</Link></button>
      <div className='tableclass'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell align="right"><strong>Age</strong></TableCell>
                <TableCell align="right"><strong>Course</strong></TableCell>
                <TableCell align="right"><strong>Batch</strong></TableCell>
                <TableCell align='right'><strong>Change</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.ID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell align="right">{row.Age}</TableCell>
                  <TableCell align="right">{row.Course}</TableCell>
                  <TableCell align="right">{row.Batch}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell className="a"><Link to={`/student/edit/${row.ID}`}>edit</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}