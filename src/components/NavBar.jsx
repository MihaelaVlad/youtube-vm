import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./SearchBar";
import {
  backgroundColor,
  dropShadow,
  boxShadowStyle,
} from "../utils/constants";

export const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      zIndex={2}
      p={1}
      sx={{
        position: "sticky",
        background: backgroundColor,
        top: 0,
        justifyContent: "space-between",
        boxShadow: boxShadowStyle,
        filter: dropShadow,
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #3b92e982",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45}></img>
      </Link>

      <SearchBar></SearchBar>
    </Stack>
  );
};
