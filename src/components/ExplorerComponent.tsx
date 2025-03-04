import React from "react";
import styles from "./ExplorerComponent.module.css"

import { VscChevronRight } from "react-icons/vsc";
import { FaLinkedin, FaFilePdf, FaFolder, FaReact } from "react-icons/fa";
import Project from "./Project";

const ExplorerComponent = () => {
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
                <Project
                    name={"Portfolio"}
                    description={"blah blah"} />
                <Project
                    name={"SyncZone"}
                    description={"blah blah"} />
                <Project
                    name={"SpotifyDist."}
                    description={"blah blah"} />
            </details>
        </div>
    )
};

export default ExplorerComponent