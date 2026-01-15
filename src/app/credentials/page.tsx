import React from 'react';
import Link from 'next/link';
import styles from './credentials.module.css';

export default function Credentials(){
    return (
        <div className={styles.container}>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href="/home">
                        <button className={styles.backButton}>← Back</button>
                    </Link>
                    <h1 className={styles.title}>Credentials</h1>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.date}>2022 - Present</div>
                            <div className={styles.details}>
                                <div className={styles.itemTitle}>Bachelor of Science in Computer Science</div>
                                <div className={styles.institution}>Taguig City University</div>
                                <div className={styles.description}>
                                    Currently pursuing degree with focus on software engineering and web development.
                                </div>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.date}>2020 - 2022</div>
                            <div className={styles.details}>
                                <div className={styles.itemTitle}>ICT Strand (SHS)</div>
                                <div className={styles.institution}>Signal Village National High School</div>
                                <div className={styles.description}>
                                    Graduated with Honors. Focused on programming basics and computer troubleshooting.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Certifications</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.date}>2025</div>
                            <div className={styles.details}>
                                <div className={styles.itemTitle}>Thesis Colloquium</div>
                                <div className={styles.institution}>Taguig City University</div>
                                <div className={styles.description}>
                                    Thesis Colloquium for my thesis project "HireRankAI"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
