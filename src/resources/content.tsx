import { About, Home, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kseniia",
  lastName: "Tretiakova",
  name: `Kseniia Tretiakova`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.png",
  email: "kstretiiakova@gmail.com",
  location: "Europe/Kyiv", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Ukrainian"], // optional: Leave the array empty if you don't want to display languages
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kstretiakova",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kseniia-tretiiakova/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">My</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projects
        </Text>
      </Row>
    ),
    href: "/work/",
  },
  subline: (
    <>
      I'm Kseniia, a full-stack developer based in Kyiv, specializing in building scalable and high-performance web applications. 
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a web developer specializing in creating modern and efficient web solutions with a strong focus on user experience and high performance. I have experience working with both frontend and backend development, always paying close attention to performance optimization and code quality.  Currently, I am expanding my expertise in the field of Artificial Intelligence, where I design intelligent systems capable of analyzing and interpreting data to make user interactions with products more valuable and intuitive.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "DFB",
        timeframe: "2025 - Present",
        role: "Wep Developer",
        achievements: [
<>Creation of a multi-vendor e-commerce platform, including a product comparison system</>,  
<>Custom website development</>,  
<>WordPress plugin development</>,  
<>WordPress website creation and maintenance</>,  
<>Development of a project management tool tailored to the company’s needs</>, 
        ],
        images: [
          
        ],
      },
      {
        company: "MIZLA",
        timeframe: "2023 - 2025",
        role: "Web Developer",
        achievements: [
          <>Design of data-driven applications combining PHP backends with AI-powered analytics</>,  
<>Integration of AI-powered chatbots and virtual assistants into web platforms</>,  
<>Development of recommendation systems enhancing user experience with machine learning</>,  
<>Automation of business workflows using PHP and AI APIs</>,  
<>Implementation of predictive analytics dashboards for decision-making</>,  
<>Creation of intelligent web solutions bridging AI models with user-friendly interfaces</>,  
        ],
        images: [
          
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "GoIT School",
        description: <>Full-Stack Software Engineering program with a focus on modern web technologies, backend systems, and scalable applications.</>,
      },
    ],
  },
  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Frontend Development",
      description: (
        <>Building responsive and user-friendly interfaces with HTML, CSS, JavaScript, and TypeScript.</>
      ),
      tags: [
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "React", icon: "react" },
        { name: "Vue.js", icon: "vue" }
      ],
      images: []
    },
    {
      title: "Backend Development",
      description: (
        <>Creating scalable server-side applications and APIs using PHP (Symfony), Node.js, and ExpressJS.</>
      ),
      tags: [
        { name: "PHP", icon: "php" },
        { name: "Symfony", icon: "symfony" },
        { name: "Node.js", icon: "nodejs" },
        { name: "ExpressJS", icon: "express" }
      ],
      images: []
    },
    {
      title: "Databases",
      description: (
        <>Designing and managing relational and NoSQL databases with MySQL, PostgreSQL, and MongoDB.</>
      ),
      tags: [
        { name: "MySQL", icon: "mysql" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "SQL", icon: "sql" }
      ],
      images: []
    },
    {
      title: "Version Control",
      description: (
        <>Collaborative development and version management with Git, GitHub, and GitLab.</>
      ),
      tags: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "GitLab", icon: "gitlab" }
      ],
      images: []
    },
    {
      title: "DevOps & Deployment",
      description: (
        <>Containerization, CI/CD pipelines, and deployment with Docker and cloud services.</>
      ),
      tags: [
        { name: "Docker", icon: "docker" }
      ],
      images: []
    },
    {
      title: "AI & Data",
      description: (
        <>Integrating AI-powered solutions and working with data pipelines using Python, Pandas, and scikit-learn.</>
      ),
      tags: [
        { name: "Python", icon: "python" },
        { name: "Pandas", icon: "pandas" }
      ],
      images: []
    }
  ]
},
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};



export { person, social, home, about, work  };
