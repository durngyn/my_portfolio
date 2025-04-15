import React from 'react'

import styles from "./ExplorerComponent.module.css"

interface TechProps {
    name?: string;
    img?: React.ReactNode;

}
const Tech: React.FC<TechProps> = ({
    name,
    img,
}) => {
    return (
        <a className={styles.dropChild}>
            <div className={styles.dropSpacing} ></div>
            <div className={styles.dropSpacingTwo}></div>
            <span className={styles.dropContent}>
                {img}
                {name}
            </span>
        </a>
    )
};

export default Tech;
