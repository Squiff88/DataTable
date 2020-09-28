import axios from "axios";

export const fetchResource = (method, route) => {
  let result;
  if (method === "GET") {
    result = axios.get(route);
  }
  if (method === "POST") {
    result = axios.post(route);
  }

  return result;
};
