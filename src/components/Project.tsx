
import styles from "./ExplorerComponent.module.css"
import { VscChevronRight } from "react-icons/vsc";
import { FaLinkedin, FaFilePdf, FaFolder, FaReact } from "react-icons/fa";

interface ProjectProps {
    name: string;
    description: string;
    img?: number;
    icon?: number;
};

const Project: React.FC<ProjectProps> = ({
    name,
    description,
    img,
    icon,
}) => {
    return (
        <details className={styles.dropTwo}>
            <summary className={styles.dropParentTwo} >
                <div className={styles.dropSpacing}></div>
                <VscChevronRight className={styles.arrowTwo} />
                <FaFolder className={styles.folder} />
                {name}
            </summary>
            <summary className={styles.dropChild}>
                <div className={styles.dropSpacing}></div>
                <div className={styles.dropSpacingTwo}></div>
                <summary className={styles.dropContent}>
                    span
                </summary>
            </summary>
            <summary className={styles.dropChild}>
                <div className={styles.dropSpacing}></div>
                <div className={styles.dropSpacingTwo}></div>
                <summary className={styles.dropContent}>
                    span
                </summary>

            </summary>
        </details>

    )
};


export default Project;