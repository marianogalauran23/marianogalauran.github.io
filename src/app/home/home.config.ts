type CardProps = {
  title: string;
  description: string;
  bgpath?: string;
  fontColor?: string;
};

export const cardList: CardProps[] = [
  {
    title: "About Me",
    description: "Get to know my journey in programming and creative development.",
    bgpath: "/categories/AboutMe.jpg",
    fontColor: "#d9deffff",
  },
  {
    title: "Projects",
    description: "Explore the tools, systems, and experiments I've built.",
    bgpath: "/categories/Projects.jpg",
    fontColor: "rgba(206, 201, 135, 1)",
  },
  {
    title: "Designs",
    description: "Check out my visual work. From UI layouts to motif-driven posters.",
    bgpath: "/categories/designs.jpg",
    fontColor: "#f5dbbaff",
  },
  {
    title: "Credentials",
    description: "See my academic progress and technical milestones.",
    bgpath: "/categories/credential.jpg",
    fontColor: "#ffd8cdff",
  },
];