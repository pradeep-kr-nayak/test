import styled from "styled-components";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

export const FilterWrapper = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const FiltersLeft = styled.div`
  display: flex;
  flex: 1 0 auto;
  > * {
    margin-right: 10px;
  }
`;
export const FiltersRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;
`;

export const FilterButton = styled.button`
  background-color: #ffffff;
  line-height: 16px;
  padding: 10px 20px;
  border: 1px solid #cccbcb;
  cursor: pointer;
  &:first-child {
    border-radius: 3px 0 0 3px;
  }
  &:last-child {
    border-radius: 0 3px 3px 0;
  }
  &.active {
    background-color: #edeffe;
    border-color: #354ab2;
  }
`;

export const FilterCountButton = styled(FilterButton)`
  border: 2px solid #cccbcb;
  display: flex;
  padding: 10px 8px;
  min-width: 106px;
  align-items: center;
  justify-content: space-around;
  border-radius: 3px;
  svg {
    width: 16px;
  }
`;

export const RefreshButton = styled.button`
  background-color: transparent;
  display: flex;
  min-width: 100px;
  justify-content: space-around;
  cursor: pointer;
`;

export const DateRangePickerStyled = styled(DateRangePicker)`
  background: #ffffff;
  border: 1px solid #cccbcb;
  border-radius: 3px;
  box-shadow: none;
  padding: 0 20px;
  .react-daterange-picker__wrapper {
    border: none;
  }
  .react-daterange-picker__inputGroup__input:invalid {
    background: transparent;
  }
  input {
    outline: none;
  }
`;
