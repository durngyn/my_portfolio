/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import styles from "./App.module.css";
import Typewriter from "./components/Typewriter";
import BlinkingCursor from "./components/BlinkingCursor";

import { VscGithub, VscFiles } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";
import ExplorerComponent from "./components/ExplorerComponent";

import { TabsProvider } from "./components/TabsContext";
import TabsComponent from "./components/TabsComponent";
import Socials from "./components/Socials";

import PortfolioComponent from "./components/PortfolioComponent";
// import AboutComponent from "./components/AboutComponent";
import About from "./components/About";


export default function Home() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState(true);

  const toggleSide = () => {
    setSide(!side);
  };

  const [window, setWindow] = useState({
    img: "/assets/vsc3.png",
    name: "About",
    tech: "I'm Darren and this is my Portfolio Site!",
  })
  const about = {
    name: "About",
    id: 5,
    description: "SyncZone is a cross-platform mobile messaging application built using React Native for the frontend and Supabase for backend services. The app focuses on facilitating seamless communication across time zones through real-time chat functionality enhanced with Hume AI emotion detection technology. Key features include a dynamic calendar interface for event scheduling, location-based weather updates, and comprehensive user authentication via email/password and social login options. The technical stack incorporates PostgreSQL for efficient data handling, while integrations with GeoNames and Weather APIs provide additional context-aware functionality to enhance the overall user experience.",
    img: "/assets/vsc3.png",
    link: "https://github.com/durngyn/my_portfolio",
    tech: "Vite, React TypeScript, HTML, & CSS"
  };
  const [selectedProject, setSelectedProject] = useState<{ name: string; id: number; description: string; img: string; tech: string; }>(
    {
      name: "Portfolio",
      id: 1,
      description: "Created a portfolio to resemble the Visual Studio Code IDE, my go-to tool I use for the majority of my projects. Mimics the athetics of VSC while having straightfoward UI to emphasize the functionality of my built portfolio site. This projects uses the frontend tool, Vite, while using Typescript React as my framework. I gained handon experience with Typescript, sicne previously, JS was my go-to for web development.",
      img: "/assets/port.png",
      tech: "Vite, React TypeScript, HTML, & CSS"
    }
  );

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
        .typeString(", Vite")
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
        tech: selectedProject.tech,
      });
    }
  }, [selectedProject]);

  const [isCode, setIsCode] = useState(true
  );

  const toggleCode = () => {
    setIsCode(!isCode);
  };

  return (
    <TabsProvider>

      <div className={styles.page}>
        <div className={styles.nav}>
          <div className={styles.leftNav}>
            <img src={"/assets/logo.png"} alt="Logo" style={{ width: '30px', height: 'auto' }} />
            <PortfolioComponent onProjectClick={setSelectedProject} />
            <div className={styles.dropdown}>
              <button className={styles.navButton}>
                Socials
              </button>
              <div className={styles.dc}>
                <Socials name={"Github"} link={"https://github.com/durngyn"} tag={"durngyn"} />
                <Socials name={"LinkedIn"} link={"https://www.linkedin.com/in/darren-n-in/"} tag={"in/darren-n-in"} />
                <hr className={styles.divider} />
                <Socials name={"Gmail"} link={"mailto:darrennguyen321919@gmail.com"} tag={"darrennguyen321919"} />
                <Socials name={"Discord"} link={"https:/discord.com/users/instanphoga/"} tag={"instantphoga"} />
                <hr className={styles.divider} />
                <Socials name={"Spotify"} link={"https://open.spotify.com/user/yqpv3jwmro89ll637qpc9ad4w?si=0f9e14c0d67c477a/"} tag={"daren"} />
              </div>
            </div>

            <About key={selectedProject.id} onProject={setSelectedProject} project={about} toggleSide={toggleCode} />
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
            <button className={styles.sideButton}
              onClick={toggleSide}>
              <VscFiles style={{ color: 'rgb(114 118 126)', fontSize: '45px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "grey")} />
            </button>
            {/* <button onClick={() => setContent({
              window: <div className={styles.leftBodyMail}>

              </div>,
              text: "EMAIL"
            })}>
              <LuMailPlus style={{ color: 'rgb(114 118 126)', fontSize: '40px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "grey")} />
            </button> */}
            <a href="https://www.linkedin.com/in/darren-n-in/" target="_blank" style={{ marginTop: "15px", marginBottom: "15px", }}>
              <FaLinkedin style={{ color: 'rgb(114 118 126)', fontSize: '40px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "grey")} />
            </a>
            <a href="https://github.com/durngyn" target="_blank" style={{ marginTop: "15px", marginBottom: "15px" }}>
              <VscGithub style={{ color: 'rgb(114 118 126)', fontSize: '40px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(215 218 224)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "grey")} />
            </a>

          </div>           <div className={styles.mainBody}>

            <div className={styles.topBar}>
              <div className={styles.exploreBox}>
                <p className={styles.explorer}>
                  EXPLORER
                </p>
              </div>
              <TabsComponent />
            </div>

            <div className={styles.bottomBody}>
              {side && <ExplorerComponent onProjectClick={setSelectedProject} />}
              <div className={styles.rightBody}>
                {isCode ? (
                  <div className={styles.code}>
                    <div className={styles.topCode}>
                      <div className={styles.name}>
                        <code className={styles.proj}> ##  {selectedProject.name} </code>
                      </div>
                      {/* <hr className={styles.divider} /> */}
                      <div className={styles.name}>
                        <code className={styles.tech}> {window?.tech} </code>
                      </div>
                      <hr className={styles.divider} />
                      <code className={styles.desc}>
                        <div ref={codeContainerRef}></div>
                      </code>
                    </div>
                    <div className={styles.bottomCode}>
                      <img src={window.img} style={{ width: '700px', height: '400px' }} />
                    </div>
                  </div>
                ) : (
                  <div>

                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabsProvider>
  );
}
