import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container,Grid, IconButton } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

const arr=[
    {
        title:'Pre-Processing',
        description:'Automatically ingest, process, deduplicate, and route documents to the appropriate queue.'
    },
    {
        title:'Data Capture',
        description:"Accurately read and capture a document's content with confidence even when layouts change."
    },
    {
        title:'Validation',
        description:'Accelerate manual review of data capture outputs with ergonomic UI and robust workflow rules.'
    },
    {
        title:'Post-Processing',
        description:'Save time by automating key tasks such as calculations, transformations, and followups.'
    }
];


export default function CardComp() {
  return (
    <>
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {arr.map((elem, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Card variant="outlined" sx={{backgroundColor:'aliceblue',textAlign:'center',minHeight:'250px'}}>
            <CardContent> 
            <IconButton>
                <BarChartIcon sx={{fontSize:'50px'}}/>
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
            {/* <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
    </>
  );
}
