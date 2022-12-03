import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';


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

const DrawerComponent = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

    return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List style={{width:'250px'}}>
          <Search className='search search-container'>
                <SearchIconWrapper className='search'>
                <SearchIcon className='search'/>
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  className='search'
                />
          </Search>
          <p className='categorias-drawer'>Categorías</p>
            <ListItemButton onClick={()=> setOpenDrawer(false)}>
              <ListItemText><Link to={`/category/cuidadoPersonal`} className='categoria'>CUIDADO PERSONAL</Link></ListItemText>
            </ListItemButton>

            <ListItemButton onClick={()=> setOpenDrawer(false)}>
              <ListItemText><Link to={`/category/bebes`} className='categoria'>BEBÉS</Link></ListItemText>
            </ListItemButton>

            <ListItemButton onClick={()=> setOpenDrawer(false)}>
              <ListItemText><Link to={`/category/limpieza`} className='categoria'>LIMPIEZA</Link></ListItemText>
            </ListItemButton>

            <ListItemButton onClick={()=> setOpenDrawer(false)}>
              <ListItemText><Link to={`/category/bebidas`} className='categoria'>BEBIDAS</Link></ListItemText>
            </ListItemButton>

            <ListItemButton onClick={()=> setOpenDrawer(false)}>
              <ListItemText><Link to={`/category/almacen`} className='categoria'>ALMACÉN</Link></ListItemText>
            </ListItemButton>

            <ListItemButton onClick={()=> setOpenDrawer(false)}>
              <ListItemText><Link to={`/category/mascotas`} className='categoria'></Link></ListItemText>
            </ListItemButton>
          </List>
        </Drawer>
        <IconButton className='menuHamburguesa-icono' onClick={() => setOpenDrawer(!openDrawer)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: '#cc0c1a' }}
          >
            <MenuIcon />
          </IconButton>
    </React.Fragment>
    )
}

export default DrawerComponent;