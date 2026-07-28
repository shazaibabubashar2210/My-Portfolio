import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  angular,
  sql,
  nodejs,
  git,
  docker,
  figma,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: ".NET Developer",
    icon: backend,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Database Developer",
    icon: creator,
  },
  {
    title: "Full-Stack Developer",
    icon: javascript,
  },
  {
    title: "Enterprise Solutions",
    icon: docker,
  },
  {
    title: "UI/UX Developer",
    icon: figma,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ASP.NET Core",
    icon: nodejs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "SQL Server",
    icon: sql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Synavos Global — Johar Town, Lahore",
    icon: web,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Developed and maintained responsive web pages using HTML5, CSS3, and Bootstrap, ensuring cross-browser compatibility and mobile responsiveness.",
      "Implemented interactive UI features and enhanced user experience with jQuery for dynamic content and animations.",
      "Optimized website performance by reducing load times and improving accessibility.",
      "Worked in an Agile team environment, participating in sprint planning, code reviews, and daily stand-ups.",
      "Improved UI consistency and reusability by creating custom reusable components using Bootstrap and CSS.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Enterprise & Academic Projects",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Built full-stack applications using ASP.NET MVC, C#, and SQL Server for order management and business operations.",
      "Developed the Alzheimer Disease Care Hub system using Firebase and .NET MVC to connect doctors, patients, and caregivers.",
      "Created a SAP-integrated web portal for Green Appliances with Sales, Purchase, and Inventory modules.",
      "Integrated Crystal Reports for business analytics and ensured real-time data flow across enterprise modules.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Green Appliances — Enterprise Portal",
    icon: shopify,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "Developed a web-based portal for managing business operations with SAP-integrated enterprise modules.",
      "Designed and built Sales, Purchase, and Inventory modules for order processing, procurement, and stock management.",
      "Integrated Crystal Reports to generate business insights, analytics, and operational reports.",
      "Ensured smooth real-time data flow between modules for accurate inventory and transaction updates.",
    ],
  },
  {
    title: "Full-Stack Developer (FYP)",
    company_name: "Punjab University — Alzheimer Care Hub",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "Built an Alzheimer Disease Care Hub system to connect doctors, patients, and caregivers in one platform.",
      "Implemented the backend using ASP.NET MVC and C# with Firebase for real-time data storage and sync.",
      "Designed user flows to simplify care coordination and improve accessibility for caregivers.",
      "Delivered a complete final year project focused on healthcare management and user-centered design.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Green Appliances Portal",
    description:
      "Web-based enterprise portal for managing business operations with SAP-integrated Sales, Purchase, and Inventory modules, plus Crystal Reports for analytics and real-time data flow.",
    tags: [
      {
        name: "aspnet",
        color: "blue-text-gradient",
      },
      {
        name: "sqlserver",
        color: "green-text-gradient",
      },
      {
        name: "crystalreports",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Alzheimer Care Hub",
    description:
      "Final year project — an all-in-one care hub connecting doctors, Alzheimer patients, and caregivers, built with Firebase and ASP.NET MVC to simplify care coordination.",
    tags: [
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "aspnetmvc",
        color: "green-text-gradient",
      },
      {
        name: "csharp",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Ordering System",
    description:
      "Full-stack food ordering application with ASP.NET MVC front-end and SQL Server backend for managing menus, orders, and customer data with real-time order processing.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "aspnetmvc",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
