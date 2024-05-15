import styled from "styled-components";
import { Section } from "../shared/shared.styles";

export const TopPostsWrapper = styled(Section)`
  padding-left: 0;
  padding-right: 0;
`;
export const Table = styled.table<{ clickedColumn?: number }>`
  width: 100%;
  table-layout: fixed;
  th {
    font-size: 16px;
    font-weight: 500;
    border-right: 1px solid #cccbcb;
    padding-top: 16px;
    padding-left: 20px;
    text-align: left;
    &:first-child {
      font-weight: 400;
      font-size: 24px;
      line-height: 1.2;
      padding-bottom: 20px;
      width: 560px;
    }
    &:last-child {
      padding-right: 20px;
      border-right: none;
    }
  }
  tr {
    border-bottom: 1px solid #cccbcb;
    td {
      border-right: 1px solid #cccbcb;
      text-align: left;
      padding: 14px 14px 14px 0;
      padding-left: 20px;
      vertical-align: middle;
      &:first-child {
        width: 560px;
      }
      &:last-child {
        padding-right: 20px;
        border-right: none;
      }
    }
  }
  tfoot {
    td {
      border: none;
      &:last-child {
        text-align: right;
        padding-right: 30px;
        > * {
          margin-left: 20px;
          cursor: pointer;
          display: inline-block;
        }
      }
    }
  }
  ${({ clickedColumn }) =>
    clickedColumn
      ? `
    tbody , thead {
    tr {
        th:nth-child(${clickedColumn}) , td:nth-child(${clickedColumn}){
        background: #EDEFFE;
    }}}
  `
      : ""}
`;

export const CellContent = styled.div`
  display: flex;
`;
export const Counter = styled.div`
  margin-right: 18px;
  font-size: 18px;
  font-weight: 600;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 12px;
  a {
    display: inline-block;
    margin-left: 10px;
  }
`;
export const PostMeta = styled.div`
  display: flex;
  > * {
    font-size: 14px;
    margin-right: 14px;
    color: #575959;
  }
`;
export const PostType = styled.div`
  font-weight: bold;
  color: #575657;
`;

export const SortingIconAligner = styled.div`
  display: inline-block;
  margin-left: 6px;
  cursor: pointer;
`;

export const InlineBlock = styled.div`
  display: inline-block;
`;
