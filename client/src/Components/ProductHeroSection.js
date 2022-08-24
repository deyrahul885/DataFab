import React from 'react'
import './product.css'
import {Container,Box,Typography, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import analysis from '../assets/analysis.jpg'

const useStyles = makeStyles((theme)=>({
    bgRoot:{
        minHeight:'80vh',
        backgroundColor:'#171c21',
        maxWidth:'100%'
    },
    bgImg:{
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        width:'130%',
        marginTop: '-20%',
        opacity:0.7
    },
    mainContent:{
        position:'absolute',
        top:'25vh',
        color:'#fff',
        margin:'auto',
        left:0,
        right:0,
        
    }
}))

const ProductHeroSection = () => {
    const classes = useStyles();
  return (
    <>
    <div className={classes.bgRoot}>
        <Container className={classes.mainContent}>
            <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} >
                <Box sx={{maxWidth:'100%', margin:'auto'}} >
                <Typography variant="h3" gutterBottom={true}>
                <b>DATAFABRIC</b>  Platform
                </Typography>
                <Typography gutterBottom={true} sx={{color:'darkgray'}}>
                DATAFABRIC is a cloud Intelligent Document Processing (IDP) platform that helps companies of all sizes minimize the time they spend manually processing documents.
                </Typography>
                </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box sx={{maxWidth:'100%'}}>
                <img src={analysis} alt='data_img' className={classes.bgImg}/>
                </Box>
                </Grid>
            </Grid>
            </Box>
        </Container>
    </div>
    </>
  )
}

export default ProductHeroSection