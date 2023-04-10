import { Link } from "react-router-dom";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "90.6vw", sm: "40vw", md: "320px", lg: "346px" },
        height: { xs: "282px", sm: "302px", md: "310px", lg: "340px" },
        borderRadius: "6px",
        border: "1px solid #3b92e982",
        backgroundColor: "#14233075",
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 154 }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ height: "75px" }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Box display="flex" justifyContent="space-between" mt={1} mb={1}>
          <Link to={`/channel/${snippet?.channelId}`}>
            <Typography variant="subtitle2" color="#fff">
              {snippet?.channelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "#fff", ml: "5px" }}
              ></CheckCircleIcon>
            </Typography>
          </Link>
          <Typography variant="subtitle2" color="#fff">
            {snippet?.publishedAt.slice(0, 4)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
