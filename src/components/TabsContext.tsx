import React, { createContext, useState, useContext, ReactNode } from 'react';


interface Tab {
    id: string;
    label: string;
    projectData: {
        name: string;
        id: number;
        description: string;
        img: string;
    };
    type: 'tsx' | 'md' | 'pdf';
    test?: Function
}

interface TabsContextType {
    tabs: Tab[];
    activeTabId: string | null;
    addTab: (tab: Tab) => void;
    closeTab: (tabId: string) => void;
    setActiveTab: (tabId: string) => void;
    getActiveTabProject: () => Tab["projectData"] | null;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const TabsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tabs, setTabs] = useState<Tab[]>([]);
    const [activeTabId, setActiveTabId] = useState<string | null>(null);

    const addTab = (newTab: Tab) => {

        if (!tabs.some(tab => tab.id === newTab.id)) {
            setTabs(prevTabs => [...prevTabs, newTab]);
        }

        setActiveTabId(newTab.id);
    };

    const closeTab = (tabId: string) => {

        const tabIndex = tabs.findIndex(tab => tab.id === tabId);
        const closingTab = tabs[tabIndex];

        setTabs(prevTabs => prevTabs.filter(tab => tab.id !== tabId));

        if (activeTabId === tabId) {
            const remainingTabs = tabs.filter(tab => tab.id !== tabId);

            if (remainingTabs.length > 0) {
                const sameProjectTab = remainingTabs.find(tab =>
                    tab.projectData.id === closingTab.projectData.id
                );

                if (sameProjectTab) {
                    setActiveTabId(sameProjectTab.id);
                    sameProjectTab.test?.();
                } else {
                    const newActiveIndex = tabIndex === 0 ? 0 : tabIndex - 1;
                    const newActiveTab = remainingTabs[Math.min(newActiveIndex, remainingTabs.length - 1)];
                    setActiveTabId(newActiveTab.id);
                    newActiveTab.test?.();
                }
            } else {
                setActiveTabId(null);
            }
        }
    };

    const setActiveTab = (tabId: string) => {
        setActiveTabId(tabId);
    };

    const getActiveTabProject = () => {
        if (!activeTabId) return null;
        const activeTab = tabs.find(tab => tab.id === activeTabId);
        return activeTab ? activeTab.projectData : null;
    };

    return (
        <TabsContext.Provider value={{
            tabs,
            activeTabId,
            addTab,
            closeTab,
            setActiveTab,
            getActiveTabProject
        }}>
            {children}
        </TabsContext.Provider>
    );
};

export const useTabs = () => {
    const context = useContext(TabsContext);
    if (context === undefined) {
        throw new Error('useTabs must be used within a TabsProvider');
    }
    return context;
};