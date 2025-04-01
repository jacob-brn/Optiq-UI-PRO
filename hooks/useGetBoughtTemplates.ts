import { useQuery } from "@tanstack/react-query";
import useIsLoggedIn from "./useIsLoggedIn";

const fetchTemplates = async () => {
  const res = await fetch("/api/boughtTemplates");
  if (!res.ok) throw new Error("Failed to fetch templates");
  return res.json();
};

export function useGetBoughtTemplates() {
  const isLoggedIn = useIsLoggedIn();

  return useQuery({
    queryKey: ["bought-templates"],
    queryFn: fetchTemplates,
    staleTime: 1000 * 60 * 5,
    enabled: isLoggedIn,
  });
}
