import { sortProps } from "../types";

export const filterList = ["Hourly", "Daily", "Weekly", "Monthly"];
export const sortParams: { [key: string]: sortProps } = {
  uniqueViews: "unique_page_views",
  pageViews: "page_views",
  timeSpent: "time_spent",
  visitors: "visitors_count",
};
