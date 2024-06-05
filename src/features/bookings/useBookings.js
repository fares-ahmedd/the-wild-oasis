import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  // todo: FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };
  // todo: Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, currentPage], //? this array retrigger as a dependency array to refetch the data (like use effect hook)
    queryFn: () => getBookings({ filter }),
  });

  // todo : pagination && pre-fetching

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (currentPage < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPage + 1], //? this array retrigger as a dependency array to refetch the data (like use effect hook)
      queryFn: () => getBookings({ filter }),
    });
  }
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy, currentPage - 1], //? this array retrigger as a dependency array to refetch the data (like use effect hook)
    queryFn: () => getBookings({ filter }),
  });
  return { isLoading, error, bookings, count };
}
