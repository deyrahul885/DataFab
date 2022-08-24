import React from 'react'
import {Container,Box,Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import heroimg from '../assets/data_img2.png'
import heroimg2 from '../assets/data_img.webp'

const useStyles = makeStyles((theme)=>({
    bgRoot:{
        minHeight:'160vh',
        backgroundColor:'#171c21',
        maxWidth:'100%'
    },
    bgImg:{
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        width:'100%',
    },
    mainContent:{
        position:'absolute',
        top:'30vh',
        color:'#fff',
        margin:'auto',
        left:0,
        right:0
    }
}))

const HeroSection = () => {
    const classes = useStyles();
  return (
    <>
    <div className={classes.bgRoot}>
        <Container className={classes.mainContent}>
            <Box sx={{textAlign:'center',maxWidth:'80%', margin:'auto'}} >
                <Typography variant="h3" gutterBottom={true}>
                Automated document<br/>processing with AI
                </Typography>
                <Typography gutterBottom={true} sx={{color:'darkgray'}}>
                DATAFABRIC is a cloud Intelligent Document Processing (IDP) platform that helps companies of all sizes minimize the time they spend manually processing documents.
                </Typography>
            </Box>
            <img src={heroimg2} alt='data_img' className={classes.bgImg}/>
        </Container>
    </div>
    </>
  )
}

export default HeroSection