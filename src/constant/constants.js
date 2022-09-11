import fund from "../assets/img/fund.png";
import zaza from "../assets/img/zaza.png";
import tracker from "../assets/img/tracker.png";
import voice from "../assets/img/voice.png";

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
  {
    id: 1,
    href: "#javascript",
    // href: "https://app.fundstory.com/login",
    img: fund,
    gitLink: "#javascript:;",
  },

  {
    id: 2,
    href: "http://zazastore.herokuapp.com/",
    img: zaza,
    gitLink: "https://github.com/SultanJarrar89/zazacarstoy-React",
  },
  {
    id: 3,
    href: "https://deluxe-daffodil-c68fd4.netlify.app/",
    img: tracker,
    gitLink: "https://github.com/SultanJarrar89/Covid-19-Tracker",
  },
  {
    id: 4,
    href: "https://clinquant-vacherin-14e214.netlify.app/",
    img: voice,
    gitLink: "https://github.com/SultanJarrar89/VoiceExpenseTracker-React",
  },
];
