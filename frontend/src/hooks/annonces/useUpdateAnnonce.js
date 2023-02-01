import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const updateAnnonce = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/annonces/${id}`, inputs);

const useUpdateAnnonce = (options) => {
  const queryClient = useQueryClient();
  return useMutation(updateAnnonce, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.ANNONCES]);
      options?.onSuccess?.();
    },
  });
};

export default useUpdateAnnonce;
