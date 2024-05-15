import {
  Counter,
  PostDetail,
  Title,
  PostMeta,
  PostType,
  PublishedOn,
  Author,
  Category,
  Table,
  CellContent,
  TopPostsWrapper,
} from "./top-posts.styles";
import { Arrow } from "../icons/arrow";
import { ExternalLinkIcon } from "../icons/external-link";
import { Post } from "./types";
import { useState } from "react";

const PER_PAGE = 5;

export const TopPosts = (data: { posts: Post[] }) => {
  const [currentIndex, setNextCount] = useState(0);

  return (
    <TopPostsWrapper>
      <Table>
        <thead>
          <tr>
            <th>Top 50 Posts</th>
            <th>Unique Page Views</th>
            <th>Page Views</th>
            <th>Time Spent</th>
            <th>Visitors</th>
          </tr>
        </thead>
        <tbody>
          {data.posts.map((post: Post, index: number) => {
            return index >= currentIndex && index < currentIndex + 5 ? (
              <tr>
                <td>
                  <CellContent>
                    <Counter>{index + 1}</Counter>
                    <PostDetail>
                      <Title>
                        {post.post_title}
                        <a href={post.link_url} target="_blank">
                          <ExternalLinkIcon />
                        </a>
                      </Title>
                      <PostMeta>
                        <PostType>{post.post_type}</PostType>
                        <PublishedOn>{post.published_date}</PublishedOn>
                        <Author>{post.author_name}</Author>
                        <Category>{post.category}</Category>
                      </PostMeta>
                    </PostDetail>
                  </CellContent>
                </td>
                <td>{post.unique_page_views}</td>
                <td>{post.page_views}</td>
                <td>{post.time_spent}</td>
                <td>{post.visitors_count}</td>
              </tr>
            ) : null;
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              {currentIndex + 1}-{currentIndex + PER_PAGE} of{" "}
              {data.posts.length}
            </td>
            <td colSpan={4}>
              <Arrow
                color="#555556"
                onClick={() =>
                  currentIndex > 0 ? setNextCount(currentIndex - 5) : {}
                }
              />
              <Arrow
                color="#555556"
                rotate={180}
                onClick={() =>
                  currentIndex < data.posts.length - PER_PAGE
                    ? setNextCount(currentIndex + 5)
                    : {}
                }
              />
            </td>
          </tr>
        </tfoot>
      </Table>
    </TopPostsWrapper>
  );
};
