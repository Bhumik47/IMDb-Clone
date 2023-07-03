import { Star } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { routhPath } from '../constants/route';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const StyledBanner = styled('img')`
  width: 100%;
  margin-top: 20px;
`;

const Title = styled(Typography)`
  color: #FFFFFF;
  font-weight: 600;
`;

const Info = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 7rem;
  margin: 10px;
`;

const Container = styled(Box)`
  background: #121212;
  width: 13rem;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const CustomCarousel = styled(Carousel)`
  .react-multiple-carousel__arrow--left {
    left: 0;
    top: 30%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    height: 65px;
    width: 50px;
    border-radius: 5px;
  }

  .react-multiple-carousel__arrow--right {
    border: 1px solid #ffffff;
    right: 1rem;
    top: 30%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    height: 65px;
    width: 50px;
    border-radius: 5px;
  }

  .react-multiple-carousel__arrow {
    border: 1px solid #ffffff;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &::before {
      color: #fff;
      font-size: 24px;
      font-weight:600;
      transition: color 0.3s;
    }

    &:hover::before {
      color: darkgoldenrod;
    }
  }
`;

const Slide = ({ movies }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`${routhPath.details}/${id}`);
  };

  return (
    <CustomCarousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      slidesToSlide={1}
    >
      {movies.map((movie) => (
        <Container key={movie.id} onClick={() => handleClick(movie.id)}>
          <Box>
            <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="banner" />
          </Box>
          <Info>
            <Typography color="#D3D3D3">
              <Star sx={{ verticalAlign: "middle", fontSize: "1.3rem" }} color="warning" />
              {movie.vote_average}
            </Typography>
            <Title>{movie.original_title}</Title>
          </Info>
        </Container>
      ))}
    </CustomCarousel>
  );
};

export default Slide;
