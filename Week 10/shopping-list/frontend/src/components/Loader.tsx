import React from "react";
import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <Circles
      height="40"
      width="40"
      color="blue"
      ariaLabel="circles-loading"
      wrapperStyle={{ display: "block" }}
      wrapperClass=""
      visible={true}
    />
  );
}
