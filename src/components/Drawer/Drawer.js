"use client";

// Import Libraries
import React, {useState} from "react";
import styled from "styled-components";

// CSS-in-js
const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  ${(props) => (props.side === "left" ? "left: 0;" : "right: 0;")}
  height: 100%;
  width: 500px;
  background-color: #fff;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.open
      ? "translateX(0)"
      : props.side === "left"
      ? "translateX(-100%)"
      : "translateX(100%)"};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${(props) => (props.open ? "block" : "none")};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  ${(props) => (props.side === "left" ? "right: 10px;" : "right: 10px;")}
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: #d9edff;
  }
`;

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <DrawerWrapper open={drawerOpen} side="right">
        <CloseButton side="right" onClick={toggleDrawer}>
          <svg
            width="14"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4695 9.80625L17.7595 2.25589C17.9234 2.05776 18.009 1.80289 17.9993 1.54223C17.9895 1.28156 17.8852 1.0343 17.7071 0.849844C17.529 0.665389 17.2903 0.55733 17.0386 0.547262C16.7869 0.537193 16.5408 0.625857 16.3495 0.795534L9.05954 8.34589L1.76954 0.785177C1.57824 0.6155 1.33217 0.526837 1.08049 0.536905C0.828814 0.546974 0.590075 0.655032 0.411981 0.839487C0.233886 1.02394 0.129554 1.27121 0.119832 1.53187C0.110111 1.79254 0.195718 2.0474 0.359544 2.24553L7.64954 9.80625L0.349544 17.3566C0.244862 17.4495 0.159842 17.5637 0.0998186 17.6922C0.0397953 17.8207 0.00606467 17.9607 0.000745179 18.1033C-0.00457431 18.2459 0.0186316 18.3882 0.0689062 18.5211C0.119181 18.654 0.195439 18.7747 0.292894 18.8756C0.390348 18.9766 0.506896 19.0556 0.635221 19.1076C0.763546 19.1597 0.900878 19.1837 1.0386 19.1782C1.17632 19.1727 1.31145 19.1378 1.43551 19.0756C1.55958 19.0134 1.6699 18.9254 1.75954 18.817L9.05954 11.2666L16.3495 18.817C16.5408 18.9866 16.7869 19.0753 17.0386 19.0652C17.2903 19.0552 17.529 18.9471 17.7071 18.7627C17.8852 18.5782 17.9895 18.3309 17.9993 18.0703C18.009 17.8096 17.9234 17.5547 17.7595 17.3566L10.4695 9.80625Z"
              fill="#ACACAC"
            />
          </svg>
        </CloseButton>
        <div style={{ padding: "20px" }}>
          <h2 style={{ color: "#000000" }}>Drawer Title</h2>
          <p style={{ color: "#454545" }}>
            This is some content inside the drawer.
          </p>
        </div>
      </DrawerWrapper>
      <Overlay open={drawerOpen} onClick={toggleDrawer} />
    </div>
  );
};

export default Drawer;
