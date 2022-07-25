import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
//
import TeamData from "./TeamData";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

Team.propTypes = {
  members: PropTypes.array.isRequired,
};

export default function Team({ members }) {
  return (
    <RootStyle>
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 1, md: 2 },
          }}
        >
          The Team
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: { xs: 8, md: 10 },
          }}
        >
          The Hadaro team believes web3.0 and NFTs have the potential to change
          the way we consume products and services with brands. The way we
          perceive and interact with businesses have changed towards a greater
          purpose for both brands and consumers.
        </Typography>
        <Box
          sx={{
            display: "grid",
            rowGap: { xs: 4, md: 5 },
            columnGap: 3,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
          }}
        >
          {members.map((member) => (
            <TeamData key={member.id} member={member} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
