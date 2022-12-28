import React from "react";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <img height={"40px"} src="logo.png" alt="Score tickets Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
