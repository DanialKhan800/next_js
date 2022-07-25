import PropTypes from "prop-types";
import { useState } from "react";
// icons
import chevronDown from "@iconify/icons-carbon/chevron-down";
import chevronRight from "@iconify/icons-carbon/chevron-right";
// next
import NextLink from "next/link";
// @mui
import Masonry from "@mui/lab/Masonry";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Link,
  Stack,
  Divider,
  Collapse,
  Container,
  Typography,
} from "@mui/material";
// hooks
import { useResponsive } from "../../hooks";
// components
import { Iconify, SocialsButton } from "../../components";
//
import { FooterPageLinks } from "../nav/NavConfig";

import CustomLogo from "../CustomLogo";
import { CustomEmail } from "src/components/shared";

// ----------------------------------------------------------------------

export default function Footer() {
  const isDesktop = useResponsive("up", "md");

  const lists = FooterPageLinks.filter(
    (list) => list.subheader !== "Coming Soon"
  );

  const renderLists = isDesktop
    ? lists
    : lists.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  return (
    <>
      <Divider />
      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={3} justifyContent={{ md: "space-between" }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
                <CustomLogo />
              </Stack>

              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h6">
                    Be the first to find out when we launch
                  </Typography>
                </Stack>
                <CustomEmail />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {isDesktop ? (
              <Masonry columns={3} spacing={3}>
                {renderLists.map((list, index) => (
                  <ListDesktop key={index} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {renderLists.map((list, index) => (
                  <ListMobile key={index} list={list} />
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2.5}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: "center" }}
        >
          <Typography variant="subtitle1">
            Hadaro, Inc. All Rights Reserved
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
            <SocialsButton />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

NextLinkItem.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};
function NextLinkItem({ children, sx, ...other }) {
  const theme = useTheme();
  return (
    <NextLink passHref {...other}>
      <Link
        variant="body3"
        sx={{
          mt: 1,
          color:
            theme.palette.mode === "light"
              ? theme.palette.brandcolor.primary
              : "#fff",
          "&:hover": {
            color:
              theme.palette.mode === "light"
                ? theme.palette.brandcolor.primary
                : "#fff",
          },
          ...sx,
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
}

// ----------------------------------------------------------------------

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListDesktop({ list }) {
  const { subheader, items } = list;

  return (
    <Stack alignItems="flex-start" sx={{ pb: { md: 1 } }}>
      <Typography variant="h6">{subheader}</Typography>
      {items?.map((link) => (
        <NextLinkItem key={link.title} href={link.path}>
          {link.title}
        </NextLinkItem>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

function ListMobile({ list }) {
  const { subheader, items } = list;
  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="h6"
        onClick={onExpand}
        sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        {subheader}
        <Iconify
          icon={expand ? chevronDown : chevronRight}
          sx={{ width: 20, height: 20, ml: 0.5 }}
        />
      </Typography>

      <Collapse in={expand} sx={{ width: 1 }}>
        <Box
          sx={{
            display: "grid",
            rowGap: 1,
            columnGap: 3,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            },
          }}
        >
          {items?.map((link) => (
            <NextLinkItem key={link.title} href={link.path}>
              {link.title}
            </NextLinkItem>
          ))}
        </Box>
      </Collapse>
    </Stack>
  );
}
