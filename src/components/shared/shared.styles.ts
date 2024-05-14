import styled from "styled-components";

export const Section = styled.section<{ isPadded?: boolean }>`
  border: 1px solid #cccbcb;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 15px;
  background-color: #ffffff;
  padding: ${({ isPadded }) => (isPadded ? "20px" : "")};
`;
