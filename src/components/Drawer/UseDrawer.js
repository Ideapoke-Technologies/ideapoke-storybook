"use client";

import React, { useState } from "react";
import Drawer from "./Drawer";

const UseDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <Drawer open={drawerOpen} side="right" onClose={toggleDrawer}>

        
        {/* --------- Content of the drawer --------- */}
        <div style={{ padding: "20px" }}>
          <h2 style={{ color: "#000000" }}>Drawer Title</h2>
          <p style={{ color: "#454545" }}>
            This is some content inside the drawer.
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default UseDrawer;
