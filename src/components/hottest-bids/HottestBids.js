import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Container, Avatar, Card, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import ViewsSection from '../shared/ViewsSection';
import PriceSection from '../shared/PriceSection';
import CardHeading from '../shared/CardHeading';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    paddingTop: 0,
  },
}));

export default function HottestBids() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '1300px',
        pt: '160px',
      }}
    >
      <Box
        sx={{
          width: 'auto',
          height: 'auto',
          justifyContent: 'center',
          display: 'flex',
          overflow: 'hidden',
          alignItems: 'center',
          marginBottom: '59px !important',
        }}
      >
        <CardHeading text="Hottest Bids over last">
          <Box component="span" sx={{ color: theme.palette.brandpurple.primary }}>
            &nbsp;7 days
          </Box>
        </CardHeading>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="bids-card" sx={{ borderColor: 'grey.400', width: '100%' }}>
            <Grid container>
              <Grid item xs={8} sm={6}>
                <AvatarTypo src="/assets/images/svgs/avatar1.svg" text="Undersea Rock" />
              </Grid>

              <Grid item xs={4} sm={6}>
                <Box
                  height="100%"
                  sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-evenly' } }}
                >
                  <ViewsSection src="/assets/images/svgs/view.svg" text="(405k)" />
                  <PriceSection src="/assets/images/svgs/fireIcon.svg" text="0.908 ETH" />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="bids-card" sx={{ borderColor: 'grey.400', width: '100%' }}>
            <Grid container>
              <Grid item xs={8} sm={6}>
                <AvatarTypo src="/assets/images/svgs/avatar1.svg" text="Undersea Rock" />
              </Grid>

              <Grid item xs={4} sm={6}>
                <Box
                  height="100%"
                  sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-evenly' } }}
                >
                  <ViewsSection src="/assets/images/svgs/view.svg" text="(405k)" />
                  <PriceSection src="/assets/images/svgs/fireIcon.svg" text="0.908 ETH" />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="bids-card" sx={{ borderColor: 'grey.400', width: '100%' }}>
            <Grid container>
              <Grid item xs={8} sm={6}>
                <AvatarTypo src="/assets/images/svgs/avatar1.svg" text="Undersea Rock" />
              </Grid>

              <Grid item xs={4} sm={6}>
                <Box
                  height="100%"
                  sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-evenly' } }}
                >
                  <ViewsSection src="/assets/images/svgs/view.svg" text="(405k)" />
                  <PriceSection src="/assets/images/svgs/fireIcon.svg" text="0.908 ETH" />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="bids-card" sx={{ borderColor: 'grey.400', width: '100%' }}>
            <Grid container>
              <Grid item xs={8} sm={6}>
                <AvatarTypo src="/assets/images/svgs/avatar1.svg" text="Undersea Rock" />
              </Grid>

              <Grid item xs={4} sm={6}>
                <Box
                  height="100%"
                  sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-evenly' } }}
                >
                  <ViewsSection src="/assets/images/svgs/view.svg" text="(405k)" />
                  <PriceSection src="/assets/images/svgs/fireIcon.svg" text="0.908 ETH" />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="bids-card" sx={{ borderColor: 'grey.400', width: '100%' }}>
            <Grid container>
              <Grid item xs={8} sm={6}>
                <AvatarTypo src="/assets/images/svgs/avatar1.svg" text="Undersea Rock" />
              </Grid>

              <Grid item xs={4} sm={6}>
                <Box
                  height="100%"
                  sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-evenly' } }}
                >
                  <ViewsSection src="/assets/images/svgs/view.svg" text="(405k)" />
                  <PriceSection src="/assets/images/svgs/fireIcon.svg" text="0.908 ETH" />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="bids-card" sx={{ borderColor: 'grey.400', width: '100%' }}>
            <Grid container>
              <Grid item xs={8} sm={6}>
                <AvatarTypo src="/assets/images/svgs/avatar1.svg" text="Undersea Rock" />
              </Grid>

              <Grid item xs={4} sm={6}>
                <Box
                  height="100%"
                  sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-evenly' } }}
                >
                  <ViewsSection src="/assets/images/svgs/view.svg" text="(405k)" />
                  <PriceSection src="/assets/images/svgs/fireIcon.svg" text="0.908 ETH" />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="bids-card" sx={{ borderColor: 'grey.400', width: '100%' }}>
            <Grid container>
              <Grid item xs={8} sm={6}>
                <AvatarTypo src="/assets/images/svgs/avatar1.svg" text="Undersea Rock" />
              </Grid>

              <Grid item xs={4} sm={6}>
                <Box
                  height="100%"
                  sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-evenly' } }}
                >
                  <ViewsSection src="/assets/images/svgs/view.svg" text="(405k)" />
                  <PriceSection src="/assets/images/svgs/fireIcon.svg" text="0.908 ETH" />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="bids-card" sx={{ borderColor: 'grey.400', width: '100%' }}>
            <Grid container>
              <Grid item xs={8} sm={6}>
                <AvatarTypo src="/assets/images/svgs/avatar1.svg" text="Undersea Rock" />
              </Grid>

              <Grid item xs={4} sm={6}>
                <Box
                  height="100%"
                  sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-evenly' } }}
                >
                  <ViewsSection src="/assets/images/svgs/view.svg" text="(405k)" />
                  <PriceSection src="/assets/images/svgs/fireIcon.svg" text="0.908 ETH" />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export function AvatarTypo({ src, text }) {
  return (
    <Box display={'flex'} alignItems="center" sx={{ marginLeft: { xs: '16px' } }} height="100%">
      <Avatar src={src} alt="avatar" />
      <Typography variant="h5" ml="10px">
        {text}
      </Typography>
    </Box>
  );
}
