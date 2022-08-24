import React,{useState} from 'react'
import { AppBar,Toolbar,Typography,Container,Button,Box,Stack,Menu,MenuItem} from '@mui/material';
import { makeStyles } from '@mui/styles'
import { List,ListItemText,ListItemButton,ListItemIcon } from '@mui/material';
import DrawerComp from './DrawerComp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
  root:{
    backgroundColor:'#171c21!important',
    boxShadow:'none!important'
  },
  appbar_active:{
    backgroundColor:'#f76b6b!important',
    boxShadow:''
  }
}))

const Head = () => {

    const classes = useStyles()
    // const pages = [{id:'platform-button',
    // nav_item:'Platform'}, 'Solutions', 'Resources','Company'];
    const pages = [
      {id:'platform-button',nav_item:'Platform'}, 
      {id:'solution-button',nav_item:'Solutions'},
      {id:'resource-button',nav_item:'Resources'},
      {id:'company-button',nav_item:'Company'}];
    const [openDrawer,setOpenDrawer] = useState(false)
    const [navbar,setNavbar] = useState(false)
    const [anchorEl,setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const openMenu=()=>{
        console.log('clicked')
        setOpenDrawer(!openDrawer) 
    }

    const changeBackground =()=>{
      if(window.scrollY >=50){
        setNavbar(true)
      }
      else{
        setNavbar(false)
      }
    }

    window.addEventListener('scroll',changeBackground)

    const handleClick =(e)=>{
      setAnchorEl(e.currentTarget);
    }

    const handleClose =()=>{
      setAnchorEl(null)
    }
   
    // const MyLink = (props) => <Link to="/login" {...props} />

    const handleInvoice =(props)=>{
      console.log(props)
      return (
      <Link to="/login" {...props} />
      )
    }

  return (
    <>
    <AppBar className={navbar ? classes.appbar_active : classes.root} sx={{padding:'10px 0',}} >
    <Container maxWidth="lg">
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MenuIcon
            onClick={openMenu}
            sx={{padding:'5px 0', marginRight:'10px'}}
            >
            </MenuIcon>
            <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DATAFABRIC
          </Typography>
        </Box>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DATAFABRIC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                endIcon={<KeyboardArrowDownIcon/>}
                id='solution-button'
                aria-controls={open ? 'solution-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true': undefined}
                onClick={handleClick}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex',"&:hover": { color: "#f76b6b" } }}
              >
                {page.nav_item}
              </Button>
            ))}
            <Menu 
             id = "solution-menu"
             anchorEl={anchorEl}
             open={open}
             onClose={handleClose}
             MenuListProps={{
              'aria-labelledby':'solution-button'
             }}
             >
              <MenuItem 
              component="a"
              href="/invoice"
              >Invoice Processing</MenuItem>
              <MenuItem 
               component="a"
               href="/resumeupload"
              >Resume Processing</MenuItem>
              <MenuItem>Identity Processing</MenuItem>
            </Menu>
          </Box>
          <Box sx={{  display: { xs: 'none', md: 'flex'} }}>
          <Stack spacing={2} direction="row">
           <Button variant="contained" sx={{backgroundColor: '#85FFBD',
            backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
            color:'#000',
            fontWeight:'700'
            }}
            >
                LogIn
            </Button>
           {/* <Button variant="outlined" 
            sx={{border:'2px solid #85FFBD', color:'#fff' }}
           >
            Logout
          </Button> */}
          </Stack>
          </Box>
        </Toolbar>
    </Container>
    </AppBar>
    <DrawerComp openDrawer={openDrawer}/>
    </>
  )
}

export default Head