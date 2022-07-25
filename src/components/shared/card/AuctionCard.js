import React from 'react';
//mui
import { Box, Grid, Typography, AvatarGroup, Avatar } from '@mui/material';
// shared
import { Image } from '../../../components';
import { PriceSection } from '../../../components/shared';
import LikesSection from '../LikesSection';

export default function AuctionCard() {
  let image = '/assets/images/svgs/noteable1.svg';
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '410px',
    borderRadius: '20px',
  };
  return (
    <Box className="box">
      <Box padding={3}>
        <Grid
          style={sectionStyle}
          container
          display="flex"
          direction={'column'}
          justifyContent="space-between"
        >
          <Grid item pl={4} pt={1} display="flex" justifyContent="flex-start">
            <AvatarGroup max={3} spacing="small">
              <Avatar alt="Remy Sharp" src="/assets/images/svgs/stagelogo.svg" />
              <Avatar alt="Travis Howard" src="/assets/images/svgs/stagelogo.svg" />
              <Avatar alt="Cindy Baker" src="/assets/images/svgs/stagelogo.svg" />
            </AvatarGroup>
          </Grid>
          <Grid item display="flex" justifyContent="center" height="100px">
            <Box className="timer-box" display="flex" alignItems={'center'} px={2}>
              <Grid container display={'flex'} alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="subtitle1">Time Left</Typography>
                </Grid>
                <Grid item>
                  <Box width="13px" height="18px">
                    <Image src="/assets/images/svgs/fireIcon.svg" />
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <Typography variant="h4">02:05:55</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box px={3} pb={2}>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <Typography variant="h5">Undersea Rock</Typography>
            <LikesSection src="/assets/images/svgs/fireIcon.svg" text="90" />
          </Grid>
          <Grid
            item
            xs={5}
            display="flex"
            justifyContent={'flex-end'}
            alignItems="center"
            height={'100%'}
          >
            <PriceSection src="/assets/images/svgs/fireIcon.svg" text="0.908 ETH" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
