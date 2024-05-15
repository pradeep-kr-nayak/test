import {
  Counter,
  Title,
  PostMeta,
  PostType,
  Table,
  CellContent,
  TopPostsWrapper,
  SortingIconAligner,
} from "./top-posts.styles";
import { Arrow } from "../icons/arrow";
import { ExternalLinkIcon } from "../icons/external-link";
import { SortingIcon } from "../icons/sorting";
import { Post } from "./types";
import { sortProps } from "../../types";
import usePagination from "../hooks/usePagination";
import { sortParams } from "../../constants";

const PER_PAGE = 5;

export const TopPosts = (data: { posts: Post[] }) => {
  const {
    paginatedData,
    paginateLeft,
    paginateRight,
    currentPage,
    totalCount,
    start,
    end,
  } = usePagination(data.posts, PER_PAGE);

  const sortColumns = (prop: sortProps) => {
    data.posts.sort((a, b) => b[prop] - a[prop]);
  };

  return (
    <TopPostsWrapper>
      <Table clickedColumn={4}>
        <thead>
          <tr>
            <th>Top 50 Posts</th>
            <th onClick={() => sortColumns(sortParams.uniqueViews)}>
              Unique Page Views
            </th>
            <th onClick={() => sortColumns(sortParams.pageViews)}>
              Page Views
            </th>
            <th onClick={() => sortColumns(sortParams.timeSpent)}>
              Time Spent
              <SortingIconAligner>
                <SortingIcon color="#161718" width={12} />
              </SortingIconAligner>
            </th>
            <th onClick={() => sortColumns(sortParams.visitors)}>Visitors</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((post: Post, index: number) => {
            return (
              <tr>
                <td>
                  <CellContent>
                    <Counter>{currentPage * PER_PAGE + (index + 1)}</Counter>
                    <div>
                      <Title>
                        {post.post_title}
                        <a href={post.link_url} target="_blank">
                          <ExternalLinkIcon />
                        </a>
                      </Title>
                      <PostMeta>
                        <PostType>{post.post_type}</PostType>
                        <div>{post.published_date}</div>
                        <div>{post.author_name}</div>
                        <div>{post.category}</div>
                      </PostMeta>
                    </div>
                  </CellContent>
                </td>
                <td>{post.unique_page_views}</td>
                <td>{post.page_views}</td>
                <td>{post.time_spent}</td>
                <td>{post.visitors_count}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              {start} - {end} of
              {totalCount}
            </td>
            <td colSpan={4}>
              <Arrow color="#555556" onClick={() => paginateLeft()} />
              <Arrow
                color="#555556"
                onClick={() => paginateRight()}
                rotate={180}
              />
            </td>
          </tr>
        </tfoot>
      </Table>
    </TopPostsWrapper>
  );
};
