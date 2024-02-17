import * as React from "react";
import Link from "next/link";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import CartBadge from "./CartBadge";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TARGET
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Button sx={{ my: 2, color: "white", textDecoration: "none" }}>
                PRODUCTS
              </Button>
            </Link>
          </Box>
          <CartBadge />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
