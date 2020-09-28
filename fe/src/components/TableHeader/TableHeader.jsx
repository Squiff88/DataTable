import React from "react";
import "./TableHeader.scss";

const TableHeader = (props) => {
  const { date } = props;

  if (!date) {
    return null;
  }

  return (
    <div className="HeaderWrapper">
      <span className="Date">{date}</span>
      <span className="Period">HT</span>
      <span className="PeriodFinal">FT</span>
      <span className="ID">ID</span>
      <span className="Action">Action</span>
    </div>
  );
};

export default TableHeader;
