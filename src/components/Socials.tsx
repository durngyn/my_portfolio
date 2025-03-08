import React from 'react'

import styles from "../App.module.css";


interface SocialProps {
    name?: string;
    link?: string;
    tag?: string;

}
const Socials: React.FC<SocialProps> = ({
    name,
    link,
    tag,
}) => {
    return (
        <div className={styles.horzontalDc}>
            <a href={link} target="_blank">{name}</a>
            <a target="_blank">{tag}</a>
        </div>
    )
};

export default Socials;
