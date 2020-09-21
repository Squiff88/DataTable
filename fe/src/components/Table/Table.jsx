import React from "react";
import TableContent from "./TableContent";

const Table = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((matchData) => (
        <TableContent key={matchData.mid} matchData={matchData} />
      ))}
    </>
  );
};

export default Table;
