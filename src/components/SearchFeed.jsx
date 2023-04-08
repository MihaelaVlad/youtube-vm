import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import {
  backgroundColor,
  dropShadow,
  boxShadowStyle,
} from "../utils/constants";

export const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      m={3}
      sx={{
        overflowY: "auto",
        height: "89vh",
        flex: 2,
        background: backgroundColor,
        boxShadow: boxShadowStyle,
        filter: dropShadow,
        backdropFilter: "blur(16px)",
        border: "1px solid #3b92e982",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search results for:{" "}
        <span style={{ color: "#ffffff" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos}></Videos>
    </Box>
  );
};
