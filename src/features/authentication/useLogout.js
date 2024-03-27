import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
export function useLogout() {
  const navigate = useNavigate();
  const queryClint = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClint.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
