import React from "react";
import styles  from "./ExplorerComponent.module.css"

import { VscChevronRight } from "react-icons/vsc";

const ExplorerComponent = () => {
    return (
        <div className ={styles.leftBodyExplorer}>
            <details className = {styles.drop}>
                <summary className = {styles.dropParent} >
                    <VscChevronRight className ={styles.arrow}/>
                    Resume
                </summary>
                <div className = {styles.dropChild}>
                    <div className = {styles.dropSpacing}></div>
                    <summary >span</summary>
                </div>
            </details>
            <details className = {styles.drop}>
                <summary className = {styles.dropParent} >
                    <VscChevronRight className ={styles.arrow}/>
                    MY_PROJECTS
                </summary>
                <details className = {styles.drop}>
                    <summary className = {styles.dropParent} >
                    <VscChevronRight className ={styles.arrow}/>
                    resume
                    </summary>
                    <div className = {styles.dropChild}>
                        <div className = {styles.dropSpacing}></div>
                        <summary >span</summary>
                    </div>
            </details>
            </details>
        </div>
    )
};

export default ExplorerComponent