import React from "react";
import { Image } from "..";
import { styled } from "@mui/material/styles";
import { MenuItem, Menu, Link, Box } from "@mui/material";
import NextLink from "next/link";

const MenuItemStyle = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active, theme }) => ({
  fontSize: theme.typography.subtitle2,
  fontWeight: theme.typography.fontWeightMedium,
  //width: 'auto',
  cursor: "pointer",
  color: theme.palette.brandcolor.primary,
  transition: theme.transitions.create("color"),
  "&:hover": {
    color: theme.palette.text.primary,
  },
  ...(active && {
    ...theme.typography.subtitle3,
    color: theme.palette.text.primary,
  }),
}));
export default function CustomMenu({ anchorEl, handleClose, data }) {
  return (
    <Menu
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      autoFocus={false}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      MenuListProps={{ onMouseLeave: handleClose, disablePadding: true }}
      getContentAnchorEl={null}
      PaperProps={{
        style: {
          minWidth: 150,
          marginTop: 5,
        },
      }}
    >
      {data &&
        data.length > 0 &&
        data.map((menu) => {
          return (
            <NextLink key={menu.title} href={menu.path} passHref>
              <MenuItemStyle>
                {menu.src && (
                  <Box marginRight={"10px"}>
                    <Image
                      src={menu.src}
                      sx={{ maxWidth: "20px", maxHeight: "20px" }}
                    />
                  </Box>
                )}
                {menu.title}
              </MenuItemStyle>
            </NextLink>
          );
        })}
    </Menu>
  );
}
