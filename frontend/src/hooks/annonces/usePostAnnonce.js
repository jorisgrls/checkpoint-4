import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const postAnnonce = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/annonces`, inputs);

const usePostAnnonce = (options) => {
  const queryClient = useQueryClient();
  return useMutation(postAnnonce, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.ANNONCES]);
      options?.onSuccess?.();
    },
  });
};

export default usePostAnnonce;
