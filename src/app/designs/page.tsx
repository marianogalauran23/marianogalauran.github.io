'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './designs.module.css';
import Image from 'next/image';
import { designs } from './designs';

interface DesignItem {
    id: string | number;
    title: string;
    image: any; // Using any to handle StaticImageData with width/height properties
    description: string;
}

interface DesignProps {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function Design({ params, searchParams }: DesignProps) {
    const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);

    const openDesign = (design: DesignItem) => {
        setSelectedDesign(design);
    };

    const closeDesign = () => {
        setSelectedDesign(null);
    };

    // Determine orientation safely
    const isVertical = selectedDesign?.image?.height > selectedDesign?.image?.width;

    return (
        <div className={styles.container}>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href="/home">
                        <button className={styles.backButton}>← Back</button>
                    </Link>
                    <h1 className={styles.title}>Designs & Creative</h1>
                    <a 
                        href="https://www.instagram.com/khiqyam/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        <button className={styles.instagramButton}>More on Instagram ↗</button>
                    </a>
                </div>

                <div className={styles.gallery}>
                    {designs.map((item) => (
                        <div 
                            key={item.id} 
                            className={styles.galleryItem}
                            onClick={() => openDesign(item)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.itemInfo}>
                                <span className={styles.itemTitle}>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedDesign && (
                <div className={styles.modalOverlay} onClick={closeDesign}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeDesign}>×</button>
                        <div className={`${styles.modalBody} ${isVertical ? styles.vertical : styles.horizontal}`}>
                            <div className={styles.modalImageContainer}>
                                <Image 
                                    src={selectedDesign.image} 
                                    alt={selectedDesign.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.modalText}>
                                <h2>{selectedDesign.title}</h2>
                                <p>{selectedDesign.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}