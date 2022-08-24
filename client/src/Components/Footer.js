import React from 'react'
import { Container,Box,Typography,Grid,List,ListItem,ListItemButton,ListItemText, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const footerData = [
    {
        title:'Platform',
        data:[{subTitle:'One',path:'#'},{subTitle:'Two',path:'#'},{subTitle:'Three',path:'#'}]
    },
    {
        title:'Solutions',
        data:[{subTitle:'Invoice Processing',path:'/invoice'},{subTitle:'Resume Processing',path:'/resumeupload'},{subTitle:'Identity Processing',path:'/identity'}]
    },
    {
        title:'Resources',
        data:[{subTitle:'One',path:'#'},{subTitle:'Two',path:'#'},{subTitle:'Three',path:'#'}]
    }
]
const myLink = {textDecoration:'none'}

const footer = () => {
  return (
    <>
    <div style={{backgroundColor:'#171c21',color:'#fff'}}>
        <Container>
            <Box sx={{textAlign:'center',p:5}}>
                <Typography variant='h3' fontWeight='500'>Get Ready to Start</Typography>
            </Box>
            <Box sx={{ flexGrow: 1,p:8 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                {footerData.map((item, index) => (
            <Grid xs={1} sm={4} md={4} key={index}>
            <Typography variant='h6' color="#f5f1f1">{item.title}</Typography>
            {item.data.map((el)=>{
                console.log("el",el)
                return (
                    <>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton >
                            <Typography variant="body2" style={myLink} color='#9e9e9e' component='a' href={el.path}>{el.subTitle}</Typography>
                            <ListItemText/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    </>
                )
            })}
            </Grid>
            ))}
            </Grid>
    </Box>
    <Box sx={{pb:3}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding:'0',textAlign:'center'}}>
        <Grid item xs={6}>
          <Typography sx={{paddingTop:'15px'}}><b>DATAFABRIC</b> All copyright reserved @2022</Typography>
        </Grid>
        <Grid item xs={6}>
        <IconButton sx={{p:0,color:'#9e9e9e'}}>
            <FacebookIcon sx={{fontSize:'2.5rem',marginRight:'5px'}}/>
            <WhatsAppIcon sx={{fontSize:'2.5rem',marginRight:'5px'}}/>
        </IconButton>
        </Grid>
      </Grid>
    </Box>
        </Container>
    </div>
    </>
  )
}

export default footer