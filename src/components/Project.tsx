
import styles from "./ExplorerComponent.module.css"
import { VscChevronRight } from "react-icons/vsc";
import { FaFolder, FaReact } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

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
        img: string
    }) => void;
};

const Project: React.FC<ProjectProps> = ({
    project,
    onProject
}) => {
    return (
        <details className={styles.dropTwo}>
            <summary className={styles.dropParentTwo} >
                <div className={styles.dropSpacing}></div>
                <VscChevronRight className={styles.arrowTwo} />
                <FaFolder className={styles.folder} />
                {project.name}
            </summary>
            <summary className={styles.dropChild}
                onClick={() => onProject(project)}>
                <div className={styles.dropSpacing}></div>
                <div className={styles.dropSpacingTwo}></div>
                <summary className={styles.dropContent}>
                    <FaReact className={styles.react} />
                    {project.name}.tsx
                </summary>
            </summary>
            <summary className={styles.dropChild}>
                <div className={styles.dropSpacing}></div>
                <div className={styles.dropSpacingTwo}></div>
                <summary className={styles.dropContent}>
                    <IoIosInformationCircle className={styles.info} />
                    <a href="https://github.com/durngyn" target="_blank">GITHUB.md</a>
                </summary>

            </summary>
        </details>

    )
};


export default Project;