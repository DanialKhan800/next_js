import { useRef } from 'react';
import Slider from 'react-slick';
import { m } from 'framer-motion';
// next

// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Container } from '@mui/material';

//
import { Image, CarouselDots, CarouselArrows } from '../../components';
import { CardHeading } from '../../components/shared';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function CustomSlider() {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const carouselSettings = {
    // arrows: false,
    // dots: true,
    // infinite: false,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // rtl: Boolean(theme.direction === 'rtl'),
    // ...CarouselDots(),

    // centerMode: true, // - (Gilad, 20.2.17) - we wanted it but it doesn't work for some reason...
    // draggable: true,
    // speed: 500,
    // slidesToShow: 3, //changes on responsive
    // slidesToScroll: 1,
    // responsive: [{ breakpoint: 500, settings: { autoplay: true, slidesToShow: 1 } }],
    // dots: true,
    //...CarouselDots(),
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: true,
    // centerPadding: '60px',
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '1300px',
        pt: '150px',
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '59px !important',
              padding: {
                md: '0px 20px',
                lg: '0px 40px',
              },
            }}
          >
            <CardHeading
              text="Discover, collect, Create and 
sell extraordinary NFTs"
            ></CardHeading>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Slider ref={carouselRef} {...carouselSettings}>
              <Box component={m.a} sx={{ borderRadius: 1.5 }}>
                <Image
                  alt="cover"
                  src="/assets/images/svgs/noteable2.svg"
                  sx={{
                    borderRadius: 1.5,
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                  }}
                />
              </Box>
              <Box component={m.a} sx={{ borderRadius: 1.5 }}>
                <Image
                  alt="cover"
                  src="/assets/images/svgs/noteable1.svg"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                  }}
                />
              </Box>
              <Box component={m.a} sx={{ borderRadius: 1.5 }}>
                <Image
                  alt="cover"
                  src="/assets/images/svgs/noteable2.svg"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                  }}
                />
              </Box>
              <Box component={m.a} sx={{ borderRadius: 1.5 }}>
                <Image
                  alt="cover"
                  src="/assets/images/svgs/noteable3.svg"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                  }}
                />
              </Box>
              <Box component={m.a} sx={{ borderRadius: 1.5 }}>
                <Image
                  alt="cover"
                  src="/assets/images/svgs/noteable1.svg"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                  }}
                />
              </Box>
            </Slider>
            <CarouselArrows
              onNext={handleNext}
              onPrevious={handlePrevious}
              sx={{
                top: -10,
                position: 'relative',
                justifyContent: 'flex-end',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
