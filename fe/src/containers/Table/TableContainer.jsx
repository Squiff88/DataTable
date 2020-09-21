import React from "react";
import axios from "axios";
import Table from "../../components/Table/Table";

const TableContainer = () => {
  const [apiState, setApiState] = React.useState({
    loading: false,
    error: null,
  });

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setApiState({
      loading: true,
      error: apiState.error,
    });
    axios
      .get("/api/v1/match/11")
      .then((res) => {
        if (res && res.status === 200) {
          setData(res.data.data);
        }
      })
      .then(() =>
        setApiState({
          loading: false,
          error: apiState.error,
        })
      )
      .catch((err) =>
        setApiState({
          loading: false,
          error: err,
        })
      );
  }, []);

  if (apiState.loading) {
    return <div>Loading ...</div>;
  }

  if (apiState.error) {
    return <div>{apiState.error}</div>;
  }

  if (data) {
    return (
      <>
        <Table data={data} />
      </>
    );
  }
  return <div>No Data</div>;
};

export default TableContainer;
