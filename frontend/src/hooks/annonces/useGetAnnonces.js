import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchAnnonces = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/annonces`)
    .then((response) => response.data);

const useGetAnnonces = (options) =>
  useQuery(queryKeys.ANNONCES, fetchAnnonces, options);

export default useGetAnnonces;
