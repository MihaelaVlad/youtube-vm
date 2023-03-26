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

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
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
