// import { React } from "react";
import styles from "./ExplorerComponent.module.css"

import { VscChevronRight } from "react-icons/vsc";
import { FaFilePdf } from "react-icons/fa";
import Project from "./Project";

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
            description: "It is this site!!!",
            img: "images/winston.jpg",
        },
        {
            name: "Synczone",
            id: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in pariatur quibusdam sint voluptas placeat nulla atque nam aspernatur, ad dolorum debitis quaerat! Libero consequuntur maxime laborum a error expedita.",
            img: "images/jett.jpg",
        },
        {
            name: "Spotify",
            id: 3,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in pariatur quibusdam sint voluptas placeat nulla atque nam aspernatur, ad dolorum debitis quaerat! Libero consequuntur maxime laborum a error expedita.",
            img: "images/scout.jpg",
        },
    ]
    return (
        <div className={styles.leftBodyExplorer}>
            <details className={styles.drop}>
                <summary className={styles.dropParent} >
                    <VscChevronRight className={styles.arrow} />
                    RESUME
                </summary>
                <div className={styles.dropChild}>
                    <div className={styles.dropSpacing}></div>
                    <summary className={styles.dropContent}>
                        <FaFilePdf className={styles.pdf} />
                        Resume(2025).pdf
                    </summary>
                </div>
            </details>
            <details className={styles.drop}>
                <summary className={styles.dropParent} >
                    <VscChevronRight className={styles.arrow} />
                    MY_PROJECTS
                </summary>
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                        onProject={onProjectClick} />
                ))}
            </details>
        </div>
    );
};

export default ExplorerComponent