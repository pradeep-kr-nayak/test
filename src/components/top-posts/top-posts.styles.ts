import styled from "styled-components";
import { Section } from "../shared/shared.styles";

export const TopPostsWrapper = styled(Section)`
  padding-left: 0;
  padding-right: 0;
`;
export const Table = styled.table`
  width: 100%;
  th {
    font-size: 16px;
    font-weight: 500;
    border-right: 1px solid #cccbcb;
    padding-top: 20px;
    padding-left: 20px;
    &:first-child {
      font-weight: 400;
      font-size: 24px;
      line-height: 1.2;
      padding-bottom: 20px;
    }
    &:last-child {
      padding-right: 20px;
      border-right: none;
    }
  }
  tr {
    border-top: 1px solid #cccbcb;
    td {
      border-right: 1px solid #cccbcb;
      text-align: left;
      padding: 14px 14px 14px 0;
      padding-left: 20px;
      &:first-child {
      }
      &:last-child {
        padding-right: 20px;
        border-right: none;
      }
    }
  }
`;

export const CellContent = styled.div`
  display: flex;
`;
export const Counter = styled.div`
  margin-right: 18px;
  font-size: 18px;
  font-weight: 600;
`;
export const PostDetail = styled.div``;
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 12px;
`;
export const PostLinkIcon = styled.div``;
export const PostMeta = styled.div`
  display: flex;
`;
export const PostType = styled.div``;
export const Author = styled.div``;
export const Category = styled.div``;
export const PublishedOn = styled.div``;
