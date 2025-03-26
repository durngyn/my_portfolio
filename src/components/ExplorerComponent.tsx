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
        img: string;
        link?: string;
        tech: string;
    }) => void;
}

const ExplorerComponent: React.FC<ExplorerProps> = ({ onProjectClick }) => {
    const projects = [
        {
            name: "Portfolio",
            id: 1,
            description: "Created a portfolio to resemble the Visual Studio Code IDE, my go-to tool I use for the majority of my projects. Mimics the athetics of VSC while having straightfoward UI to emphasize the functionality of my built portfolio site. This projects uses the frontend tool, Vite, while using Typescript React as my framework. I gained handon experience with Typescript, sicne previously, JS was my go-to for web development.",
            img: "/assets/vsc3.png",
            link: "https://github.com/durngyn/my_portfolio",
            tech: "Vite, React TypeScript, HTML, & CSS"
        },
        {
            name: "Synczone",
            id: 2,
            description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
            img: "/assets/sz.png",
            link: "https://github.com/Boroshilov03/SyncZone",
            tech: "Native React, Supabase, Huma AI, HTML & CSS"
        },
        {
            name: "Spotify",
            id: 3,
            description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
            img: "/assets/spot.png",
            link: "https://github.com/bchh325/spotify-distribution",
            tech: "React TypeScript, HTML, and CSS"
        },
        {
            name: "Filler",
            id: 4,
            description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
            img: "/assets/winston.jpg",
            link: "f",
            tech: "React TypeScript, HTML, and CSS"
        },
    ]

    const resume = {
        name: "Resume(2025)",
        id: 0,
        description: "It is this site!!!",
        img: "images/vsc.png",
        // link: "df",
        tech: "React TypeScript, HTML, and CSS"
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