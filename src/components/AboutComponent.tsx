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
        description: "Hi, Im Darren Nguyen! I'm a recent graduate from California State Long Beach with a Bachelors degree in Comp Sci.",
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
