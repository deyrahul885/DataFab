import React from 'react'
import { Box,Grid } from '@mui/material'
import ResumeComp from '../Components/ResumeComp'
import DataTable from '../Components/DataTable'

const User = [
    {
        name:'Rohan',
        skills:'Html,css,javaScript',
        contact:7846235632
    },
    {
        name:'Sohan',
        skills:'React,Javascript,Node Js',
        contact:7845525205
    }
]

const Title = 'Required Data from the Resume'

const ResumeUpload = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1,marginTop:'90px',border:'1px solid #000000' }}>
    <Grid container>
    <Grid item xs={6} md={4} sx={{backgroundColor:'#191970'}}>
        <Box>
            <ResumeComp/>
        </Box>
    </Grid>
    <Grid item xs={6} md={8}>
          <Box>
            <DataTable User={User} Title={Title}/>
          </Box> 
        </Grid>
    </Grid>   
    </Box>
    </>
  )
}

export default ResumeUpload