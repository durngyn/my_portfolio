
import styles from "./ExplorerComponent.module.css";
import { VscChevronRight } from "react-icons/vsc";
import { FaFolder, FaReact } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa";
import { useTabs } from './TabsContext';
import { useState, useEffect } from 'react';

interface ProjectProps {
    project: {
        name: string;
        id: number;
        description: string;
        img: string;
    };
    onProject: (project: {
        name: string;
        id: number;
        description: string;
        img: string;
    }) => void;
}

const Project: React.FC<ProjectProps> = ({ project, onProject }) => {
    const { addTab, activeTabId, tabs } = useTabs();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (activeTabId) {
            const activeTab = tabs.find(tab => tab.id === activeTabId);
            if (activeTab && activeTab.projectData.id === project.id) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        } else {
            setIsActive(false);
        }
    }, [activeTabId, project.id, tabs]);

    const handleTsxClick = () => {

        onProject(project);

        addTab({
            id: `${project.id}-pdf`,
            label: `${project.name}.pdf`,
            projectData: project,
            type: 'pdf',
            test: () => {
                onProject(project);
            }
        });
    };

    return (
        <details className={`${styles.dropTwo} ${isActive ? styles.activeProject : ''}`}>
            <summary
                className={`${styles.dropChild} ${activeTabId === `${project.id}-pdf` ? styles.activeFile : ''}`}
                onClick={handleTsxClick}>
                <div className={styles.dropSpacing} ></div>
                <summary className={styles.dropContent}>
                    <FaFilePdf className={`${styles.pdf} ${activeTabId === `${project.id}-pdf` ? styles.activeIcon : ''}`} />
                    <span className={activeTabId === `${project.id}-pdf` ? styles.activeText : ''}>{project.name}.pdf</span>
                </summary>
            </summary>
        </details>
    );
};

export default Project;