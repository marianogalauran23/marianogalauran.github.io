import React from 'react';
import Link from 'next/link';
import styles from './projects.module.css';

interface Project {
    title: string;
    language: string;
    status: string;
    link: string;
}

const ProjectList: Project[] = [
    {
        title: "Kifi-OS (Windows Skin for now)",
        language: "Flutter",
        status: "Pending",
        link: "https://github.com/marianogalauran23/FlutterLauncher"
    },
    {
        title: "Planorama (School Project)",
        language: "React-Native",
        status: "Completed",
        link: "https://github.com/marianogalauran23/Planorama-React-Native-Typescript"
    },
    {
        title: "TCU App (School Project)",
        language: "Java Mobile Programming",
        status: "Completed",
        link: "https://github.com/marianogalauran23/TCU-APP"
    },
    {
        title: "Weather Predictor",
        language: "Python",
        status: "Completed",
        link: "https://colab.research.google.com/drive/1Oz5kT1MMehSZPnt9VVC_ZJo5iZQrALXG?usp=sharing"
    },
    {
        title: "CMS Project (School Project)",
        language: "PHP",
        status: "Completed",
        link: "https://github.com/marianogalauran23/CMSProject"
    },
    {
        title: "High Ranker AI (School Project)",
        language: "Next JS",
        status: "Completed",
        link: "https://github.com/Alejandro-Adrian/HireRankAI"
    },
];

export default function Projects(){
    return (
        <div className={styles.container}>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href="/home">
                        <button className={styles.backButton}>← Back</button>
                    </Link>
                    <h1 className={styles.title}>Projects</h1>
                </div>

                <div className={styles.grid}>
                    {ProjectList.map((project, index) => (
                        <a 
                            key={index} 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.card}
                        >
                            <h2 className={styles.cardTitle}>{project.title}</h2>
                            <span className={styles.cardLanguage}>{project.language}</span>
                            <span className={styles.cardStatus}>{project.status}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
