export type TabSwitcherProps = {
  children: React.ReactNode;
};

export type TabsContextType = {
  activeTabId: string | number;
  updateTabId: (id: TabsContextType["activeTabId"]) => void;
};
