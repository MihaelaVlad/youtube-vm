import { Stack, Box, CircularProgress } from "@mui/material";
import { ChannelCard, VideoCard } from "./";
import { motion } from "framer-motion";
import { boxShadow } from "../utils/constants";

const boxShadowBefore =
  "0px 2px 17px -3px rgb(28 175 168 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(49 108 107 / 0%)";

export const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <CircularProgress></CircularProgress>;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      zIndex={2}
    >
      {videos.map((item, idx) => (
        <motion.div
          animate={{
            boxShadow: boxShadowBefore,
            opacity: 1,
            borderRadius: "10px",
          }}
          layout="position"
          whileHover={{ scale: 1.05, boxShadow: boxShadow }}
          whileTap={{ scale: 1.05 }}
          key={idx}
        >
          <Box>
            {item.id.videoId && <VideoCard video={item}></VideoCard>}
            {item.id.channelId && (
              <ChannelCard channelDetail={item}></ChannelCard>
            )}
          </Box>
        </motion.div>
      ))}
    </Stack>
  );
};
