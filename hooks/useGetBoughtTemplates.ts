import { useQuery } from "@tanstack/react-query";

const fetchTemplates = async () => {
  const res = await fetch("/api/boughtTemplates");
  if (!res.ok) throw new Error("Failed to fetch templates");
  return res.json();
};

export function useGetBoughtTemplates() {
  return useQuery({
    queryKey: ["bought-templates"],
    queryFn: fetchTemplates,
    staleTime: 1000 * 60 * 2,
    retry: (failureCount, error) => {
      if (error.message === "User not authenticated") return false;
      return failureCount < 3;
    },
  });
}
