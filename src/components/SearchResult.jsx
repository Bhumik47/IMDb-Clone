import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Star } from '@mui/icons-material';
import { routhPath } from '../constants/route';
import { useNavigate } from 'react-router-dom';

const ResultItem = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid gray;
  cursor: pointer;
  
  &:hover {
    background-color: #333333;
  }
`;

const Poster = styled('img')({
  height: '5rem',
  width: '3.5rem',
  borderRadius: '1px',
  alignSelf: 'flex-start'
});

const MovieDetails = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const SearchResult = ({ searchResults, searchQuery, setSearchQuery }) => {
  const limitedResults = searchResults.slice(0, 8); 

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`${routhPath.details}/${id}`);
    // console.log(`this is path: ${routhPath.details}/${id}`)
    // console.log(`this is path: ${routhPath.details}`)
    // console.log(`this is path:${id}`)
  };
  const handleQuery = () => {
    setSearchQuery('')
  }
  
return (
    <div style={{ borderRadius: '2px', position: 'absolute', zIndex: 1, width: '36rem', background: '#232323', top: '56px' }}>
      {limitedResults.map((movie) => (
        <ResultItem key={movie.id} onClick={() => {handleClick(movie.id)
         handleQuery()}}>
          <Box>
            <Poster
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </Box>
          <MovieDetails className="movie-details">
            <Typography variant='h6' fontSize='17px' color='#ffffff'>{movie.title}</Typography>
            <Typography color='#bdbdbd' fontSize='14px'> Rating:
              <Star
                sx={{ verticalAlign: 'middle', fontSize: '1.3rem' }}
                color="warning"
              />
              {movie.vote_average}
            </Typography>
            <Typography color='#bdbdbd' fontSize='14px'>{movie.release_date.slice(0, 4)}</Typography>
          </MovieDetails>
        </ResultItem>
      ))}
    </div>
  );
};

export default SearchResult;
