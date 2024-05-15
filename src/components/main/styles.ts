import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f3f3f3;
  border-top: 1px solid #cccbcb;
  padding-bottom: 40px;
`;

export const MainContent = styled.div`
  width: 1200px;
  margin: auto;
`;

export const TabsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  line-height: 16px;
`;

export const Tab = styled.button`
  margin-right: 15px;
  height: 40px;
  line-height: 1.2;
  color: #171918;
  background-color: transparent;
  padding: 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  &.condenast-active {
    color: #334ab2;
    border-color: #334ab2;
  }
`;
