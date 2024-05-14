import styled from "styled-components";
import { Section } from "../shared/shared.styles";

export const MetricsWrapper = styled(Section)`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 16px;
  line-height: 1.4;
`;
export const Count = styled.div`
  font-size: 20px;
  line-height: 1.4;
  color: #334ab3;
`;
export const Unit = styled.span`
  color: #161718;
  padding-left: 4px;
`;
