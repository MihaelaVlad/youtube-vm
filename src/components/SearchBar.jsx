import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const backgroundColor =
  "linear-gradient( 62deg, rgb(18 61 135 / 18%) 40.42%, #2d4368 166.76% )";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onHandleSubmit}
      sx={{
        background: backgroundColor,
        borderRadius: 20,
        border: "1px solid #3b92e982",
        pl: 2,
        mr: { sm: 5 },
        color: "#fff",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <IconButton type="submit" sx={{ p: "10px", color: "#fff" }}>
        <Search></Search>
      </IconButton>
    </Paper>
  );
};
