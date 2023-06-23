import { Box } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarWidget from "./widgets/sidebar/sidebarWidget"

import ChannelNavbar from "./widgets/navbar/channelNav";
import Navbar from "./widgets/navbar/navbar";

import ChannelBar from "./widgets/channelBar/channelsBar";

import Content from "./components/Routes/content.jsx";
import MessageBar from "./widgets/messagebar/messagebar";

import UserBar from "./widgets/userbar/userbar";

import "./App.css";

import { useState } from "react";

function App() {

  const [navTitle, setNavTitle] = useState("Home");

  return (
    <Router>
      <Box width="100vw" display="flex" className="App">
        <Box flexBasis="4.5rem">
          <SidebarWidget />
        </Box>
        <Box flexBasis="99vw">
          <Box display="flex">
            <Box flexBasis="15rem">
              <ChannelNavbar />
              <ChannelBar setNavTitle={setNavTitle} />
            </Box>
            <Box flexBasis="90vw">
              <Navbar navTitle={navTitle} />
              <Box display="flex">
                <Box flexBasis="75vw">
                  <Content />
                  <MessageBar />
                </Box>
                <Box flexBasis="15rem">
                  <UserBar />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App
