export type CategoryResponse = {
    id: number;
    name: string;
    use_count: number;
    chart_color: string;
    download_count: number;
    thumb: {
      file_name: string;
      path: string;
    };
    total_wallpapers: number;
  };
 export type ListCategory = {
    id: number,
    name: string
  } 
 export type CategoryDetail = {
    file_name:string,
    path: string;
    id: number;
    name: string;
    setup: number;
    chartColor: string;
    download: number;
    priority: number;
    totalWallpaper: number;
  };
