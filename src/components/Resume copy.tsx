
import styles from "./ExplorerComponent.module.css";
import { FaFilePdf } from "react-icons/fa";
import { useTabs } from './TabsContext';
import { useState, useEffect } from 'react';

interface ProjectProps {
    project: {
        name: string;
        id: number;
        description: string;
        img: string;
        tech: string;
    };
    onProject: (project: {
        name: string;
        id: number;
        description: string;
        img: string;
        tech: string;
    }) => void;
}

const defaultProject = {
    name: "Portfolio",
    id: 1,
    description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
    img: "/assets/port.png",
    tech: "React TypeScript, HTML, and CSS"
};

const defaultOnProject = (project: {
    name: string;
    id: number;
    description: string;
    img: string;
}) => {
    console.log("Project selected:", project.name);
};

const Project: React.FC<ProjectProps> = ({ project = defaultProject, onProject = defaultOnProject, }) => {
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