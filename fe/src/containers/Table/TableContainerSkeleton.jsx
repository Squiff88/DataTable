import React from "react";

const TableContainerSkeleton = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "570px",
        width: "900px",
        margin: "0 auto",
        marginTop: "50px",
        padding: "50px",
        boxSizing: "border-box",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "lightgray",
          height: "450px",
          width: "800px",
          margin: "0 auto",
        }}
      ></div>
    </div>
  );
};

export default TableContainerSkeleton;
