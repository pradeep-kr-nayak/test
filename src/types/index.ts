export type sortProps =
  | "unique_page_views"
  | "page_views"
  | "visitors_count"
  | "time_spent";

export type TopPost = {
  post_title: string;
  post_type: string;
  published_date: string;
  author_name: string;
  category: string;
  unique_page_views: number;
  page_views: number;
  time_spent: number;
  visitors_count: number;
  link_url: string;
};

export interface Post {
  post_id: string;
  title: string;
  author: string;
  published_date: string;
  visited_content: string;
  traffic: Traffic;
  metrics: Metrics;
}

export interface Metrics {
  total_time_hours: number;
  avg_time_minutes: number;
  page_views: number;
  unique_page_views: number;
  visitors: number;
  unique_visitors: number;
}

export interface Traffic {
  hourly?: { [key: string]: number };
  daily?: { [key: string]: number };
  weekly?: { [key: string]: number };
  monthly?: { [key: string]: number };
}
