import React,{useEffect, useState} from 'react'
import { makeStyles } from '@mui/styles'
import { Container, Typography } from '@mui/material'
import CardComp from './CardComp';


const useStyles = makeStyles((theme)=>({
   root:{
    textAlign:'center',
    padding:'50px 0',
   } 
}))


const About = () => {
    const classes = useStyles()

  return (
    <>
    <Container sx={{mb:10}}>
    <div className={classes.root}>
      <Typography variant='h4' gutterBottom={true}>One platform, endless possibilities</Typography>
      <Typography>DATAFABRIC brings your entire document processing operation together on a single cloud solution. From intake to integrations with your existing systems, Rossum was built from the start for the cloud as an extensible, open platform.</Typography>
    </div>
    <CardComp/>
    </Container>
    </>
  )
}

export default About