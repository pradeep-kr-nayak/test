import { useContext, useState } from "react";
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
import { TopPost } from "../../types";
import { sortProps } from "../../types";
import usePagination from "../hooks/usePagination";
import { sortParams } from "../../constants";
import { PostsDataContext } from "../container/top-post-context";

const PER_PAGE = 5;

export const TopPosts = () => {
  const { topPosts, setTopPosts } = useContext(PostsDataContext);
  const [sortOrder, setSortOrder] = useState(true);
  const [clickedColumn, setClickedColumn] = useState<number | undefined>();
  const {
    paginatedData,
    paginateLeft,
    paginateRight,
    currentPage,
    totalCount,
    start,
    end,
  } = usePagination(topPosts, PER_PAGE);

  const sortColumns = (prop: sortProps, column: number) => {
    const sortedPosts = [...topPosts].sort((a, b) =>
      sortOrder ? b[prop] - a[prop] : a[prop] - b[prop]
    );
    setTopPosts(sortedPosts);
    setSortOrder(!sortOrder);
    setClickedColumn(column);
  };

  return (
    <TopPostsWrapper>
      <Table clickedColumn={clickedColumn}>
        <thead>
          <tr>
            <th>Top 50 Posts</th>
            <th onClick={() => sortColumns(sortParams.uniqueViews, 2)}>
              Unique Page Views
              {clickedColumn === 2 && (
                <SortingIconAligner>
                  <SortingIcon
                    color="#161718"
                    width={12}
                    rotate={sortOrder ? 0 : 180}
                  />
                </SortingIconAligner>
              )}
            </th>
            <th>Page Views</th>
            <th onClick={() => sortColumns(sortParams.timeSpent, 4)}>
              Time Spent
              {clickedColumn === 4 && (
                <SortingIconAligner>
                  <SortingIcon
                    color="#161718"
                    width={12}
                    rotate={sortOrder ? 0 : 180}
                  />
                </SortingIconAligner>
              )}
            </th>
            <th>Visitors</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((post: TopPost, index: number) => {
            return (
              <tr key={index}>
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
            <td colSpan={4}>
              {start} - {end} of {totalCount}
            </td>
            <td>
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
