import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const deleteAnnonce = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/annonces/${id}`);

const useDeleteAnnonce = (options) => {
  const queryClient = useQueryClient();
  return useMutation(deleteAnnonce, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.ANNONCES]);
      options?.onSuccess?.();
    },
  });
};

export default useDeleteAnnonce;
