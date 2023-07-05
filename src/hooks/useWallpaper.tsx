import { useQuery } from "@tanstack/react-query";
import wallpaperService from "../services/wallpaperService";

export const useFetchWallpapers = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["wallpapers"],
    queryFn: wallpaperService.fetchWallpapers,
  });
  return { data, isLoading, error };
};
