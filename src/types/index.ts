export type sortProps =
  | "unique_page_views"
  | "page_views"
  | "visitors_count"
  | "time_spent";

export type Post = {
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
