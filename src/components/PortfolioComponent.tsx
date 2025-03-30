// import { React } from "react";
import Portfolio from "./Portfolio";

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

    const portfolio = {
        name: "About",
        id: 0,
        description: "Hi, Im Darren Nguyen! I'm a recent graduate from California State Long Beach with a Bachelors degree in Comp Sci.",
        img: "assets/blank.png",
        // link: "df",
        tech: ""
    }

    return (
        <Portfolio
            key={portfolio.id}
            project={portfolio}
            onProject={onProjectClick} />
    );
};

export default ExplorerComponent