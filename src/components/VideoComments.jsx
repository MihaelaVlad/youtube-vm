import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchFromApi } from "../utils/fetchFromApi";
import { CommentCard } from "./CommentCard";

export const VideoComments = ({ comments }) => {
  const [videoComments, setVideoComments] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(
        `commentThreads?part=snippet&videoId=${id}&maxResults=100`
      );

      setVideoComments(data?.items);
      console.log(data);
    };

    fetchResults();
  }, [id]);

  return (
    <Box>
      <CommentCard videoComments={videoComments}></CommentCard>

      <h1>hey</h1>
      <p>
        {videoComments?.items?.snippet?.topLevelCommment?.snippet?.textDisplay}
      </p>

      {/* {comments.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
        </Box>
      ))} */}
    </Box>
  );
};
