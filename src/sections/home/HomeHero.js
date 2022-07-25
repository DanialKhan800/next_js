import { useRef } from "react";
// icons
import launchIcon from "@iconify/icons-carbon/launch";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Stack, Button, Container, Typography, Grid } from "@mui/material";
// hooks
import { useBoundingClientRect } from "../../hooks";
// routes
import Routes from "../../routes";
// components
import { Image, Iconify } from "../../components";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundImage: `url("/assets/images/jpeg/hero-background.webp")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto",
  backgroundPosition: "center",
  [theme.breakpoints.up("md")]: {
    height: "100vh",
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const containerRef = useRef(null);
  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <RootStyle>
      <Container sx={{ height: 1 }}>
        <Grid
          container
          columnSpacing={3}
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid item xs={12} md={5}>
            <Stack
              spacing={5}
              alignItems={{ xs: "center", md: "flex-start" }}
              justifyContent="center"
              sx={{
                py: 15,
                textAlign: { xs: "center", md: "left" },
                color: "#fff",
              }}
            >
              <Typography variant="h3">The Stock Market of NFTs</Typography>

              <Typography variant="body1">
                Hadaro is a multi chain platform offering a revolutionary
                experience for users to invest, sell and discover valuable NFTs
                as shares from real world brands.
              </Typography>

              <Button
                color="inherit"
                size="large"
                variant="contained"
                endIcon={<Iconify icon={launchIcon} />}
                target="_blank"
                rel="noopener"
                href={Routes.figmaPreview}
              >
                About Us
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      {/* <Box
        sx={{
          maxWidth: 1280,
          position: "absolute",
          bottom: { md: "20%", lg: 40 },
          right: { md: -110, xl: 0 },
          display: { xs: "none", md: "block" },
          width: { md: `calc(100% - ${offsetLeft}px)` },
        }}
      >
        <Image alt="home-hero" src="/assets/images/jpeg/hero.webp" />
      </Box> */}
    </RootStyle>
  );
}
