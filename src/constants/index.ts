import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    reactjs,
    redux,
    nodejs,
    nextjs,
    java,
    redis,
    aws,
    nestjs,
    caseicon,
    ihrc,
    shareverse,
} from "../assets/index";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "works",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full-Stack Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Java Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Nest JS",
        icon: nestjs,
    },
    
];



const experiences = [
    {
        title: "Full-Stack Developer",
        company_name: "Mobotics Technologies Private Limited",
        icon: caseicon,
        iconBg: "#383E56",
        date: "Jul 2024 - Present",
        points: [
            "Engineered a scalable CMS platform using Next.js, Nest.js, and TypeScript",
            "Enhanced content management efficiency by 35%",
            "Optimized PostgreSQL database performance, reducing query latency by 30%",
            "Implemented advanced indexing strategies for complex queries"
        ],
    },
    {
         title: "Product Development Intern",
        company_name: "DeepDefend",
        icon: caseicon,
        iconBg: "#E6DEDD",
         date: "Dec 2023 - May 2024",
        points: [
            "Developed cyber threat simulation platform with Next.js and Node.js",
            "Visualized attack patterns for 50+ enterprise clients",
            "Designed interactive dashboards using Figma",
            "Enhanced user engagement by 40% through UI improvements"
        ],
    },
    {
        title: "Product Development Intern",
        company_name: "HomeDreamers",
        icon: caseicon,
        iconBg: "#383E56",
        date: "May 2021 - Jul 2021",
        points: [
            "Architected e-commerce platform using React.js and Node.js",
            "Streamlined UI/UX workflows with Figma",
            "Boosted user engagement by 25%"
        ],
    },
    {
        title: "Open Source Contributor",
        company_name: "GirlScript Foundation",
        icon: caseicon,
        iconBg: "#E6DEDD",
        date: "Mar 2021 - Jun 2021",
        points: [
            "Created user-friendly, accessible web applications with dynamic UI components and robust form validation",
            "Built essential features for data management and enhanced application functionality",
            "Worked with teams to deliver customized solutions that precisely met client needs",
            "Streamlined workflows by creating reusable components, improving consistency and efficiency",
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
        name: "IHRC-Compliance Tool",
        description:
            "Automated compliance management system handling PF/ESI/LWF filings for 50+ enterprises, reducing manual workload by 60% with document management and deadline alerts.",
        tags: [
            {
                name: "React.js",
                color: "blue-text-gradient",
            },
            {
                name: "Nest.js",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "pink-text-gradient",
            },
            {
                name: "AWS",
                color: "orange-text-gradient",
            }
        ],
        image: ihrc,
        source_code_link: "https://ihrctech.com/sign-in?redirectUrl=/",
    },
    {
        name: "ShareVerse",
        description:
            "Image-sharing social platform with Google authentication for 500+ monthly users, reducing content update time by 60% via Sanity CMS integration.",
        tags: [
            {
                name: "React.js",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "Sanity CMS",
                color: "pink-text-gradient",
            },
            {
                name: "Google OAuth",
                color: "orange-text-gradient",
            }
        ],
        image: shareverse,
        source_code_link: "https://mrinal-shareverse.netlify.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };