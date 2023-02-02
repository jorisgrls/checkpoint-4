import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchFlag = (country) =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/flag/${country}`)
    .then((response) => response.data);

const useGetFlag = (country, options) =>
  useQuery(queryKeys.FLAG(country), () => fetchFlag(country), options);
export default useGetFlag;
