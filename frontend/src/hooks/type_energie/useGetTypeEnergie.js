import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchTypeEnergie = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/energies`)
    .then((response) => response.data);

const useGetTypeEnergie = (options) =>
  useQuery(queryKeys.ENERGIES, fetchTypeEnergie, options);

export default useGetTypeEnergie;
