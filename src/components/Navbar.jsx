import SearchIcon from '@mui/icons-material/Search';
import { Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';
import CartWidget from './CartWidget';
import DrawerComponent from './DrawerComponent';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
  
    return (
    <React.Fragment>
        <AppBar className='appbar' sx={{background: 'rgb(240, 240, 240)', fontFamily:'Poppins'}}>
            <Toolbar className='navbar-container'>
            <Typography className='logo-p'>
              <div className='logo'>
                <Link to={`/`} className='logo-text'>china</Link>
                <Link to={`/`} className='logo-img'><img src="/imagenes/pucca-removebg-preview.png" alt=""/></Link>
              </div>
            </Typography>
            {
              isMatch ? (
                <>
                  <DrawerComponent />
                </>
              ) : (
                <>
                  <Tabs sx={{marginLeft: 'auto'}}>
                    <Link to={`/category/cuidadoPersonal`} className='categoria'><Tab className='categoria-tab' label='CUIDADO PERSONAL'/></Link>
                    <Link to={`/category/bebes`} className='categoria'><Tab className='categoria-tab' label='BEBÉS'/></Link>
                    <Link to={`/category/limpieza`} className='categoria'><Tab className='categoria-tab' label='LIMPIEZA'/></Link>
                    <Link to={`/category/bebidas`} className='categoria'><Tab className='categoria-tab' label='BEBIDAS'/></Link>
                    <Link to={`/category/almacen`} className='categoria'><Tab className='categoria-tab' label='ALMACÉN'/></Link>
                    <Link to={`/category/mascotas`} className='categoria'><Tab className='categoria-tab' label='MASCOTAS'/></Link>
                  </Tabs>
            <Search className='search'>
            <SearchIconWrapper className='search'>
              <SearchIcon className='search'/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              className='search'
            />
          </Search>
                </>
              )
            }
            <CartWidget className='carrito-icono' />
            </Toolbar>
        </AppBar>
    </React.Fragment>
    )
}