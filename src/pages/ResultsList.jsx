import MoviesList from "../components/MoviesList";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
import Footer from "../components/Footer";

const Container = styled(Box)`
  background: #F5F5F5;
  padding: 10px;
  width: 80%;
  margin: auto;
`;

const TitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 2.5rem;
`;

const YellowLine = styled(Box)`
  height: 2.5rem;
  width: 4px;
  background-color: #FFBF00;
  border-radius:2px;
`;

const ResultsList = () => {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=613865169038fb622f2f8cb2ea97cd70&query=${searchQuery}`
        );
        const searchResults = response.data.results;
        setSearchResults(searchResults);
      } catch (error) {
        console.error(error);
      }
    };

    searchMovies();
  }, [searchQuery]); 

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h1" fontSize='3rem' marginBottom='3.5rem' marginTop='0.8rem'>Search {`"${searchQuery}"`}</Typography>
        <TitleWrapper>
          <YellowLine />
          <Typography variant="h4" fontWeight={600}>Titles</Typography>
        </TitleWrapper>
        <MoviesList movies={searchResults} />
      </Container>
      <Footer/>
    </>
  );
}

export default ResultsList;
