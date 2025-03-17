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
    description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
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