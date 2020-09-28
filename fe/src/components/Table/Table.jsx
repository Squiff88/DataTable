import React from "react";
import TableContent from "../TableContent/TableContent";
import TableHeader from "../TableHeader/TableHeader";
import { groupDataByDate } from "./groupDataByDate";
import format from "date-fns/format";
import "./Table.scss";

const Table = (props) => {
  const { data, refetchData } = props;

  const groupData = data && groupDataByDate(data);

  return (
    <div className="TableWrapper">
      <div className="TableInnerWrapper">
        {groupData.map((groupedData) => {
          const getDate = new Date(groupedData.date);
          let formatDate;
          if (isNaN(getDate) === false) {
            formatDate = format(getDate, "ee.M.uuuu");
          }
          return (
            <React.Fragment key={groupedData.match[0].mid}>
              <TableHeader date={formatDate} />
              <TableContent
                key={groupedData.date}
                refetchData={refetchData}
                matchData={groupedData.match}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
