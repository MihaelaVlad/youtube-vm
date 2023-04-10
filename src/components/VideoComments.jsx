// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

// import { fetchFromApi } from "../utils/fetchFromApi";
import { CommentCard } from "./CommentCard";

export const VideoComments = ({ videoComments }) => {
  if (!videoComments?.length) return <CircularProgress></CircularProgress>;

  // const [videoComments, setVideoComments] = useState();

  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchResults = async () => {
  //     const data = await fetchFromApi(
  //       `commentThreads?part=snippet&videoId=${id}&maxResults=100`
  //     );

  //     setVideoComments(data?.items);
  //     console.log(data);
  //   };

  //   fetchResults();
  // }, [id]);

  return (
    <Box>
      {videoComments.map((item, idx) => (
        <Box key={idx}>
          {item?.snippet?.topLevelCommment?.snippet?.textDisplay && (
            <CommentCard videoComment={item}></CommentCard>
          )}
          {/* {item.id.videoId && <VideoCard video={item}></VideoCard>} */}
        </Box>
      ))}
    </Box>
  );
};
