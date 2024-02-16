import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CartBadge from "./CartBadge";
import { Button } from "@mui/material";
import Link from "next/link";

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
          <CartBadge amount={4} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
