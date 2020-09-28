import React from "react";
import Table from "../../components/Table/Table";
import { fetchResource } from "../../helpers/fetchResource";
import TableContainerSkeleton from "./TableContainerSkeleton";

const TableContainer = () => {
  const [apiState, setApiState] = React.useState({
    loading: false,
    error: null,
  });

  const [data, setData] = React.useState(null);

  const fetchMatchDataHandler = React.useCallback((method, url) => {
    setApiState({
      loading: true,
      error: apiState.error,
    });
    // Should be dynamic for pagination

    fetchResource(method, url)
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
  });

  React.useEffect(() => {
    fetchMatchDataHandler("GET", "/api/v1/match/11");
  }, []);

  if (apiState.loading) {
    return <TableContainerSkeleton />;
  }

  if (apiState.error) {
    return <div>{apiState.error.message}</div>;
  }

  if (data) {
    return <Table data={data} refetchData={fetchMatchDataHandler} />;
  }
  return <div>No Data</div>;
};

export default TableContainer;
