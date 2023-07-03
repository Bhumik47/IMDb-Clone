import React, { useState, useEffect } from 'react';
import { InputBase, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import { routhPath } from '../constants/route';
import { useNavigate } from 'react-router-dom';
import SearchResult from './SearchResult';

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  background: '#232323',
  borderRadius: '4px',
  padding: '2px',
  width: '36rem',
});

const SearchInput = styled(InputBase)({
  color: '#fff',
  marginLeft: '8px',
  flex: 1,
  '& input': {
    paddingLeft: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
});

const SearchButton = styled(IconButton)({
  padding: '6px',
  color: '#bdbdbd',
});

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    clearTimeout(typingTimeout);

    setTypingTimeout(setTimeout(() => {
      searchMovies(query);
    }, 1000));
  };

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=613865169038fb622f2f8cb2ea97cd70&query=${query}`
      );
      const searchResults = response.data.results;
      setSearchResults(searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    clearTimeout(typingTimeout);
    searchMovies(searchQuery);
    navigate(`${routhPath.result}/${searchQuery}`);
    setSearchQuery('');
  };

  useEffect(() => {
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [typingTimeout]);

  return (
    <form onSubmit={handleSearchSubmit}>
      <SearchContainer>
        <SearchInput
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search movies..."
        />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </SearchContainer>
      {searchResults.length > 0 && searchQuery !== '' && <SearchResult searchResults={searchResults} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>}
    </form>
  );
};

export default SearchBar;
