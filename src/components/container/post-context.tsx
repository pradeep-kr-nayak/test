import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { Post } from "../../types";

interface PostsDataInterface {
  topPosts: Post[];
  setTopPosts: Dispatch<SetStateAction<Post[]>>;
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

export const PostsDataContext = React.createContext<PostsDataInterface>({
  topPosts: [initialPost],
  setTopPosts: () => null,
});

export const PostsData = ({
  children,
  posts,
}: {
  children: React.ReactNode;
  posts: Post[];
}) => {
  const [topPosts, setTopPosts] = useState(posts);
  useEffect(() => {
    console.log("qwerty");
  }, [topPosts]);
  return (
    <PostsDataContext.Provider value={{ topPosts, setTopPosts }}>
      <>
        {console.log("63478462842389")}
        {children}
      </>
    </PostsDataContext.Provider>
  );
};
