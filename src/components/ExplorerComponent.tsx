// import { React } from "react";
import styles from "./ExplorerComponent.module.css"

import { VscChevronRight } from "react-icons/vsc";

import Project from "./Project";
import Resume from "./Resume";

interface ExplorerProps {
    onProjectClick: (projectId: {
        name: string;
        id: number;
        description: string;
        img: string
    }) => void;
}

const ExplorerComponent: React.FC<ExplorerProps> = ({ onProjectClick }) => {
    const projects = [
        {
            name: "Portfolio",
            id: 1,
            description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
            img: "/assets/vscode.png",
            link: "f"
        },
        {
            name: "Synczone",
            id: 2,
            description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
            img: "/assets/sz.png",
            link: "f"
        },
        {
            name: "Spotify",
            id: 3,
            description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
            img: "/assets/scout.jpg",
            link: "f"
        },
        {
            name: "Filler",
            id: 4,
            description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
            img: "/assets/winston.jpg",
            link: "f"
        },
    ]

    const resume = {
        name: "Resume(2025)",
        id: 0,
        description: "It is this site!!!",
        img: "images/vsc.png",
    }
    return (
        <div className={styles.leftBodyExplorer}>

            <details className={styles.drop}>
                <summary className={styles.dropParent} >
                    <VscChevronRight className={styles.arrow} />
                    MY_PROJECTS
                </summary>
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                        onProject={onProjectClick}
                    />
                ))}
            </details>
            <details className={styles.drop}>
                <summary className={styles.dropParent}>
                    <VscChevronRight className={styles.arrow} />
                    RESUME
                </summary>
                <Resume
                    key={resume.id}
                    project={resume}
                    onProject={onProjectClick} />
            </details>
        </div>
    );
};

export default ExplorerComponent