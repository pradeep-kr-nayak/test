import React, { createContext, useContext, useEffect, useState } from "react";
import { TabSwitcherProps, TabsContextType } from "./types";

const TabsContext = createContext<TabsContextType>({
  activeTabId: "",
  updateTabId: () => null,
});

const TabSwitcher = ({ children }: TabSwitcherProps) => {
  const [activeTabId, setActiveTabId] =
    useState<TabsContextType["activeTabId"]>("");
  const updateTabId = (id: TabsContextType["activeTabId"]) =>
    setActiveTabId(id);
  return (
    <TabsContext.Provider value={{ activeTabId, updateTabId }}>
      {children}
    </TabsContext.Provider>
  );
};

const Tab = ({
  tabId,
  children,
  defaultOpen,
}: {
  tabId: TabsContextType["activeTabId"];
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const { activeTabId, updateTabId } = useContext(TabsContext);
  useEffect(() => {
    if (defaultOpen) {
      updateTabId(tabId);
    }
  }, [defaultOpen, tabId, updateTabId]);

  {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }
      return React.cloneElement(child as React.ReactElement, {
        onClick: () => updateTabId(tabId),
        className: activeTabId === tabId ? "condenast-active" : "",
      });
    });
  }
};

const TabPanel = ({
  tabId,
  children,
}: {
  tabId: TabsContextType["activeTabId"];
  children: React.ReactNode;
}) => {
  const { activeTabId } = useContext(TabsContext);
  return <>{tabId === activeTabId ? <>{children}</> : null}</>;
};

TabSwitcher.Tab = Tab;
TabSwitcher.TabPanel = TabPanel;

export default TabSwitcher;
