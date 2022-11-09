import React from 'react';
import CartWidget from './CartWidget';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../stylesheets/Navbar.css'
import { Link } from 'react-router-dom';

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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='appbar' style={{ backgroundColor: 'rgb(240, 240, 240)', fontFamily:'Poppins'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to={`/`} className='logo'>china</Link>
          </Typography>
          <ul className='categorias'>
            <li><Link to={`/category/cuidadoPersonal`} className='categoria'>CUIDADO PERSONAL</Link></li>
            <li><Link to={`/category/bebes`} className='categoria'>BEBÉS</Link></li>
            <li><Link to={`/category/limpieza`} className='categoria'>LIMPIEZA</Link></li>
            <li><Link to={`/category/bebidas`} className='categoria'>BEBIDAS</Link></li>
            <li><Link to={`/category/almacen`} className='categoria'>ALMACÉN</Link></li>
            <li><Link to={`/category/mascotas`} className='categoria'>MASCOTAS</Link></li>
          </ul>
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
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}