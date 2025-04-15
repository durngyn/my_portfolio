
import styles from "../App.module.css";
import { useTabs } from './TabsContext';

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
    toggleSide?: () => void;
}

const defaultProject = {
    name: "Portfolio",
    id: 1,
    description: "Hi, Im Darren Nguyen! I'm a recent graduate from California State Long Beach with a Bachelors degree in Comp Sci.",
    img: "/assets/port.png",
    tech: "React TypeScript, HTML, and CSS"
};

const defaultOnProject = (project: {
    name: string;
    id: number;
    description: string;
    img: string;
    tech: string;
}) => {
    console.log("Project selected:", project.name);
};

const Project: React.FC<ProjectProps> = ({ project = defaultProject, onProject = defaultOnProject, toggleSide }) => {
    const { addTab } = useTabs();

    const handleTsxClick = () => {
        onProject(project);
        if (toggleSide) {
            toggleSide();
        }
        addTab({
            id: `${project.id}-md`,
            label: `${project.name}.md`,
            projectData: project,
            type: 'md',
            test: () => {
                onProject(project);
            }
        });


    };

    return (
        <button className={styles.navButton} onClick={handleTsxClick}>
            <span>About</span>
        </button>
    );
};

export default Project;