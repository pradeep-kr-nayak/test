import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { TopPost } from "../../types";

interface PostsDataInterface {
  topPosts: TopPost[];
  setTopPosts: Dispatch<SetStateAction<TopPost[]>>;
}

const initialPost = {
  post_title: "",
  post_type: "",
  published_date: "",
  author_name: "",
  category: "",
  unique_page_views: 0,
  page_views: 0,
  time_spent: 0,
  visitors_count: 0,
  link_url: "",
};

/**
 * Context to manage List of Top 50 Posts
 * updating the sorted data
 */
export const PostsDataContext = React.createContext<PostsDataInterface>({
  topPosts: [initialPost],
  setTopPosts: () => null,
});

export const PostsData = ({
  children,
  posts,
}: {
  children: React.ReactNode;
  posts: TopPost[];
}) => {
  const [topPosts, setTopPosts] = useState(posts);
  return (
    <PostsDataContext.Provider value={{ topPosts, setTopPosts }}>
      <>{children}</>
    </PostsDataContext.Provider>
  );
};
