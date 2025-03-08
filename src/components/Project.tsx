
import styles from "./ExplorerComponent.module.css";
import { VscChevronRight } from "react-icons/vsc";
import { FaFolder, FaReact } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { useTabs } from './TabsContext';
import { useState, useEffect } from 'react';

interface ProjectProps {
    project: {
        name: string;
        id: number;
        description: string;
        img: string;
        link: string;
    };
    onProject: (project: {
        name: string;
        id: number;
        description: string;
        img: string;
        link: string;
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
            id: `${project.id}-tsx`,
            label: `${project.name}.tsx`,
            projectData: project,
            type: 'tsx',
            test: () => {
                onProject(project);
            }
        });
    };

    return (
        <details className={`${styles.dropTwo} ${isActive ? styles.activeProject : ''}`}>
            <summary className={`${styles.dropParentTwo} ${isActive ? styles.activeProjectParent : ''}`}>
                <div className={styles.dropSpacing}></div>
                <VscChevronRight className={styles.arrowTwo} />
                <FaFolder className={`${styles.folder} ${isActive ? styles.activeIcon : ''}`} />
                <span className={isActive ? styles.activeText : ''}>{project.name}</span>
            </summary>
            <summary
                className={`${styles.dropChild} ${activeTabId === `${project.id}-tsx` ? styles.activeFile : ''}`}
                onClick={handleTsxClick}
            >
                <div className={styles.dropSpacing} ></div>
                <div className={styles.dropSpacingTwo}></div>
                <summary className={styles.dropContent}>
                    <FaReact className={`${styles.react} ${activeTabId === `${project.id}-tsx` ? styles.activeIcon : ''}`} />
                    <span className={activeTabId === `${project.id}-tsx` ? styles.activeText : ''}>{project.name}.tsx</span>
                </summary>
            </summary>
            <summary
                className={`${styles.dropChild} ${activeTabId === `${project.id}-md` ? styles.activeFile : ''}`}>
                <div className={styles.dropSpacing}></div>

                <div className={styles.dropSpacingTwo}></div>
                <summary className={styles.dropContent}>
                    <IoIosInformationCircle className={`${styles.info} ${activeTabId === `${project.id}-md` ? styles.activeIcon : ''}`} />
                    <a
                        href={project.link}
                        onClick={(e) => e.preventDefault()}
                        className={activeTabId === `${project.id}-md` ? styles.activeText : ''}
                    >
                        GITHUB.md
                    </a>
                </summary>
            </summary>
        </details>
    );
};

export default Project;