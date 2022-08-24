import React from 'react';
import { Container,Typography,Box,Grid,Card,CardContent,IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BarChartIcon from '@mui/icons-material/BarChart';


const useStyles = makeStyles((theme)=>({
  root:{
   textAlign:'center',
   padding:'50px 0',
  } 
}))

const outcome=[
  {
      title:'Simplify intake',
      description:'Eliminate time spent working with documents before passing them into your data capture system: dedupe, sort, and send followups back to senders without any manual intervention.'
  },
  {
      title:'Improve accuracy',
      description:"Avoid manual rework or having to wait for new templates or business rules to be created anytime something changes with a resilient data capture system that adapts to changes in document layouts automatically."
  },
  {
      title:'Streamline validation',
      description:'Reduce the time involved validating data capture outputs with an ergonomic point-and-click system. Avoid legacy interfaces and instead quickly move through your process with speed and confidence.'
  },
  {
      title:'Automate manual work',
      description:'Automate tasks never-before possible with a data capture tool with native functionality, an extension marketplace, and a fully-integrated serverless low-code platform where you can extend your own functionality directly on the platform.'
  },
  {
    title:'Easily integrate',
    description:'Built natively for the cloud, Rossum brings an open, well documented APIs system that makes integrations with your existing systems a snap.'
},
{
  title:'Reduce time to value',
  description:"Get up and running fast on a turnkey cloud platform. Datafabric's deep learning begins adapting to your documents within the first few uploads."
}
];


const Outcomes = () => {

 const classes = useStyles()
 return (
   <>
   <Container sx={{mb:10}}>
   <div className={classes.root}>
     <Typography variant='h4' gutterBottom={true}>Outcomes, delivered</Typography>
     <Typography>Rossum was purpose built from the start to minimize the time your organization spends processing documents.</Typography>
   </div>
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {outcome.map((elem, index) => (
          <Grid item xs={12} sm={4} md={4} key={index} >
            {/* <Card  sx={{textAlign:'center',minHeight:'250px'}}> */}
            <CardContent sx={{textAlign:'center'}}> 
            <IconButton>
                <BarChartIcon sx={{fontSize:'50px',color:'red'}}/>
            </IconButton>     
            <Typography 
                variant="h5" 
                fontWeight="500"
                sx={{ mb: 1.5 }}
                 >
                {elem.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {elem.description}
            </Typography>
            </CardContent>
            {/* </Card> */}
          </Grid>
        ))}
      </Grid>
    </Box>
   </Container>
   </>
 )
}

export default Outcomes