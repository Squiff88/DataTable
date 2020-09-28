import axios from "axios";
import React from "react";
import "./TableContent.scss";

const TableContent = (props) => {
  const { matchData, refetchData } = props;

  const deleteMatchHandler = (mid) => {
    axios
      .delete(`/api/v1/match/${mid}`)
      .then(() => {
        refetchData("GET", "/api/v1/match/11");
      })
      .catch((err) => console.log(err));
  };

  const addMatchHandler = (mid) => {
    axios
      .post(`/api/v1/match/${mid}`)
      .then(() => {
        refetchData("GET", "/api/v1/match/11");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {matchData.map((data) => {
        const { mid, teams, periods, time } = data;

        return (
          <div className="TableContentWrapper" key={mid}>
            <table className="ContentInnerWrapper">
              <tbody className="ContentWrapper">
                <tr className="RowWrapper">
                  <td className="ContentRight TimeWrapper">{time.time}</td>
                  <th className="TableInnerWrapper">
                    <table>
                      <tbody>
                        <tr className="TeamsWrapper">
                          <td className="ContentLeft">{teams.home.name}</td>
                          <th className="ContentSeparator"> - </th>
                          <td className="ContentRight">{teams.away.name}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="PeriodWrapper">
                      <tbody>
                        <tr className="FirstPeriod">
                          <td className="PeriodContent">{periods.p1.home}</td>
                          <td className="PeriodSeparator"> : </td>
                          <td className="PeriodContent">{periods.p1.away}</td>
                        </tr>

                        <tr className="EndPeriod">
                          <td className="PeriodContent">{periods.ft.home}</td>
                          <td className="PeriodSeparator"> : </td>
                          <td className="PeriodContent">{periods.ft.away}</td>
                        </tr>
                      </tbody>
                    </table>

                    <table>
                      <tbody>
                        <tr className="DetailsWrapper">
                          <td>{mid}</td>
                          <td className="ActionsWrapper">
                            <button onClick={() => addMatchHandler(mid)}>
                              Add
                            </button>
                            <button onClick={() => deleteMatchHandler(mid)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default TableContent;
