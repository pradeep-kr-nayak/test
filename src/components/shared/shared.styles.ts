import styled from "styled-components";

export const Section = styled.section<{ ispadded?: string }>`
  border: 1px solid #cccbcb;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 15px;
  background-color: #ffffff;
  padding: ${({ ispadded }) => (ispadded === "true" ? "20px" : "")};
`;
