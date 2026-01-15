import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './me.module.css';

export default function Me(){
    return (
        <div className={styles.container}>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href="/home">
                        <button className={styles.backButton}>← Back</button>
                    </Link>
                    <h1 className={styles.title}>About Me</h1>
                </div>

                <div className={styles.profileSection}>
                    <Image 
                        src="/me.JPEG" 
                        alt="Mariano Galauran Jr" 
                        width={300} 
                        height={400} 
                        className={styles.profileImage}
                    />
                    <div className={styles.bio}>
                        <p>
                            Hello! I'm Mariano Galauran Jr, a Bachelor of Computer Science student passionate about software development and creative design.
                        </p>
                        <p>
                            I enjoy building applications that solve real-world problems while ensuring a delightful user experience. 
                            My journey is fueled by curiosity and a drive to learn new technologies.
                        </p>
                        <p>
                            When I'm not coding, you might find me exploring new design trends or working on personal projects to sharpen my skills.
                        </p>
                    </div>
                </div>

                <div className={styles.skillsSection}>
                    <h2 className={styles.sectionTitle}>Key Skills</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillItem}>React / Next.js</div>
                        <div className={styles.skillItem}>TypeScript</div>
                        <div className={styles.skillItem}>Flutter</div>
                        <div className={styles.skillItem}>Java</div>
                        <div className={styles.skillItem}>Python</div>
                        <div className={styles.skillItem}>SQL</div>
                        <div className={styles.skillItem}>UI/UX Design</div>
                        <div className={styles.skillItem}>Flask</div>
                        <div className={styles.skillItem}>Unity</div>
                        <div className={styles.skillItem}>Canva</div>
                        <div className={styles.skillItem}>Figma</div>
                        <div className={styles.skillItem}>Pytorch</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
