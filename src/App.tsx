/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import styles from "./App.module.css";
import Typewriter from "./components/Typewriter";
import BlinkingCursor from "./components/BlinkingCursor";
import Explorer from "./components/ExplorerComponent";

import { VscGithub, VscFiles, VscChevronRight } from "react-icons/vsc";
import { FaLinkedin, FaFilePdf, FaFolder, FaReact } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { LuMailPlus } from "react-icons/lu";

import { useState, useEffect, useRef } from "react";
import ExplorerComponent from "./components/ExplorerComponent";

export default function Home() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  
  const [window, setWindow] = useState({
    img: "images/winston.jpg",
    name: "Portfolio"
  })

  useEffect(() => {
    if (textContainerRef.current) {

      const typewriter = new Typewriter(textContainerRef.current, { loop: true, typingSpeed: 50 });

      typewriter
        .deleteAll()
        .typeString("Hello, I'm Darren Nguyen")
        .pauseFor(200) 
        .typeString(" :")
        .pauseFor(230) 
        .typeString("^")
        .pauseFor(280) 
        .typeString(")")
        .pauseFor(3000) 
        .deleteChars(7)
        .pauseFor(230) 
        .deleteChars(24) 
        .typeString("This is my Portfolio Site!") //26
        .pauseFor(3000)
        .deleteChars(18) 
        .typeString(" site, I used =>")
        .pauseFor(1500) 
        .deleteAll()
        .typeString("HTML")
        .pauseFor(300)        
        .typeString(", CSS")
        .pauseFor(300) 
        .typeString(", & React TypeScript (TSX)")
        .pauseFor(3000) 
        .deleteChars(15)
        .pauseFor(300) 
        .deleteAll()
        .typeString("Darren Nguyen's Portfolio")
        .pauseFor(5000) 
        .start();
    }
  }, []);

  useEffect(() => {
    if (codeContainerRef.current) {

      const typewriter = new Typewriter(codeContainerRef.current, { loop: false, typingSpeed: 1 });

      typewriter       
        .typeString("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        .pauseFor(5000) 
        .start();
    }
  }, []);

  const [content, setContent] = useState({
    window: <ExplorerComponent/>
    // window: <div className ={styles.leftBodyExplorer}>
    //   <details className ={styles.drop}>
    //     <summary className ={styles.leftBodyDrop}>
    //         <VscChevronRight className ={styles.arrow}/> 
    //         <p>RESUME</p>
    //     </summary>
    //     <summary className ={styles.parentSpacing}>
    //       <div className ={styles.spacing}> </div>
    //       <div className ={styles.spacingTwo}>    
    //         <FaFilePdf className ={styles.pdf}/>    
    //         Resume(2025).pdf       
    //       </div>
    //     </summary>
    //   </details>
    //   <details className ={styles.drop}>
    //     <summary className ={styles.leftBodyDrop}>
    //       <VscChevronRight className ={styles.arrow}/> 
    //       <p>MY_PROJECTS</p>
    //     </summary>
    //     <details className ={styles.dropTwo}>
    //       <summary className ={styles.parentSpacing}>
    //         <div className ={styles.spacing}> </div>
    //         <div className ={styles.spacingTwo}>        
    //           <VscChevronRight className ={styles.arrowTwo}/>
    //           <FaFolder className ={styles.folder}/>
    //           Portfolio    
    //         </div>          
    //       </summary>
    //       <summary className ={styles.parentSpacing} onClick={() => setWindow({img: "images/winston.jpg", name: "Portfolio"})}>
    //       <div className ={styles.spacing}> </div>
    //       <div className ={styles.spacingThree} >    
    //         <FaReact className ={styles.react}/>    
    //         Portfolio.tsx      
    //       </div>
    //       </summary>
    //       <summary className ={styles.parentSpacing}>
    //       <div className ={styles.spacing}> </div>
    //       <div className ={styles.spacingThree}>    
    //       <IoIosInformationCircle className ={styles.info}/> 
    //         README.md      
    //       </div>
    //     </summary>
    //     </details>

    //     <details className ={styles.dropTwo}>
    //       <summary className ={styles.parentSpacing}>
    //         <div className ={styles.spacing}> </div>
    //         <div className ={styles.spacingTwo}>        
    //           <VscChevronRight className ={styles.arrowTwo}/>
    //           <FaFolder className ={styles.folder}/>
    //           Synczone     
    //         </div>          
    //       </summary>
    //       <summary className ={styles.parentSpacing } onClick={() => setWindow({img: "images/jett.jpg", name: "Synczone"})}>
    //         <div className ={styles.spacing}> </div>
    //         <div className ={styles.spacingThree} >    
    //         <FaReact className ={styles.react}/>    
    //           Synczone.tsx      
    //         </div>
    //       </summary>
    //       <summary className ={styles.parentSpacing}>
    //       <div className ={styles.spacing}> </div>
    //       <div className ={styles.spacingThree}>    
    //       <IoIosInformationCircle className ={styles.info}/>   
    //         README.md      
    //       </div>
    //     </summary>
    //     </details>
    //     <details className ={styles.dropTwo}>
    //       <summary className ={styles.parentSpacing}>
    //         <div className ={styles.spacing}> </div>
    //         <div className ={styles.spacingTwo}>        
    //           <VscChevronRight className ={styles.arrowTwo}/>
    //           <FaFolder className ={styles.folder}/>
    //           SpotifyDist.    
    //         </div>          
    //       </summary>
    //       <summary className ={styles.parentSpacing} onClick={() => setWindow({img: "images/scout.jpg", name: "Spotify"})}>
    //       <div className ={styles.spacing}> </div>
    //       <div className ={styles.spacingThree} >    
    //         <FaReact className ={styles.react}/>    
    //         Spotify.tsx      
    //       </div>
    //       </summary>
    //       <summary className ={styles.parentSpacing}>
    //       <div className ={styles.spacing}> </div>
    //       <div className ={styles.spacingThree}>    
    //         <IoIosInformationCircle className ={styles.info}/>    
    //         README.md      
    //       </div>
    //     </summary>
    //     </details>
    //   </details>
    //         </div>
            ,
    text: "EXPLORER"
  });

  const [terminal, setTerminal] = useState<{ window: any, render?: boolean }>({
    window: 
    <code className ={styles.cdText}>
      C:\Users\Darren Nguyen\my_projects\{window.name}
    </code>, 
    render : true
  });

  useEffect (() => {
    setTerminal (
      {window: 
        <code className ={styles.cdText}
        >C:\Users\Darren Nguyen\my_projects\{window.name}
        </code>}
    ) 
    console.log('testing')}, [window]);

  return (
    <div  className={styles.page}>
      <div className ={styles.nav}>
          <div className ={styles.leftNav}>
            <img src={"images/logo.png"} alt="Logo" style={{ width: '30px', height: 'auto'}} />

            <button className={styles.navButton}>File</button>

            <div className={styles.dropdown}>
              <button className={styles.navButton}>
                
                Projects
              </button>
              {/* {isOpen && (  */}
              <div className={styles.dc}>   
                <a >Synczone</a>
                <a >Portfolio</a>
                
              </div>
              {/* )} */}
            </div>
            <div className={styles.dropdown}>
              <button className={styles.navButton}>
                
                Socials
              </button>
              {/* {isOpen && (  */}
              <div className={styles.dc}>   
                <a href="https://www.linkedin.com/in/darren-n-in/" target="_blank">LinkedIn</a>
                <a href="https://github.com/durngyn" target="_blank">Github</a>
                
                <a >Instagram</a>
                <a >Discord</a>
                
              </div>
              {/* )} */}
            </div>

            <button className={styles.navButton}>About</button>         
          </div>
          <div className ={styles.midNav}>
            <div className ={styles.textBox}>
              {/* <img src={"images/mag.png"} alt="Logo"  /> */}
              <h1 className = {styles.title}>
              
              <div style={{ display: 'inline-block' }} ref={textContainerRef}></div>
               <BlinkingCursor />                                           
              </h1>            
            </div>
          </div>
          <div className ={styles.rightNav}>
            
          </div>
      </div>
      <div className = {styles.body}>
        <div className = {styles.sideBar}>
          <button  className = {styles.sideButton} onClick={() => setContent({
              window: <div className ={styles.leftBodyExplorer}>
              <details className ={styles.drop}>
                <summary className ={styles.leftBodyDrop}>
                    <VscChevronRight className ={styles.arrow}/> 
                    <p>RESUME</p>
                </summary>
                <summary className ={styles.parentSpacing}>
                  <div className ={styles.spacing}> </div>
                  <div className ={styles.spacingTwo}>    
                    <FaFilePdf className ={styles.pdf}/>    
                    Resume(2025).pdf       
                  </div>
                </summary>
              </details>
              <details className ={styles.drop}>
                <summary className ={styles.leftBodyDrop}>
                  <VscChevronRight className ={styles.arrow}/> 
                  <p>MY_PROJECTS</p>
                </summary>
                <details className ={styles.dropTwo}>
                  <summary className ={styles.parentSpacing}>
                    <div className ={styles.spacing}> </div>
                    <div className ={styles.spacingTwo}>        
                      <VscChevronRight className ={styles.arrowTwo}/>
                      <FaFolder className ={styles.folder}/>
                      Portfolio    
                    </div>          
                  </summary>
                  <summary className ={styles.parentSpacing}>
                  <div className ={styles.spacing}> </div>
                  <div className ={styles.spacingThree} onClick={() => setWindow({img: "images/winston.jpg", name: "Portfolio"})}>    
                    <FaReact className ={styles.react}/>    
                    Portfolio.tsx      
                  </div>
                  </summary>
                  <summary className ={styles.parentSpacing}>
                  <div className ={styles.spacing}> </div>
                  <div className ={styles.spacingThree}>    
                  <IoIosInformationCircle className ={styles.info}/> 
                    README.md      
                  </div>
                </summary>
                </details>
        
                <details className ={styles.dropTwo}>
                  <summary className ={styles.parentSpacing}>
                    <div className ={styles.spacing}> </div>
                    <div className ={styles.spacingTwo}>        
                      <VscChevronRight className ={styles.arrowTwo}/>
                      <FaFolder className ={styles.folder}/>
                      Synczone     
                    </div>          
                  </summary>
                  <summary className ={styles.parentSpacing}>
                    <div className ={styles.spacing}> </div>
                    <div className ={styles.spacingThree} onClick={() => setWindow({img: "images/jett.jpg", name: "Synczone"})}>    
                    <FaReact className ={styles.react}/>    
                      Synczone.tsx      
                    </div>
                  </summary>
                  <summary className ={styles.parentSpacing}>
                  <div className ={styles.spacing}> </div>
                  <div className ={styles.spacingThree}>    
                  <IoIosInformationCircle className ={styles.info}/>   
                    README.md      
                  </div>
                </summary>
                </details>
                <details className ={styles.dropTwo}>
                  <summary className ={styles.parentSpacing}>
                    <div className ={styles.spacing}> </div>
                    <div className ={styles.spacingTwo}>        
                      <VscChevronRight className ={styles.arrowTwo}/>
                      <FaFolder className ={styles.folder}/>
                      SpotifyDist.    
                    </div>          
                  </summary>
                  <summary className ={styles.parentSpacing}>
                  <div className ={styles.spacing}> </div>
                  <div className ={styles.spacingThree} onClick={() => setWindow({img: "images/scout.jpg", name: "Spotify"})}>    
                    <FaReact className ={styles.react}/>    
                    Spotify.tsx      
                  </div>
                  </summary>
                  <summary className ={styles.parentSpacing}>
                  <div className ={styles.spacing}> </div>
                  <div className ={styles.spacingThree}>    
                    <IoIosInformationCircle className ={styles.info}/>    
                    README.md      
                  </div>
                </summary>
                </details>
              </details>
                    </div>,
            text: "EXPLORER"
          })}>
            <VscFiles  style={{ color: 'rgb(114 118 126)',fontSize: '45px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          <button onClick={() => setContent({
             window: <div className ={styles.leftBodyMail}>

             </div>,
             text: "EMAIL"
          })}>
            <LuMailPlus  style={{ color: 'rgb(114 118 126)',fontSize: '40px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          <button onClick={() => setContent({
             window: <div className ={styles.leftBodyIn}>
             </div>,
             text: "LINKEDIN"
          })}>
            <FaLinkedin  style={{ color: 'rgb(114 118 126)',fontSize: '40px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          <button onClick={() => setContent({
             window: <div className ={styles.leftBodyGithub}>
              <iframe src="https://www.rapidtables.com/convert/color/hex-to-rgb.html?hex=acafb5"></iframe>
             </div>,
             text: "GITHUB"
          })}>
            <VscGithub  style={{ color: 'rgb(114 118 126)',fontSize: '40px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "grey")}/>
          </button>
          
        </div>
        <div className ={styles.mainBody}>

          <div className ={styles.topBar}> 
            <div className ={styles.exploreBox}>
              <p className ={styles.explorer}>
                {content.text}
              </p>
            </div>
          </div>
          
          <div className ={styles.bottomBody}>

            {content.window}

            <div className ={styles.rightBody}>
              <div className ={styles.directory}>
                <p>{window.name}</p>
              </div>
              <div className ={styles.code}>

                <div className ={styles.topCode}> 
                  <div className ={styles.name}>
                    <h1> {window.name}</h1>
                  </div>
                  <code className ={styles.desc}>
                    <div ref={codeContainerRef}></div>
                  </code>
                </div>                
               <div className ={styles.bottomCode}> 
                  <img src={window.img} style={{ width: '600px', height: 'auto'}}/>
                </div>                        
              </div>
              <div className ={styles.terminal}> 
                <div className ={styles.tab}>
                  <button onClick={() => setTerminal({
                  window: <code> </code> })}>
                  PROBLEMS
                  </button>
                  <button onClick={() => setTerminal({
                  window: <code></code>
                  })}>OUTPUT</button>
                  <button onClick={() => setTerminal({
                  window: <code></code>
                  })}>DEBUG CONSOLE</button>
                  <button onClick={() => setTerminal({
                  window: 
                  <code className ={styles.cdText}
                  >C:\Users\Darren Nguyen\my_projects\{window.name}
                  </code>
                  
                  })} className ={styles.term}>TERMINAL</button>
                  <button onClick={() => setTerminal({
                  window: <code></code>
                  })}>PORTS</button>
                  <button onClick={() => setTerminal({
                  window: <code></code>
                  })}>COMMENTS</button>

                </div>
                <div className ={styles.cd}>
                  {terminal.window}                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
