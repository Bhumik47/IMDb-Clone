import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';
import { logoURL } from '../constants/constant';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routhPath } from '../constants/route';
import SearchBar from './SearchBar';

const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;

  & > * {
    padding: 0 12px;
  }

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #303030;
    }

    & > p {
      font-size: 14px;
      font-weight: 600;
      transition: color 0.3s ease;
    }
  }

  & > p {
    font-size: 14px;
    font-weight: 600;
    transition: color 0.3s ease;
  }
`;

const Logo = styled('img')({
  width: 64,
  cursor: 'pointer',
  transition: 'transform 0.3s ease',

  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const Header = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(null);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar position='static'>
      <StyledToolBar>
        <Logo src={logoURL} alt='logo' onClick={() => navigate(routhPath.home)} />
        <Box onClick={handleClick} padding='5px 15px' borderRadius='3px'>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <SearchBar />
        <Typography>
          IMDb<Box component='span'>Pro</Box>
        </Typography>
        <Box padding='5px 15px' borderRadius='3px'>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography className='hover-effect' padding='7px 10px' borderRadius='3px'>Sign In</Typography>
        <Box padding='5px 10px' borderRadius='3px'>
          <Typography className='hover-effect'>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
