import { MainWrapper, MainContent } from "./styles";
import styled from "styled-components";
import TabSwitcher from "../tab-switcher";
import Posts from "../post-views";
import { Metrics } from "../metrics";
import { TopPosts } from "../top-posts";

const TabsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  line-height: 16px;
`;

const Tab = styled.button`
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

const Main = () => {
  return (
    <MainWrapper>
      <MainContent>
        <TabSwitcher>
          <TabsWrapper>
            <TabSwitcher.Tab tabId={0}>
              <Tab>Posts</Tab>
            </TabSwitcher.Tab>
            <TabSwitcher.Tab tabId={1}>
              <Tab>Author</Tab>
            </TabSwitcher.Tab>
            <TabSwitcher.Tab tabId={2}>
              <Tab>Category</Tab>
            </TabSwitcher.Tab>
          </TabsWrapper>

          <TabSwitcher.TabPanel tabId={0}>
            <div>
              <Posts />
              <Metrics />
              <TopPosts />
            </div>
          </TabSwitcher.TabPanel>
          <TabSwitcher.TabPanel tabId={1}>
            <div>Author Tab placeholder</div>
          </TabSwitcher.TabPanel>
          <TabSwitcher.TabPanel tabId={2}>
            <div>Category Tab placeholder</div>
          </TabSwitcher.TabPanel>
        </TabSwitcher>
      </MainContent>
    </MainWrapper>
  );
};

export default Main;
