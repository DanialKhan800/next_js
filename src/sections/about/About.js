import PropTypes from "prop-types";
import { useState } from "react";
// icons
import trophyIcon from "@iconify/icons-carbon/trophy";
import dataVis4 from "@iconify/icons-carbon/data-vis-4";
import increaseLevel from "@iconify/icons-carbon/increase-level";
import userCertification from "@iconify/icons-carbon/user-certification";
import directionStraightRight from "@iconify/icons-carbon/direction-straight-right";
// @mui
import { styled, alpha } from "@mui/material/styles";
import { Grid, Box, Container, Typography, Button } from "@mui/material";
// utils
// components
import { Iconify, Image } from "../../components";
import Team from "./Team";

// ----------------------------------------------------------------------

const SUMMARY = [
  { title: "Years of experience", total: 12, icon: increaseLevel },
  { title: "Awards", total: 20, icon: trophyIcon },
  { title: "Projects", total: 150, icon: dataVis4 },
  { title: "Happy clients", total: 32000, icon: userCertification },
];

const COLORS = ["primary", "secondary", "warning", "success"];

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, 0),
  },
}));

const IconStyle = styled("div", {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  position: "relative",
  justifyContent: "center",
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  "&:before": {
    zIndex: 8,
    content: '""',
    borderRadius: "50%",
    position: "absolute",
    width: "calc(100% - 48px)",
    height: "calc(100% - 48px)",
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  "& svg": {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Mustafa Assaad",
      role: "Founder & CEO",
      photo: `/assets/images/jpeg/mustafa.jpeg`,
      socialLinks: {
        facebook: `facebook.com`,
        instagram: `instagram.com`,
        linkedin: `https://www.linkedin.com/in/mustafa-assaad-b82839212`,
        twitter: `twitter.com`,
      },
    },
    {
      id: 2,
      name: "Ali Balaghe",
      role: "CMO",
      photo: `/assets/images/jpeg/ali.jpeg`,
      socialLinks: {
        facebook: `facebook.com`,
        instagram: `https://instagram.com/alz_ecom?utm_medium=copy_lin`,
        linkedin: `linkedin.com`,
        twitter: `twitter.com`,
      },
    },
    {
      id: 3,
      name: "Andy",
      role: "Token Economist and Writer",
      photo: `/assets/images/jpeg/andy.jpeg`,
      socialLinks: {
        facebook: `facebook.com`,
        instagram: `instagram.com`,
        linkedin: `linkedin.com`,
        twitter: `twitter.com`,
      },
    },
    {
      id: 4,
      name: "Asad Ali",
      role: "Block Chain Developer",
      photo: `/assets/images/jpeg/asad.png`,
      socialLinks: {
        facebook: `facebook.com`,
        instagram: `instagram.com`,
        linkedin: `linkedin.com`,
        twitter: `twitter.com`,
      },
    },
  ]);
  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography variant="h2">ABOUT US</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: "text.secondary" }}>
              The future of buying and selling brand shares as NFTs.
              <br />
              Hadaro is a multi chain platform offering a revolutionary
              experience for users to invest, sell and discover valuable NFTs as
              shares from real world brands.
              <br />
            </Typography>
            <Typography variant="h2">VISION</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: "text.secondary" }}>
              Hadaro is built for mainstream adoption and focuses on turning the
              NFT industry into 100 billion dollar industry by 2025 all while
              creating a thriving token economy.
              <br />
              At Hadaro we understand the importance of utility behind NFTs,
              that is the reason why NFTs have become extremely popular.
              <br />
              Hadaro obsessively focuses on NFTs that provides access to
              exclusive utility from real world brands to consumers, changing
              the way we interact with brands forever.
              <br />
              We strive to be the worlds most valuable NFT platform, every NFT
              is a valuable purchase for all investors and collectors. <br />
              Every NFT that’s listed on the hadaro marketplace is linked to
              exclusive real word utility, virtual experiences, iconic pieces,
              digital assets and so much more.
              <br />
            </Typography>
            <Typography variant="h2">MISSION</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: "text.secondary" }}>
              Hadaro’s strives to offer a smooth experience for the new age
              consumers to enter the NFT industry to invest, sell and discover
              the most richest and valuable NFTs as shares from their favourite
              real world brands.
            </Typography>
            <Typography variant="h2">COMPANY CULTURE</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: "text.secondary" }}>
              * Believe you are powerful and are capable of anything <br />* we
              challenge the status quo and give power back to the people through
              digital ownership. <br />* We focus obsessively on user experience
              because we are users ourselves and our community is our number 1
              priority <br />* We empower self belief and ambitions to create a
              phenomenal world for now and future <br />* We find humour in the
              face of difficulties and continue solving problems together
              regardless
              <br />* We celebrate small wins and big wins together and develop
              deeper connections <br />* We don’t compete, we create & everyday
              is an advancement for all <br />* We go the extra mile * All work
              is efficient and high quality.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Team members={members} />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

BoxItem.propTypes = {
  index: PropTypes.number,
  value: PropTypes.shape({
    icon: PropTypes.any,
    title: PropTypes.string,
    total: PropTypes.number,
  }),
};

function BoxItem({ value, index }) {
  return (
    <div>
      <IconStyle color={COLORS[index]}>
        <Iconify icon={value.icon} sx={{ width: 48, height: 48 }} />
      </IconStyle>
      <Typography sx={{ color: "text.secondary" }}>{value.title}</Typography>
    </div>
  );
}

// ----------------------------------------------------------------------
