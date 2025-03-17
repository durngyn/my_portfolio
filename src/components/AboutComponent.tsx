import About from "./About";

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
    const about = {
        name: "About",
        id: 5,
        description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
        img: "/assets/vsc3.png",
        link: "https://github.com/durngyn/my_portfolio",
        tech: "Vite, React TypeScript, HTML, & CSS"
    };

    return (
        <About
            key={about.id}
            project={about}
            onProject={onProjectClick}

        />
    );
};

export default ExplorerComponent;
