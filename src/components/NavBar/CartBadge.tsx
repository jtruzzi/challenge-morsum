import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

interface Props {
  amount: number;
}

const CartBadge = ({ amount }: Props) => {
  return (
    <Box>
      <Link href={"/cart"}>
        <IconButton size="large" sx={{ color: "common.white" }}>
          <Badge badgeContent={amount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </Box>
  );
};

export default CartBadge;
