import React from "react";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      component="img"
      alt="shopping"
      src="/shopping3.jpeg"
      sx={{
        height: "500px",
        width: "auto",
        position: "absolute",
        left: "420px",
        // backgroundColor: "brown",
      }}
    ></Box>
  );
}
