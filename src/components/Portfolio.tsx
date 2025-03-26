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
}

const defaultProject = {
    name: "Portfolio",
    id: 1,
    description: "Created a portfolio to resemble the Visual Studio Code IDE, my go-to tool I use for the majority of my projects. Mimics the athetics of VSC while having straightfoward UI to emphasize the functionality of my built portfolio site. This projects uses the frontend tool, Vite, while using Typescript React as my framework. I gained handon experience with Typescript, sicne previously, JS was my go-to for web development.",
    img: "/assets/port.png",
    tech: "React TypeScript, HTML, and CSS"
};

const defaultOnProject = (project: {
    name: string;
    id: number;
    description: string;
    img: string;
}) => {
    console.log("Project selected:", project.name);
};

const Project: React.FC<ProjectProps> = ({ project = defaultProject, onProject = defaultOnProject, }) => {
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

    return (
        <button className={styles.navButton} onClick={handleTsxClick}>
            <span onClick={handleTsxClick}>Home</span>
        </button>
    );
};

export default Project;