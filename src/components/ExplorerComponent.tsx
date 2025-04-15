// import { React } from "react";
import styles from "./ExplorerComponent.module.css"

import { VscChevronRight } from "react-icons/vsc";
import { FaFolder } from "react-icons/fa";

import Project from "./Project";
import Resume from "./Resume";
import Tech from "./Tech";

import {
    SiPython,
    SiCplusplus,
    SiHaskell,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiMongodb,
    SiFirebase,
    SiSupabase,
} from 'react-icons/si';

import { FaJava, FaDatabase } from 'react-icons/fa';

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
            description: "I created a portfolio that resembles the Visual Studio Code, my go-to code editor, that I use for the majority of my projects. Mimics the aesthetics of VSC while having a straightforward UI/UX to emphasize the functionality of my portfolio site. This project uses the frontend tool, Vite, while using React TypeScript as my framework. I developed skills for utilizing Typescript with this project since previously I exclusively used JavaScript.",
            img: "/assets/vsc3.png",
            link: "https://github.com/durngyn/my_portfolio",
            tech: "Vite, React TypeScript"
        },
        {
            name: "Synczone",
            id: 2,
            description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
            img: "/assets/sz2.png",
            link: "https://github.com/Boroshilov03/SyncZone",
            tech: "Native React, Supabase, Hume AI"
        },
        {
            name: "Graphify",
            id: 3,
            description: "Graphify enables users to visualize data from their Spotify playlists, displaying genre distributions and offering real-time interaction with others on the site. By using the Spotify Web API, users can log in, select playlists, and view detailed genre analysis. The platform integrates WebSockets for live interaction and uses MongoDB for data storage. The project also aims to provide Spotify playback capabilities for premium users, with future plans to enhance UI, manage access tokens, and improve overall user experience.",
            img: "/assets/spot.png",
            link: "https://github.com/bchh325/spotify-distribution",
            tech: "ReactJS, Node.js, Spotify API/SDK, MongoDB"
        },
        {
            name: "Weather App",
            id: 4,
            description: "This weather App gives the user the temperature and weather conditions. This quick, small project served as a way to get introduced to utilizing API's in my projects. Also, an introduction to using React JavaScript.",
            img: "/assets/weather.png",
            link: "https://github.com/durngyn/Weather-App",
            tech: "AccuWeather API, ReactJS, HTML, and CSS"
        },
    ]

    const resume = {
        name: "About",
        id: 0,
        description: "Hi, Im Darren Nguyen! I'm a recent graduate from California State University of Long Beach with a Bachelors degree in Comp Sci. I created this Vscode inspired protfolio to etend my passion and education for web development! ",
        img: "assets/blank.png",
        // link: "df",
        tech: ""
    }

    return (
        <div className={styles.leftBodyExplorer}>

            <details open className={styles.drop}>
                <summary className={styles.dropParent}>
                    <VscChevronRight className={styles.arrow} />
                    ABOUT
                </summary>
                <Resume
                    key={resume.id}
                    project={resume}
                    onProject={onProjectClick} />
                <summary>
                    <details className={styles.dropTwo}>
                        <summary className={styles.dropChild}>
                            <div className={styles.dropSpacing} ></div>
                            <VscChevronRight className={styles.arrowTwo} />
                            <FaFolder className={styles.folder} />
                            Technologies/Skills
                        </summary>

                        <Tech
                            name="HTML"
                            img={<SiHtml5 className={styles.react} style={{ color: "#f24405" }} />} />
                        <Tech
                            name="CSS"
                            img={<SiCss3 className={styles.react} style={{ color: "#328adb" }} />} />
                        <Tech
                            name="JavaScript"
                            img={<SiJavascript className={styles.react} style={{ color: "#dbca32" }} />} />
                        <Tech
                            name="TypeScript"
                            img={<SiTypescript className={styles.react} style={{ color: "#328adb" }} />} />
                        <Tech
                            name="React (JSX/TSX)"
                            img={<SiReact className={styles.react} style={{ color: "#328adb" }} />} />
                        <Tech
                            name="SQL"
                            img={<FaDatabase className={styles.react} style={{ color: "#d97511" }} />} />
                        <Tech
                            name="MongoDB"
                            img={<SiMongodb className={styles.react} style={{ color: "#11d968" }} />} />
                        <Tech
                            name="Supabase"
                            img={<SiSupabase className={styles.react} style={{ color: "#11d993" }} />} />
                        <Tech
                            name="Firebase"
                            img={<SiFirebase className={styles.react} style={{ color: "#d98911" }} />} />

                        <Tech
                            name="Python"
                            img={<SiPython className={styles.react} style={{ color: "#0ca63a" }} />} />
                        <Tech
                            name="Java"
                            img={<FaJava className={styles.react} style={{ color: "#d93d11" }} />} />
                        <Tech
                            name="C++"
                            img={<SiCplusplus className={styles.react} style={{ color: "#0c4ea6" }} />} />
                        <Tech
                            name="Haskall"
                            img={<SiHaskell className={styles.react} style={{ color: "#433159" }} />} />
                    </details>
                </summary>

            </details>

            <details open className={styles.drop}>
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

        </div>
    );
};

export default ExplorerComponent