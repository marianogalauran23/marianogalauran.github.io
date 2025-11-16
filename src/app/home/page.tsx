'use client';
import React, {
    useRef,
    useState,
    useEffect
} from 'react';
import styles from './home.module.css';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import Card from '@/components/categoryCard';
import {cardList} from './home.config';

export default function Home() {
    const profileContainer = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const courseRef = useRef<HTMLHeadingElement>(null);
    const router = useRouter();

    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
      setCurrentTime(new Date());
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

    function handleCardClick(index: number) {
      switch(index){
        case 0:
          router.push("/me");
          break;
        case 1:
          router.push("/projects");
          break;
        case 2:
          router.push("/designs");
          break;
        case 3:
          router.push("/credentials");
          break;
        default:
          console.log("error click handling encoundered an unexpexted index")
      }
    }

    const handleMouseEnter = () => {
        if(profileContainer.current){
            profileContainer.current.style.transition = "transform 0.3s ease-in-out";
            profileContainer.current.style.transform = "scale(1.06)";
        }
        if (nameRef.current) {
            nameRef.current.style.transition = "transform 0.7s ease-in-out";
            nameRef.current.style.transform = 'translateY(-10px) scale(1.09)';
        }
        if (courseRef.current){
            courseRef.current.style.transition = "transform 1s ease-in-out";
            courseRef.current.style.transform = 'translateY(-10px)';
        }
    }

    const handleMouseExit = () => {
        if(profileContainer.current){
            profileContainer.current.style.transition = "transform 0.3s ease-in-out";
            profileContainer.current.style.transform = "scale(1)";
        }
        if (nameRef.current) {
            nameRef.current.style.transition = "transform 0.7s ease-in-out";
            nameRef.current.style.transform = 'translateY(0px)';
            nameRef.current.style.transform = 'scale(1)';
        }
        if (courseRef.current){
            courseRef.current.style.transition = "transform 1s ease-in-out";
            courseRef.current.style.transform = 'translateY(0px)';
        }
    }
  return (
    <>
      <div className={styles.background}></div>

      <div className={styles.main}>
        <div className={styles.header}>
            <h1>今日は!</h1>
            <h3>{currentTime ? currentTime.toLocaleTimeString() : '—:—:—'}</h3>
        </div>

        <div className={styles.card}>
          <div className={styles.contents}>
            <div className={styles.profileContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseExit}
                ref={profileContainer}
            >
              <Image
                src="/me.JPEG"
                width={300}
                height={400}
                alt="Me"
                draggable="false"
                loading="eager"
                className={styles.profile}
              />

              <div className={styles.text}>
                <h1 ref={nameRef}>Mariano Galauran Jr</h1>
                <h2 ref={courseRef}>Bachelor in Computer Science</h2>
              </div>
            </div>

            <div className={styles.categoryContainer}>
              {cardList.map((card, index) => (
                <div className={styles.grid} key={index} onClick={() => handleCardClick(index)}>
                  <Card
                    title={card.title}
                    description={card.description}
                    background={card.bgpath}
                    fontColor={card.fontColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
