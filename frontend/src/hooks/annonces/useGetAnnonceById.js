import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchAnnonceById = (id) =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/annonces/${id}`)
    .then((response) => response.data);

const useGetAnnonceById = (id, options) =>
  useQuery(queryKeys.ANNONCE(id), () => fetchAnnonceById(id), options);

export default useGetAnnonceById;
