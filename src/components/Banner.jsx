import { Box, Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Star } from '@mui/icons-material';
import { routhPath } from '../constants/route';
import { useNavigate } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled('div')`
  width: 100%;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  min-height: 500px;
  position: relative;
`;

const BannerContent = styled('div')`
  padding: 20px;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  display: flex;
  align-items: flex-end;
  gap: 20px;
  box-shadow: inset 0px -150px 40px -80px rgba(0, 0, 0, 0.8);
`;




const Poster = styled('img')`
  width: 170px;
  height: auto;
  margin-right: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

const CustomCarousel = styled(Carousel)`
cursor:pointer;
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
    right: 0;
    top: 30%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    height: 65px;
    width: 50px;
    border-radius: 5px;
  }

  .react-multiple-carousel__arrow {
    border: 1px solid #ffffff;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &::before {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      transition: color 0.3s;
    }

    &:hover::before {
      color: darkgoldenrod;
    }
  }
`;

const Banner = ({ movies }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`${routhPath.details}/${id}`);
  };

  return (
    <Box style={{ width: '100%' }}>
      <CustomCarousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        slidesToSlide={1}
      >
        {movies.map((movie) => (
          <StyledBanner
            key={movie.id}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            }}
            onClick={() => handleClick(movie.id)}
          >
            <BannerContent>
              <Poster src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="poster" />
              <Box  display='flex' gap='0.5rem' flexDirection='column'>
                <Typography variant="h3" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
                  {movie.title}
                </Typography>
                <div style={{ display: 'flex', gap: 25 }}>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: '23px',
                      color: '#bdbdbd',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    {movie.release_date}
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: '23px',
                      color: '#bdbdbd',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    <Star sx={{ verticalAlign: 'middle', fontSize: '1.3rem' }} color="warning" />{' '}
                    {movie.vote_average}
                  </Typography>
                  
                </div>
                <Typography fontStyle='italic' color='#bdbdbd'>{movie.overview}</Typography>
              </Box>
            </BannerContent>
          </StyledBanner>
        ))}
      </CustomCarousel>
    </Box>
  );
};

export default Banner;
