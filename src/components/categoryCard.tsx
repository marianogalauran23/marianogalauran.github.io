'use client';
import React, {
    useRef
} from 'react';
import Image from 'next/image';
import styles from './Cards.module.css';

type CardProps = {
  title: string;
  description: string;
  background?: string;
  fontColor?: string;
};

export default function Cards({ title, description, background: bgPath, fontColor = "black" }: CardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const tittleRef = useRef<HTMLHeadingElement>(null);
    const subHeaderRef = useRef<HTMLHeadingElement>(null);

    const handleMouseEnter = () => {
        if(containerRef.current){
            containerRef.current.style.transform = "scale(0.9)";
            containerRef.current.style.boxShadow = "0px 0px 22px rgba(0, 0, 0, 0.65) inset";
            containerRef.current.style.backdropFilter = "blur(20px)";
        }
        if(tittleRef.current){
          tittleRef.current.style.transition = "transform 0.7s ease-in-out"
          tittleRef.current.style.transform = "translateY(-20px)";
        }
        if (subHeaderRef.current){
          subHeaderRef.current.style.transition = "transform 0.9s ease-in-out"
          subHeaderRef.current.style.transform = "translateY(-10px)";
        }
        if (bgRef.current){
          bgRef.current.style.transition ="filter 0.5s ease-in-out, opacity 0.5s ease-in-out, brightness 0.5s ease-in-out"
          bgRef.current.style.filter = "blur(0px) brightness(0.5)";
          bgRef.current.style.opacity = "1";
        }
        if (textRef.current){
          textRef.current.style.setProperty("--hover-font-color", fontColor);
        }
    }
    const handleMouseLeave = () => {
         if(containerRef.current){
            containerRef.current.style.transform = "scale(1)";
            containerRef.current.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0) inset";
            containerRef.current.style.backdropFilter = "blur(5px)";
        }
        if (tittleRef.current){
          tittleRef.current.style.transition = "transform 0.7s ease-in-out"
          tittleRef.current.style.transform = "translateY(0px)";
        }
        if (subHeaderRef.current){
          subHeaderRef.current.style.transition = "transform 0.9s ease-in-out"
          subHeaderRef.current.style.transform = "translateY(0px)";
        }
        if (bgRef.current){
          bgRef.current.style.transition ="filter 0.5s ease-in-out, opacity 0.5s ease-in-out, brightness 0.5s ease-in-out"
          bgRef.current.style.filter = "blur(5px) brightness(1)";
          bgRef.current.style.opacity = "0.3";
        }
        if (textRef.current){
          textRef.current.style.removeProperty("--hover-font-color");
        }
    }
  return (
    <div className={styles.container}
    ref={containerRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div ref={bgRef} className={styles.background} >
        <Image 
          src={bgPath || "/fallback.png"} 
          alt="icon" 
          fill 
          loading= "lazy"
          style={{ objectFit: "cover" }} 
        />
      </div>
      <div className={styles.text} ref={textRef}>
        <h2 className={styles.title} ref={tittleRef}>{title}</h2>
        <p className={styles.description} ref={subHeaderRef}>{description}</p>
      </div>
    </div>
  );
}