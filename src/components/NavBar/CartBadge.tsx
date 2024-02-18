import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getCartItemsQuantity } from "@/redux/cartSlice";

const CartBadge = () => {
  const totalQuantity = useSelector(getCartItemsQuantity);

  return (
    <Box>
      <Link href={"/cart"}>
        <IconButton size="large" sx={{ color: "common.white" }}>
          <Badge badgeContent={totalQuantity} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </Box>
  );
};

export default CartBadge;
