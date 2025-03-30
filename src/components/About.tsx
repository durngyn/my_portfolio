
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
    description: "I created a portfolio that resembles the Visual Studio Code, my go-to code editor, that I use for the majority of my projects. Mimics the aesthetics of VSC while having a straightforward UI/UX to emphasize the functionality of my portfolio site. This project uses the frontend tool, Vite, while using React TypeScript as my framework. I developed skills for utilizing Typescript with this project since previously I exclusively used JavaScript.",
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