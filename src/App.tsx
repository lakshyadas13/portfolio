import CoquetteDesktopPortfolio from './components/CoquetteDesktopPortfolio'

export default function App() {
  return (
    <CoquetteDesktopPortfolio
      name="Lakshya Das"
      eyebrow="welcome to my"
      headline="portfolio"
      accent="#A8C9F5"
      deep="#1e3a68"
      wallpaper="dots"
      about={{
        title: "hi, I'm Lakshya",
        paragraphs: [
          "I am a B.Tech Information Technology student and software developer interested in full-stack development, AI/ML, SQL and building practical products.",
          "I enjoy engineering thoughtful web applications with scalable architectures, modern stacks, and playful, intuitive interfaces."
        ]
      }}
      folders={[
        {
          id: "managex",
          label: "ManageX",
          title: "ManageX Project",
          style: "blush",
          x: 18,
          y: 50,
          projects: [
            {
              id: "managex",
              name: "ManageX",
              year: "2026",
              role: "Full-Stack Task Management System",
              tags: [
                "React",
                "Vite",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB Atlas",
                "JWT"
              ],
              url: "https://manage-x-frontend.vercel.app",
              liveDemo: "https://manage-x-frontend.vercel.app",
              github: "https://github.com/lakshyadas13/manageX_frontend.git",
              description:
                "A full-stack task management system designed to help users organize, track and collaborate on tasks efficiently. Key features include secure JWT authentication, task creation and management, priority and time-based alerts, collaborative task assignment, weekly PDF report generation, robust REST APIs, Google Calendar integration, Weather API integration, Quotes API integration, and DiceBear avatar integration."
            }
          ]
        },
        {
          id: "scrapbook",
          label: "Lovelle Scrapbook",
          title: "Lovelle Scrapbook",
          style: "bows",
          x: 82,
          y: 50,
          projects: [
            {
              id: "lovelle-scrapbook",
              name: "Lovelle Scrapbook",
              year: "2026",
              role: "Digital Scrapbook Web App",
              tags: ["Next.js", "Tailwind CSS", "Supabase"],
              url: "https://vbs-scrapbook.vercel.app",
              liveDemo: "https://vbs-scrapbook.vercel.app",
              github: "https://github.com/lakshyadas13/lovelle_scrapbook.git",
              description:
                "A cute, pastel-themed scrapbook web app where users can create, personalize, and share digital scrapbooks filled with memories, notes, plans, and interactive surprises."
            }
          ]
        },
        {
          id: "portfolio",
          label: "Personal Portfolio",
          title: "Personal Portfolio",
          style: "ribbon",
          x: 82,
          y: 78,
          projects: [
            {
              id: "personal-portfolio",
              name: "Personal Portfolio",
              year: "2025",
              role: "macOS Desktop Portfolio",
              tags: [
                "React",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "shadcn/ui"
              ],
              url: "https://portfolio-navy-delta-ds48vi4ik4.vercel.app/",
              liveDemo: "https://portfolio-navy-delta-ds48vi4ik4.vercel.app/",
              comingSoon: false,
              github: "https://github.com/lakshyadas13/portfolio",
              description:
                "An interactive personal developer portfolio built around a macOS-inspired desktop experience, featuring Finder-style windows, a dock, and a custom pastel-blue aesthetic."
            }
          ]
        }
      ]}
      skills={[
        "C++",
        "Python",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Tailwind CSS",
        "Git",
        "GitHub"
      ]}
      aboutIcon={{
        x: 18,
        y: 22,
        label: "about me"
      }}
      contactIcon={{
        x: 82,
        y: 22,
        label: "contact me"
      }}
      links={[
        { label: "GitHub Profile", url: "https://github.com/lakshyadas13" },
        { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/lakshyadas" }
      ]}
      email="lk5767397@gmail.com"
      availability="Open for software engineering opportunities & collaborations"
      now={[
        "Developing full-stack systems & practical web apps",
        "Exploring AI/ML architectures & implementations",
        "Pursuing B.Tech in Information Technology",
        "Looking for internship opportunities",
        "Looking for full-time job opportunities :p"
      ]}
      faq={[
        {
          q: "Who are you?",
          a: "I'm Lakshya Das, a B.Tech Information Technology student and software developer passionate about full-stack development and AI/ML."
        },
        {
          q: "What is ManageX?",
          a: "ManageX is my full-stack task management platform built with React, Vite, Tailwind, Node.js, Express, MongoDB Atlas, and JWT authentication. It features task alerts, weekly PDF generation, and Google Calendar sync."
        },
        {
          q: "What is Lovelle Scrapbook?",
          a: "Lovelle Scrapbook is a cute, pastel-themed scrapbook web app where users can create, personalize, and share digital scrapbooks filled with memories, notes, plans, and interactive surprises."
        },
        {
          q: "What is Personal Portfolio?",
          a: "An interactive personal developer portfolio built around a macOS-inspired desktop experience, featuring Finder-style windows, a dock, and a custom pastel-blue aesthetic. Live at https://portfolio-navy-delta-ds48vi4ik4.vercel.app/."
        },
        {
          q: "What programming languages do you know?",
          a: "C++, Python, Java, JavaScript, HTML, CSS, and SQL."
        },
        {
          q: "What technologies do you work with?",
          a: "React, Next.js, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, Git, and GitHub."
        }
      ]}
      song={{
        title: "ribbon waltz",
        artist: "music box · made in code"
      }}
    />
  )
}
