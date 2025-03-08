/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import styles from "./App.module.css";
import Typewriter from "./components/Typewriter";
import BlinkingCursor from "./components/BlinkingCursor";

import { VscGithub, VscFiles } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

import { LuMailPlus } from "react-icons/lu";

import { useState, useEffect, useRef } from "react";
import ExplorerComponent from "./components/ExplorerComponent";

import { TabsProvider } from "./components/TabsContext";
import TabsComponent from "./components/TabsComponent";
import Socials from "./components/Socials";



export default function Home() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  const [window, setWindow] = useState({
    img: "",
    name: ""
  })

  const [selectedProject, setSelectedProject] = useState<{ name: string; id: number; description: string; img: string } | null>(null);

  useEffect(() => {
    if (textContainerRef.current) {

      const typewriter = new Typewriter(textContainerRef.current, { loop: false, typingSpeed: 50 });

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
      codeContainerRef.current.innerHTML = "";

      if (selectedProject?.description) {
        const typewriter = new Typewriter(codeContainerRef.current, {
          loop: false,
          typingSpeed: 1,
        });
        typewriter
          .typeString(selectedProject.description)
          .pauseFor(5000)
          .start();
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      setWindow({
        img: selectedProject.img,
        name: selectedProject.name,
      });
    }
  }, [selectedProject]);

  const [content, setContent] = useState({
    window: <ExplorerComponent onProjectClick={setSelectedProject} />,
    text: "EXPLORER"
  });

  // const [terminal, setTerminal] = useState<{ window: any, render?: boolean }>({
  //   window:
  //     <code className={styles.cdText}>
  //       C:\Users\Darren Nguyen\my_projects\{selectedProject?.name}&gt;
  //     </code>,
  //   render: true
  // });

  // useEffect(() => {
  //   setTerminal(
  //     {
  //       window:
  //         <code className={styles.cdText}
  //         >C:\Users\Darren Nguyen\my_projects\{selectedProject?.name}&gt;
  //         </code>
  //     }
  //   )
  //   console.log('testing')
  // }, [window]);
  return (
    <TabsProvider>

      <div className={styles.page}>
        <div className={styles.nav}>
          <div className={styles.leftNav}>
            <img src={"images/logo.png"} alt="Logo" style={{ width: '30px', height: 'auto' }} />

            <button className={styles.navButton}>
              Home
            </button>

            {/* <div className={styles.dropdown}>
              <button className={styles.navButton}>

                Projects
              </button>
             
              <div className={styles.dc}>
                <a >Synczone</a>
                <a >Portfolio</a>

              </div>
      
            </div> */}
            <div className={styles.dropdown}>
              <button className={styles.navButton}>

                Socials
              </button>
              <div className={styles.dc}>
                <Socials name={"Github"} link={"https://github.com/durngyn"} tag={"durngyn"} />
                <Socials name={"LinkedIn"} link={"https://www.linkedin.com/in/darren-n-in/"} tag={"in/darren-n-in"} />
                <hr className={styles.divider} />
                <Socials name={"Gmail"} link={"darrennguyen321919@gmail.com"} tag={"darrennguyen321919"} />
                <Socials name={"Discord"} link={"https:/discord.com/users/instanphoga/"} tag={"instantphoga"} />
                <hr className={styles.divider} />
                <Socials name={"Spotify"} link={"https://open.spotify.com/user/yqpv3jwmro89ll637qpc9ad4w?si=0f9e14c0d67c477a/"} tag={"daren"} />
              </div>
            </div>

            <button className={styles.navButton}>About</button>
          </div>
          <div className={styles.midNav}>
            <div className={styles.textBox}>
              <h1 className={styles.title}>

                <div style={{ display: 'inline-block', fontSize: '26px' }} ref={textContainerRef}></div>
                <BlinkingCursor />
              </h1>
            </div>
          </div>
          <div className={styles.rightNav}>

          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.sideBar}>
            <button className={styles.sideButton} onClick={() => setContent({
              window: <ExplorerComponent onProjectClick={setSelectedProject} />,
              text: "EXPLORER"
            })}>
              <VscFiles style={{ color: 'rgb(114 118 126)', fontSize: '45px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "grey")} />
            </button>
            <button onClick={() => setContent({
              window: <div className={styles.leftBodyMail}>

              </div>,
              text: "EMAIL"
            })}>
              <LuMailPlus style={{ color: 'rgb(114 118 126)', fontSize: '40px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "grey")} />
            </button>
            <a href="https://www.linkedin.com/in/darren-n-in/" target="_blank" style={{ marginTop: "15px", marginBottom: "15px", }}>
              <FaLinkedin style={{ color: 'rgb(114 118 126)', fontSize: '40px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "grey")} />
            </a>
            <a href="https://www.linkedin.com/in/darren-n-in/" target="_blank" style={{ marginTop: "15px", marginBottom: "15px" }}>
              <VscGithub style={{ color: 'rgb(114 118 126)', fontSize: '40px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "grey")} />
            </a>

          </div>
          <div className={styles.mainBody}>

            <div className={styles.topBar}>
              <div className={styles.exploreBox}>
                <p className={styles.explorer}>
                  {content.text}
                </p>
              </div>
              <TabsComponent />
            </div>

            <div className={styles.bottomBody}>
              {content.window}
              <div className={styles.rightBody}>

                <div className={styles.directory}>
                  {/* <p>{selectedProject?.name}</p> */}
                </div>
                <div className={styles.code}>
                  <div className={styles.topCode}>
                    <div className={styles.name}>
                      <code className={styles.proj}> ##{selectedProject?.name} </code>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.name}>
                      <code className={styles.proj}> ##{selectedProject?.name} </code>
                    </div>
                    <hr className={styles.divider} />
                    <code className={styles.desc}>
                      <div ref={codeContainerRef}></div>
                    </code>
                  </div>
                  <div className={styles.bottomCode}>
                    <img src={window.img} style={{ width: '500px', height: '500px' }} />
                  </div>
                </div>

                {/* <div className={styles.terminal}>
                  <div className={styles.tab}>
                    <button onClick={() => setTerminal({
                      window: <code> </code>
                    })}>
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
                        <code className={styles.cdText}>
                          C:\Users\Darren Nguyen\my_projects\{selectedProject?.name}
                        </code>
                    })} className={styles.term}>TERMINAL</button>
                    <button onClick={() => setTerminal({
                      window: <code></code>
                    })}>PORTS</button>
                    <button onClick={() => setTerminal({
                      window: <code></code>
                    })}>COMMENTS</button>
                  </div>
                  <div className={styles.cd}>
                    {terminal.window}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabsProvider>
  );
}
