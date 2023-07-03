// MoviesList.jsx

import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../constants/route";



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
    background-color:#e8e8e8;
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
const MoviesList = ({ movies }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`${routhPath.details}/${id}`);
  };

  return (
    <>
      {movies.map((movie) => (
         <ResultItem key={movie.id} onClick={() => handleClick(movie.id)}>
          <Box>
            <Poster
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </Box>
          <MovieDetails className="movie-details">
            <Typography variant='h6' fontSize='17px' color='#000' fontWeight='600'>{movie.title}</Typography>
            <Typography color='gray' fontSize='14px'> Rating:
              <Star
                sx={{ verticalAlign: 'middle', fontSize: '1.3rem' }}
                color="warning"
              />
              {movie.vote_average}
            </Typography>
            <Typography color='gray' fontSize='14px'>{movie.release_date.slice(0, 4)}</Typography>
          </MovieDetails>
        </ResultItem>
        
      ))}
    </>
  );
};

export default MoviesList;
