import React from "react";
import "./Table.scss";

const TableContent = (props) => {
  const { matchData } = props;

  const { mid, teams, result, time, week } = matchData;

  return (
    <div className="TableWrapper">
      <table id="students">
        <tbody>
          {" "}
          <tr key={mid}>
            <td>{mid}</td>
            <td>{week}</td>
            <td>{week}</td>
            <td>{week}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
