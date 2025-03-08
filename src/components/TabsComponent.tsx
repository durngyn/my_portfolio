import React from 'react';
import styles from './TabsComponent.module.css';
import { useTabs } from './TabsContext';
import { VscClose } from 'react-icons/vsc';
import { FaReact } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';

const TabsComponent: React.FC = () => {
    const { tabs, activeTabId, closeTab, setActiveTab } = useTabs();

    if (tabs.length === 0) {
        return null;
    }

    const getTabIcon = (type: string) => {
        switch (type) {
            case 'tsx':
                return <FaReact className={styles.tabIcon} />;
            case 'pdf':
                return <FaFilePdf className={styles.tabIconPdf} />;
            default:
                return null;
        }
    };

    const handleClick = (id: any, callback: any) => {
        setActiveTab(id)
        callback()
    }

    return (
        <div className={styles.tabs}>
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={`${styles.tab} ${tab.id === activeTabId ? styles.activeTab : ''}`}
                    onClick={() => { handleClick(tab.id, tab.test) }}>
                    {getTabIcon(tab.type)}
                    <span className={styles.tabLabel}>{tab.label}</span>
                    <button
                        className={styles.closeButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            closeTab(tab.id);
                        }}>
                        <VscClose />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TabsComponent;