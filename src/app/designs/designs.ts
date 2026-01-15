import kifiImage from './images/kifiosdesign.png';
import planoramaImage from './images/Planorama.png';
import tcuImage from './images/tcuapp.png';
import branding from './images/branding.png';
import color from './images/colors.png';
import layout from './images/layout.png';
import magazine from './images/magazine.png';
import magazine2 from './images/magazine2.png';
import painting from './images/painting.jpg';
import painting2 from './images/painting2.png';
import Render from './images/3dRender.png';

interface DesignItem {
    id: number;
    title: string;
    image: any;
    description: string;
}

export const designs: DesignItem[] = [
        {
            id: 1,
            title: "Kifi OS Original Design",
            image: kifiImage,
            description: "The original concept for Kifi OS, featuring a minimalist interface with glassmorphism elements and a focus on user-centric navigation. This design established the core visual identity of the operating system.",
        }, 
        {
            id: 2,
            title: "Planorama",
            image: planoramaImage,
            description: "The concept for Planorama, a unique and innovative design that combines the best features of both Planorama",
        },
        {
            id: 3,
            title: "TCU APP",
            image: tcuImage,
            description: "The concept for TCU APP, I was inspired by the ID Aesthetic and combined it with some modern effects",
        },
        {
            id: 4,
            title: "Branding",
            image: branding,
            description: "School Project Branding",
        },
        {
            id: 5,
            title: "Color",
            image: color,
            description: "School Project Color",
        },
        {
            id: 6,
            title: "Layout",
            image: layout,
            description: "School Project Layout",
        },
        {
            id: 7,
            title: "Magazine",
            image: magazine,
            description: "School Project Magazine",
        },
        {
            id: 8,
            title: "Magazine 2",
            image: magazine2,
            description: "School Project Magazine 2",
        },
        {
            id: 9,
            title: "Painting",
            image: painting,
            description: "School Project Painting",
        },
        {
            id: 10,
            title: "Painting 2",
            image: painting2,
            description: "School Project Painting 2",
        },
        {
            id: 11,
            title: "3D Render",
            image: Render,
            description: "School Project 3D Render",
        }
    ];