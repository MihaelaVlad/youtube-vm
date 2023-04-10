import React from "react";
import { Box } from "@mui/material";

export const CommentCard = ({ videoComment: { snippet } }) => {
  return (
    <Box>
      console.log(videoComment);
      {snippet?.topLevelCommment?.snippet?.textDisplay}
    </Box>
  );
};
