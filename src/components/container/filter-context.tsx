import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { filterList } from "../../constants";

import { Post } from "../../types";

/** importing mock data  */
import postHourlyData from "../../mock/hourly-post.json";
import postDailyData from "../../mock/daily-post.json";
import postWeeklyData from "../../mock/weekly-post.json";
import postMonthlyData from "../../mock/monthly-post.json";

/***/

const defaultMetrics = {
  total_time_hours: 0,
  avg_time_minutes: 0,
  page_views: 0,
  unique_page_views: 0,
  visitors: 0,
  unique_visitors: 0,
};

const defaultPostVale = {
  post_id: "",
  title: "",
  author: "",
  published_date: "",
  visited_content: "",
  traffic: {},
  metrics: defaultMetrics,
};

const defaultContextValue = {
  filteredPosts: {
    post_id: "",
    title: "",
    author: "",
    published_date: "",
    visited_content: "",
    traffic: {},
    metrics: defaultMetrics,
  },
  setFilteredPosts: () => null,
  setActiveFilter: () => null,
  activeFilter: filterList[0],
  datesFilter: [new Date(), new Date()],
};

export const FilterContext = createContext<{
  filteredPosts: Post;
  setFilteredPosts: Dispatch<SetStateAction<Post>>;
  setActiveFilter: Dispatch<SetStateAction<string>>;
  activeFilter: string;
}>(defaultContextValue);

export const PostData = ({
  children,
  post = defaultPostVale,
}: {
  children: React.ReactNode;
  post?: Post;
}) => {
  const [filteredPosts, setFilteredPosts] = useState(post);
  const [activeFilter, setActiveFilter] = useState(filterList[2]);

  useEffect(() => {
    const fetchFilteredPosts = () => {
      /** If not mock data, this could have
       *  been an api call to fetch
       * the data by querying alongwith
       * filter query strings  */

      switch (activeFilter) {
        case "Hourly":
          return postHourlyData;
        case "Daily":
          return postDailyData;
        case "Weekly":
          return postWeeklyData;
        case "Monthly":
          return postMonthlyData;
        default:
          return;
      }
    };
    const posts = fetchFilteredPosts();
    if (posts) {
      setFilteredPosts(posts);
    }
  }, [activeFilter]);

  return (
    <FilterContext.Provider
      value={{
        filteredPosts,
        setFilteredPosts,
        activeFilter,
        setActiveFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
