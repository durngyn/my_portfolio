
import styles from "./ExplorerComponent.module.css";
import { VscChevronRight } from "react-icons/vsc";
import { FaFolder, FaReact } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { useTabs } from './TabsContext';

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
    const { addTab } = useTabs();

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

    const handleMdClick = () => {

        const mdProject = {
            ...project,
            description: `# GitHub Repository for ${project.name}\n\nThis is the GitHub documentation for the ${project.name} project.\n\nCheck out the code at https://github.com/durngyn/${project.name.toLowerCase()}`
        };

        onProject(mdProject);

        addTab({
            id: `${project.id}-md`,
            label: `GITHUB.md`,
            projectData: mdProject,
            type: 'md'
        });
    };

    return (
        <details className={styles.dropTwo}>
            <summary className={styles.dropParentTwo}>
                <div className={styles.dropSpacing}></div>
                <VscChevronRight className={styles.arrowTwo} />
                <FaFolder className={styles.folder} />
                {project.name}
            </summary>
            <summary className={styles.dropChild} onClick={handleTsxClick}>
                <div className={styles.dropSpacing}></div>
                <div className={styles.dropSpacingTwo}></div>
                <summary className={styles.dropContent}>
                    <FaReact className={styles.react} />
                    {project.name}.tsx
                </summary>
            </summary>
            <summary className={styles.dropChild} onClick={handleMdClick}>
                <div className={styles.dropSpacing}></div>
                <div className={styles.dropSpacingTwo}></div>
                <summary className={styles.dropContent}>
                    <IoIosInformationCircle className={styles.info} />
                    <a href="#" onClick={(e) => e.preventDefault()}>GITHUB.md</a>
                </summary>
            </summary>
        </details>
    );
};

export default Project;