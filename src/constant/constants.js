import img from "../assets/img/background.jpeg";

export const getNavItems = (route, show) => {
  return [
    {
      id: 1,
      name: "Home",
      href: "#home",
      className: `nav-item ${route === "#home" ? "current" : ""} ${show}`,
    },
    {
      id: 2,
      name: "About Me",
      href: "#about",
      className: `nav-item ${route === "#about" ? "current" : ""} ${show}`,
    },
    {
      id: 3,
      name: "My Work",
      href: "#work",
      className: `nav-item ${route === "#work" ? "current" : ""} ${show}`,
    },
    {
      id: 4,
      name: "How To Reach Me",
      href: "#contact",
      className: `nav-item ${route === "#contact" ? "current" : ""} ${show}`,
    },
  ];
};

export const projects = [
  { id: 1, href: "#", img, gitLink: "#" },
  { id: 2, href: "#", img, gitLink: "#" },
  { id: 3, href: "#", img, gitLink: "#" },
  { id: 4, href: "#", img, gitLink: "#" },
];
