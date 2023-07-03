import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { categoryMovies } from "../services/api";
import { NOWPLAYING_API_URL, UPCOMING_API_URL, TOPRATED_API_URL, POPULAR_API_URL } from "../constants/constant";
import { Box, styled, Typography } from "@mui/material";
import Banner from "../components/Banner";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import { routhPath } from "../constants/route";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;

const Component = styled(Box)`
  padding: 0 115px;
`;

const TitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 1rem;
`;

const YellowLine = styled(Box)`
  height: 2rem;
  width: 4px;
  background-color: #FFBF00;
  border-radius: 2px;
`;

const Slidercontainer = styled(Box)`
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const promises = [
        categoryMovies(NOWPLAYING_API_URL),
        categoryMovies(UPCOMING_API_URL),
        categoryMovies(POPULAR_API_URL),
        categoryMovies(TOPRATED_API_URL)
      ];

      const [nowPlayingResponse, upcomingResponse, popularResponse, topRatedResponse] = await Promise.all(promises);

      setMovies(nowPlayingResponse.results);
      setUpcomingMovies(upcomingResponse.results);
      setPopularMovies(popularResponse.results);
      setTopratedMovies(topRatedResponse.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies}/>
        </Wrapper>
        <Slidercontainer>
          <Link to={`${routhPath.categories}?category=now`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <TitleWrapper>
              <YellowLine />
              <Typography variant="h5" fontWeight={600} color='#ffffff'>Now Playing</Typography>
            </TitleWrapper>
          </Link>
          <Slide movies={movies} />
        </Slidercontainer>

        <Slidercontainer>
          <Link to={`${routhPath.categories}?category=upcoming`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <TitleWrapper>
              <YellowLine />
              <Typography variant="h5" fontWeight={600} color='#ffffff'>Upcoming Movies</Typography>
            </TitleWrapper>
          </Link>
          <Slide movies={upcomingMovies} />
        </Slidercontainer>

        <Slidercontainer>
          <Link to={`${routhPath.categories}?category=popular`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <TitleWrapper>
              <YellowLine />
              <Typography variant="h5" fontWeight={600} color='#ffffff'>Popular Movies</Typography>
            </TitleWrapper>
          </Link>
          <Slide movies={popularMovies} />
        </Slidercontainer>

        <Slidercontainer>
          <Link to={`${routhPath.categories}?category=toprated`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <TitleWrapper>
              <YellowLine />
              <Typography variant="h5" fontWeight={600} color='#ffffff'>Top Rated Movies</Typography>
            </TitleWrapper>
          </Link>
          <Slide movies={topratedMovies} />
        </Slidercontainer>
      </Component>
      <Footer />
    </>
  );
};

export default Home;
