import { Section } from "../shared/shared.styles";
import {
  Counter,
  PostDetail,
  Title,
  PostLinkIcon,
  PostMeta,
  PostType,
  PublishedOn,
  Author,
  Category,
  Table,
  CellContent,
  TopPostsWrapper,
} from "./top-posts.styles";

export const TopPosts = () => {
  return (
    <TopPostsWrapper>
      <Table>
        <thead>
          <th>
            <td>Top 50 Posts</td>
          </th>
          <th>
            <td>Unique Page Views</td>
          </th>
          <th>
            <td>Page Views</td>
          </th>
          <th>
            <td>Time Spent</td>
          </th>
          <th>
            <td>Visitors</td>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <CellContent>
                <Counter>1.</Counter>
                <PostDetail>
                  <Title>
                    Your 2024 Zodiac sign guides to the Best HousePlants{" "}
                    <a href="//some-url">
                      <PostLinkIcon />
                    </a>
                  </Title>
                  <PostMeta>
                    <PostType>Article</PostType>
                    <PublishedOn>12 Jan 2022</PublishedOn>
                    <Author>Author1</Author>
                    <Category>Decorating</Category>
                  </PostMeta>
                </PostDetail>
              </CellContent>
            </td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>
              <CellContent>
                <Counter>2.</Counter>
                <PostDetail>
                  <Title>
                    Your 2024 Zodiac sign guides to the Best HousePlants{" "}
                    <a href="//some-url">
                      <PostLinkIcon />
                    </a>
                  </Title>
                  <PostMeta>
                    <PostType>Article</PostType>
                    <PublishedOn>12 Jan 2022</PublishedOn>
                    <Author></Author>
                    <Category></Category>
                  </PostMeta>
                </PostDetail>
              </CellContent>
            </td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>
              <CellContent>
                <Counter>3.</Counter>
                <PostDetail>
                  <Title>
                    Your 2024 Zodiac sign guides to the Best HousePlants{" "}
                    <a href="//some-url">
                      <PostLinkIcon />
                    </a>
                  </Title>
                  <PostMeta>
                    <PostType>Article</PostType>
                    <PublishedOn>12 Jan 2022</PublishedOn>
                    <Author></Author>
                    <Category></Category>
                  </PostMeta>
                </PostDetail>
              </CellContent>
            </td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>
              <CellContent>
                <Counter>4.</Counter>
                <PostDetail>
                  <Title>
                    Your 2024 Zodiac sign guides to the Best HousePlants{" "}
                    <a href="//some-url">
                      <PostLinkIcon />
                    </a>
                  </Title>
                  <PostMeta>
                    <PostType>Article</PostType>
                    <PublishedOn>12 Jan 2022</PublishedOn>
                    <Author></Author>
                    <Category></Category>
                  </PostMeta>
                </PostDetail>
              </CellContent>
            </td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>
              <CellContent>
                <Counter>5.</Counter>
                <PostDetail>
                  <Title>
                    Your 2024 Zodiac sign guides to the Best HousePlants{" "}
                    <a href="//some-url">
                      <PostLinkIcon />
                    </a>
                  </Title>
                  <PostMeta>
                    <PostType>Article</PostType>
                    <PublishedOn>12 Jan 2022</PublishedOn>
                    <Author></Author>
                    <Category></Category>
                  </PostMeta>
                </PostDetail>
              </CellContent>
            </td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
            <td>10,000</td>
          </tr>
        </tbody>
      </Table>
    </TopPostsWrapper>
  );
};
