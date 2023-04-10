import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { motion } from "framer-motion";
import {
  backgroundColor,
  dropShadow,
  boxShadowStyle,
} from "../utils/constants";

const variants = {
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></SideBar>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 4, color: "#fff" }}
        >
          Copyright 2023 Mihaela Vlad
        </Typography>
      </Box>

      <Box
        p={2}
        m={{ sx: "0", md: "24px" }}
        sx={{
          overflowY: "auto",
          height: "87.5vh",
          flex: 2,
          background: backgroundColor,
          boxShadow: boxShadowStyle,
          filter: dropShadow,
          backdropFilter: "blur(16px)",
          border: "1px solid #3b92e982",
          borderRadius: "8px",
        }}
      >
        <motion.div custom={1} animate="visible" variants={variants}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "#fff" }}
          >
            {selectedCategory} <span style={{ color: "#16bbf7" }}>videos</span>
          </Typography>
        </motion.div>
        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  );
};
