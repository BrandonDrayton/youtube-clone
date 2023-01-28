import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#0f0f0f",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />{" "}
      <Typography
        variant="h4"
        fontWeight="bold"
        ml={2}
        mb={2}
        sx={{ color: "white" }}
      >
        Me Tube
      </Typography>
    </Link>
    <SearchBar></SearchBar>
  </Stack>
);

export default Navbar;
