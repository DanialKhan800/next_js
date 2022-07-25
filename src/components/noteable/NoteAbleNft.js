import Grid from "@mui/material/Grid";
import { Container, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ContainedImageCard } from "../shared";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { spacing } from "@mui/system";
import CardHeading from "../shared/CardHeading";

const RootStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
}));

export default function NoteAbleNft() {
  const theme = useTheme();
  return (
    <RootStyle>
      <Container
        maxWidth={false}
        sx={{
          boxShadow: (theme) => ({
            xs: 0,
          }),
          maxWidth: "1300px",
          pt: "160px",
        }}
      >
        <Box
          sx={{
            width: "auto",
            height: "auto",
            justifyContent: "space-between",
            display: "flex",
            overflow: "hidden",
            alignItems: "center",
            marginBottom: "59px !important",
          }}
        >
          <CardHeading text="Notable NFTs" />

          <Typography
            variant="h4"
            sx={{ color: theme.palette.brandcolor.primary }}
          >
            <Link
              href="#"
              underline="always"
              color="inherit"
              sx={{ color: theme.palette.brandcolor.primary }}
            >
              Browse All
            </Link>
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <ContainedImageCard
              cardWidth="415"
              cardHeight="426"
              src="/assets/images/svgs/noteable1.svg"
              alt="card"
              width="100%"
              height="100%"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <ContainedImageCard
              cardWidth="415"
              cardHeight="426"
              src="/assets/images/svgs/noteable2.svg"
              alt="card"
              width="100%"
              height="100%"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <ContainedImageCard
              cardWidth="415"
              cardHeight="426"
              src="/assets/images/svgs/noteable3.svg"
              alt="card"
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
