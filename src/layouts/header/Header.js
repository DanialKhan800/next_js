import PropTypes from "prop-types";
// next
import Link from "next/link";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Stack,
  Button,
  AppBar,
  Divider,
  Container,
  Typography,
} from "@mui/material";
// hooks
import { useOffSetTop, useResponsive } from "../../hooks";
// routes
import Routes from "../../routes";
// config
import { HEADER_DESKTOP_HEIGHT } from "../../config";
//
import { NavMobile, NavDesktop, navConfig } from "../nav";
import { ToolbarStyle, ToolbarShadowStyle } from "./HeaderToolbarStyle";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CustomLogo from "../CustomLogo";
import { getUserCookie } from "../../utils/getCookies";
import { removeCookies } from "../../utils/storeCookies";

// ----------------------------------------------------------------------

Header.propTypes = {
  transparent: PropTypes.bool,
};

export default function Header({ transparent }) {
  const router = useRouter();
  const theme = useTheme();
  const token = getUserCookie();

  const isDesktop = useResponsive("up", "md");

  const isLight = theme.palette.mode === "light";

  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClose() {
    setAnchorEl(null);
  }
  const data = [
    {
      title: "Create NFT",
      path: "#",
      src: "/assets/images/svgs/createNft.svg",
    },
    {
      title: " Create Collections",
      path: "#",
      src: "/assets/images/svgs/createNft.svg",
    },
  ];
  const handleSignOut = () => {
    removeCookies();
    router.push("/");
  };
  // **************** Meta Mask ********************
  //
  //  Defined function to connect and disconnect metamask
  //
  // ***********************************************

  //**********************************************************************/
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        disableGutters
        transparent={transparent}
        scrolling={isScrolling}
      >
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            maxWidth: "1300px",
          }}
        >
          <CustomLogo />
          <Box sx={{ flexGrow: 1 }} />

          <Stack spacing={2} direction="row" alignItems="center">
            {isDesktop && (
              <NavDesktop
                isScrolling={isScrolling}
                isTransparent={transparent}
                navConfig={navConfig}
              />
            )}

            <Divider orientation="vertical" sx={{ height: 24 }} />
            {/* <Searchbar
              sx={{
                ...(isScrolling && { color: "text.primary" }),
              }}
            /> */}
            {isDesktop && (
              <Stack direction="row" spacing={1}>
                {token ? (
                  <Button
                    variant="containedInherit"
                    href={Routes.buyNow}
                    target="_blank"
                    rel="noopener"
                    onClick={handleSignOut}
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    {" "}
                    <Link href="/sign-up">
                      <Button
                        variant="containedInherit"
                        href={Routes.buyNow}
                        target="_blank"
                        rel="noopener"
                      >
                        Sign Up
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button
                        variant="outlinedInherit"
                        sx={{ minWidth: "104px" }}
                      >
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </Stack>
            )}
          </Stack>

          {!isDesktop && (
            <NavMobile
              navConfig={navConfig}
              sx={{
                ml: 1,
                ...(isScrolling && { color: "text.primary" }),
              }}
            />
          )}
        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
}
