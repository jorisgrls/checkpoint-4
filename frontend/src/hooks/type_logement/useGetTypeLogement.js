import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchTypeLogement = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/types`)
    .then((response) => response.data);

const useGetTypeLogement = (options) =>
  useQuery(queryKeys.LOGEMENTS, fetchTypeLogement, options);

export default useGetTypeLogement;
