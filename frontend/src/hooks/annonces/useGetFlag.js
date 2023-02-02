import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchFlag = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/flag`)
    .then((response) => response.data);

const useGetFlag = (options) => useQuery(queryKeys.FLAG, fetchFlag, options);

export default useGetFlag;
