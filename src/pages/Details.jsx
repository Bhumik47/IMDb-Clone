import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Star } from "@mui/icons-material";
import Footer from "../components/Footer";

const StyledBanner = styled("img")({
  height: 500,
  width: "80%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
});

const MovieDetailsContainer = styled(Box)`
  position: relative;
  height: 50vh;
`;

const MovieDetails = styled(Box)`
  display: flex;
  position: absolute;
  top: -14rem;
  left: 11rem;
  gap: 2rem;
`;

const Poster = styled("img")({
  borderRadius: 10,
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
});

const SubDetails = styled(Box)`
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5),
    -1px 1px 2px rgba(0, 0, 0, 0.5),
    1px -1px 2px rgba(0, 0, 0, 0.5),
    -1px -1px 2px rgba(0, 0, 0, 0.5);

  color: #ffffff;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Genre = styled(Typography)`
  border: 2px solid #ffffff;
  display: inline-block;
  padding: 5px 10px;
  margin-right: 15px;
  border-radius: 20px;
`;

const IMDbContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const IMDbButton = styled(Button)`
  border-radius: 2rem;
  width: 20rem;
  height: 40px;
  font-weight: 600;
  background-color: #daa520;
  border: 2px solid #ffffff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }
`;

const Production = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h4 {
    margin-top: 4rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProductionCompaniesContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const ProductionCompany = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductionCompanyLogo = styled("img")`
  width: 200px;
  height: 120px;
  border-radius: 5%;
  margin-bottom: 1rem;
`;

const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=613865169038fb622f2f8cb2ea97cd70`
        );
        const data = response.data;
        setMovie(data);
      } catch (error) {
        console.log("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const redirectToIMDb = () => {
    const imdbId = movie.imdb_id;
    window.open(`https://www.imdb.com/title/${imdbId}`, "_blank");
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <>
      <Header />
      <Box>
        <StyledBanner
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="banner"
        />
      </Box>
      <MovieDetailsContainer>
        <MovieDetails>
          <Poster
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="poster"
          />
          <SubDetails>
            <Typography variant="h3" fontWeight="600">
              {movie.title}
            </Typography>
            <Typography>{movie.tagline}</Typography>
            <Typography>
              Rating:{" "}
              <Star
                sx={{ verticalAlign: "middle", fontSize: "1.3rem" }}
                color="warning"
              />{" "}
              {movie.vote_average}
            </Typography>
            <Typography>Duration: {movie.runtime} minutes</Typography>
            <Typography>Release Date: {movie.release_date}</Typography>
            <Typography>
              {movie.genres &&
                movie.genres.map((genre) => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
            </Typography>

            <Typography variant="h5" fontWeight="600" margin="15px 0 5px 0">
              Synopsis:
            </Typography>
            <Typography>{movie.overview}</Typography>
          </SubDetails>
        </MovieDetails>
      </MovieDetailsContainer>

      <IMDbContainer>
        <Typography variant="h4" color="#ffffff">
          Watch Trailer and Learn More :
        </Typography>

        <IMDbButton onClick={redirectToIMDb}>IMDb</IMDbButton>
      </IMDbContainer>
      <Production>
        <Typography variant="h4" color="#ffffff">
          Production Companies
        </Typography>
        <ProductionCompaniesContainer>
          {movie.production_companies &&
            movie.production_companies.map((company) => (
              <ProductionCompany key={company.id}>
                <ProductionCompanyLogo
                  src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                  alt={company.name}
                />
                <Typography color="#ffffff">{company.name}</Typography>
              </ProductionCompany>
            ))}
        </ProductionCompaniesContainer>
      </Production>
      <Footer/>
    </>
  );
};

export default Details;
