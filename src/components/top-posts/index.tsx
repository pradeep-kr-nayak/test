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

export const TopPosts = () => {
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
          <tr>
            <td>
              <CellContent>
                <Counter>1.</Counter>
                <PostDetail>
                  <Title>
                    Your 2024 Zodiac sign guides to the Best HousePlants{" "}
                    <a href="//some-url">
                      <ExternalLinkIcon />
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
                      <ExternalLinkIcon />
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
                      <ExternalLinkIcon />
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
                      <ExternalLinkIcon />
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
                      <ExternalLinkIcon />
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
        <tfoot>
          <tr>
            <td>1-25 of 50</td>
            <td colSpan={4}>
              <Arrow color="#555556" />
              <Arrow color="#555556" rotate={180} />
            </td>
          </tr>
        </tfoot>
      </Table>
    </TopPostsWrapper>
  );
};
