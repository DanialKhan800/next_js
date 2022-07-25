import React from 'react';
// mui
import { Grid, Container, Box } from '@mui/material';

// slider
import Slider from 'react-slick';

// common
import { CardHeading, AuctionCard } from '../../components/shared';

export default function AuctionSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,

    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
            <CardHeading text="Live Auctions"></CardHeading>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Slider {...settings}>
              <AuctionCard />
              <AuctionCard />
              <AuctionCard />
              <AuctionCard />
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
