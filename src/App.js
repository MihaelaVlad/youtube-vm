import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Feed,
  NavBar,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import { Box } from "@mui/material";

const backgroundColor = "linear-gradient(to bottom, #00050e, #091c22, #06161c)";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: backgroundColor }}>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" exact element={<Feed></Feed>}></Route>
          <Route
            path="/video/:id"
            element={<VideoDetail></VideoDetail>}
          ></Route>
          <Route
            path="/channel/:id"
            element={<ChannelDetail></ChannelDetail>}
          ></Route>
          <Route
            path="/search/:searchTerm"
            element={<SearchFeed></SearchFeed>}
          ></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
