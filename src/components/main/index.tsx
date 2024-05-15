import { MainWrapper, MainContent, TabsWrapper, Tab } from "./styles";
import TabSwitcher from "../tab-switcher";
import Posts from "../post-views";
import { Metrics } from "../metrics";
import { TopPosts } from "../top-posts";
import { Section } from "../shared/shared.styles";

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
            <Section ispadded="true">Author Tab placeholder</Section>
          </TabSwitcher.TabPanel>
          <TabSwitcher.TabPanel tabId={2}>
            <Section ispadded="true">Category Tab placeholder</Section>
          </TabSwitcher.TabPanel>
        </TabSwitcher>
      </MainContent>
    </MainWrapper>
  );
};

export default Main;
