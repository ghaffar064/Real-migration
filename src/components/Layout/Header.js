import './styles/HeaderStyles.css'
import React,{useState} from 'react';
import {AppBar,Box,Divider,Drawer,IconButton,Toolbar,Typography} from '@mui/material'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <Box onClick = {handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={"red"}
            variant='h6'
            component="div"
            sx={{flexGrow:1,marginLeft:5}}
          
            
          >
            Our Services
          </Typography>
          <Divider/>
         
            <ul className='mobile-nav'>
              <li>
                <Link to={'/'}>HOME</Link>
     
              </li>
              <li>
              <Link to={'/aboutus'}>ABOUT US</Link>
              </li>
              <li>
              <Link to={'/visas'}>VISAS</Link>
              </li>
              <li>
              <Link to={'/studentinfohub'}>STUDENT INFORMATION HUB</Link>
              </li>
              <li>
              <Link to={'/blog'}>BLOG</Link>
              </li>
              <li>
              <Link to={'/visaapply'}>VISA APPLY</Link>
              </li>
              <li className ="book-appointment">
              <Link to={'/bookanappointment'}>BOOK AN APPOINTMENT</Link>
              </li>
            </ul>
          
    </Box>
  )
  return (
    <>
     <Box>
      <AppBar component={'nav'} sx={{bgcolor:'white'}}>
        <Toolbar>
          <IconButton color='black' aria-label='open drawer' edge = 'start' 
            sx={{
              mr:2,
              display:{lg:'none'}
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon/>
          </IconButton>
          <Typography color={"red"}
            variant='h6'
            component="div"
            sx={{display:{xs:'none',sm:'none',md:"none" ,lg:'block'}}}
            
          >
            Real Migration And Education
          </Typography>
          <Typography color={"red"}
            variant='h6'
            component="div"
            sx={{display:{xs:'none', sm:'block',md:'block',lg:'none'},textAlign:'center',flexGrow:1}}
            
          >
            Real Migration And Education
          </Typography>
          <Typography color={"red"}
            variant='h6'
            component="div"
          sx={{display:{xs:'block', sm:'none'},textAlign:'center',flexGrow:1}}
            
          >
            Real Migration
            <br/>
             And Education
          </Typography>
          <Box sx={{display:{xs:'none', sm:'none',md:'none',lg:'block'}}}>
            <ul className='nav-menu'>
              <li>
                <Link to={'/'}>HOME</Link>
     
              </li>
              <li>
              <Link to={'/aboutus'}>ABOUT US</Link>
              </li>
              <li>
              <Link to={'/visas'}>VISAS</Link>
              </li>
              <li>
              <Link to={'/studentinfohub'}>STUDENT INFORMATION HUB</Link>
              </li>
              <li>
              <Link to={'/blog'}>BLOG</Link>
              </li>
              <li>
              <Link to={'/visaapply'}>VISA APPLY</Link>
              </li>
              <li className ="book-appointment">
              <Link to={'/bookanappointment'}>BOOK AN APPOINTMENT</Link>
              </li>
            </ul>
          </Box>
          
          <Box sx={{ flexGrow: 0,right:5,position:'absolute' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem onClick={handleCloseUserMenu}>
                <ul className='mobile-nav'>
              <li>
                <Link to={'/'}>Profile</Link>
     
              </li>
              <li>
              <Link to={'/aboutus'}>Account</Link>
              </li>
              <li>
              <Link to={'/visas'}>Dashboard</Link>
              </li>
              <li>
              <Link to={'/studentinfohub'}>Logout</Link>
              </li>
              
            </ul>
                </MenuItem>
             
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant = "temporary" open = {mobileOpen} onClose = {handleDrawerToggle}
        sx={{display:{xs:'block', sm:'block',md:'block',lg:'none'},
        "& .MuiDrawer-paper":{
          boxSizing:'border-box',
          width:'300px '
        }

      
      }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar/>
     
      </Box> 
    </>
  );
}
