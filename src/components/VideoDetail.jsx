import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Loader, VideoComments, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

export const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  useEffect(() => {
    fetchFromApi(
      `commentThreads?part=snippet&videoId=${id}&maxResults=100`
    ).then((data) => setComments(data.items[0]));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader></Loader>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh" p={{ xs: 1, md: 3 }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              playing={true}
              className="react-player"
              controls
            ></ReactPlayer>
            <Typography
              color="#fff"
              fontWeight="bold"
              p={2}
              sx={{ fontSize: "24px", color: "#fff" }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={2}
            >
              <Link to={`channel/${channelId}`}>
                <Typography color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "#fff", ml: "5px" }}
                  ></CheckCircle>
                </Typography>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column"></Videos>
        </Box>
      </Stack>

      <Box>
        <VideoComments comments={comments}></VideoComments>
      </Box>
    </Box>
  );
};
