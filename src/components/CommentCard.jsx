import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

export const CommentCard = ({ videoComment }) => {
  return (
    <Box>
      <Typography variant="h6">
        {videoComment?.snippet?.title}{" "}
        <CheckCircleIcon
          sx={{ fontSize: "14px", color: "#fff", ml: "5px" }}
        ></CheckCircleIcon>
      </Typography>
    </Box>
  );
};
