import { TableContainer,Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const DataTable = ({User,Title}) => {  
    console.log(User) 

  return (
    <>
    <div style={{padding:'5px'}}>
    <Typography textAlign='center'>{Title}</Typography>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Skills</TableCell>
                    <TableCell>Contact Number</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {User.map(el=>{
                     return(
                        <>
                        <TableRow>
                        <TableCell>{el.name}</TableCell>
                        <TableCell>{el.skills}</TableCell>
                        <TableCell>{el.contact}</TableCell>
                        </TableRow>
                        </>
                     )       
                        })}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
    </>
  )
}

export default DataTable