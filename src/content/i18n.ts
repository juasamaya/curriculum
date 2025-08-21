import rickImg from "./img/rick-morty.png"

export const content = {
  en: {
    nav: { profile: "Profile", portfolio: "Portfolio", education: "Education", experience: "Experience" },
    hero: {
      title: "Juan Sebastián Amaya Serrano",
      role: "Full‑Stack Developer Mid Level",
      subtitle: "I design and build high‑performance, accessible web applications across the stack."
    },
    profile: {
      title: "Profile",
      about: `Technology in Analysis & Software Development with 3 years of practical experience. Full‑Stack developer focused on scalable systems, clean code, and measurable business outcomes.`,
      skillsIntro: "Tech stack & skills",
      skills: [
        "Backend: C# (ASP.NET Core, .NET), Java (Spring Boot), Node.js, Python",
        "Frontend: React, Vue, Angular",
        "Relational DBs: SQL Server, Oracle",
        "NoSQL: MongoDB",
        "Cloud: Azure (Functions, WebJobs, App Services, Storage, Queues), basic AWS",
        "OS: Windows, Linux (Ubuntu, Debian)",
        "Tools: Git, Jira, Monday, Next.js, Tailwind, Bootstrap, React Native, Docker, REST, SOAP, Cloud Apps, OOP, WSL, Express, jQuery, XML, ORM, Sequelize, Azure DevOps",
        "Ops: Linux server configuration, deployments, testing"
      ],
      traits: "Outcome‑oriented, responsible, ethical, and collaborative — effective both independently and in teams."
    },
    portfolio: {
      title: "Portfolio",
      note: "Six slots ready. We'll add real projects next.",
      coming: "Coming soon",
      desc: "Short placeholder description"
    },
    projects: [
      {
        title: "Rick and Morty Explorer",
        desc: "Gestiona gastos e ingresos con reportes gráficos.",
        techs: ["Vue3", "Tailwind", "Vite"],
        url: "https://rickandmortytv.netlify.app/",
        image: rickImg
      },
      {
        title: "E-commerce Ropa",
        desc: "Tienda online con pagos integrados.",
        techs: ["Angular", "NestJS", "MongoDB"],
        url: "https://rickandmortytv.netlify.app/",
        image: "./img/rick-and-morty-app.png"
      },
      {
        title: "Dashboard Analítico",
        desc: "Visualización de datos en tiempo real.",
        techs: ["Vue", "Django", "Docker"],
        url: "https://rickandmortytv.netlify.app/",
        image: "./img/rick-and-morty-app.png"
      },
    ],
    education: {
      title: "Education",
      items: [
        { school: "Technologist — Analysis & Software Development (in progress)", place: "Colombia", details: "Project‑based learning in modern software engineering." },
        { school: "Azure Developer — Certimas", place: "Cloud & DevOps", details: "Training focused on Azure infrastructure and services." },
        { school: "BIT Bogotá Institute of Technology — Full‑Stack Bootcamp", place: "MEAN | React", details: "Built the institute’s MEAN app; later invited as an instructor." }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Linktic",
          role: "Front‑End Developer (Semi‑Senior)",
          date: "June 6, 2025 — Present",
          bullets: [
            "Develop modern, responsive, high‑performance interfaces for public and private platforms.",
            "Apply accessibility and usability best practices; integrate RESTful APIs with scalable UI architecture.",
            "Collaborate in Agile/Scrum teams with Git‑based workflows."
          ]
        },
        {
          company: "Identidad Technologies",
          role: "Full‑Stack Developer Jr.",
          date: "",
          bullets: [
            "Telecom multinational handling millions of weekend records — performance‑first mindset.",
            "Core stack: ASP.NET Core, Java (Spring Boot), Vue, SQL Server; microservices in Python and Node.js when needed.",
            "On‑prem Linux deployments; Azure services: Functions, WebJobs, App Services, Storage, Queues.",
            "Azure Developer training towards Azure Container Apps and Kubernetes for microservices."
          ]
        },
        {
          company: "VZ Tech",
          role: "Full‑Stack Developer Jr.",
          date: "",
          bullets: [
            "Support Deplog Logistics on Odoo.sh (ERP/ORM): Python classes, XML templates, PostgreSQL queries.",
            "Maintain Linux environments and custom modules."
          ]
        },
        {
          company: "BIT Bogotá Institute of Technology",
          role: "Full‑Stack Developer → Instructor",
          date: "",
          bullets: [
            "Built the institute’s educational MEAN app (MongoDB, Express, Angular, Node).",
            "Instructor in bootcamps: React, MEAN, Cloud, Docker, Nginx, Linux."
          ]
        }
      ]
    }
  },
  es: {
    nav: { profile: "Perfil", portfolio: "Portafolio", education: "Educación", experience: "Experiencia" },
    hero: {
      title: "Juan Sebastián Amaya Serrano",
      role: "Desarrollador Full‑Stack Semi-Senior",
      subtitle: "Diseño y construyo aplicaciones web accesibles y de alto rendimiento en todo el stack."
    },
    profile: {
      title: "Perfil",
      about: `Tecnología en Análisis y Desarrollo de Software con 3 años de experiencia práctica. Desarrollador Full‑Stack enfocado en sistemas escalables, código limpio y resultados de negocio.`,
      skillsIntro: "Stack tecnológico y habilidades",
      skills: [
        "Backend: C# (ASP.NET Core, .NET), Java (Spring Boot), Node.js, Python",
        "Frontend: React, Vue, Angular",
        "Bases de datos relacionales: SQL Server, Oracle",
        "No relacionales: MongoDB",
        "Nube: Azure (Functions, WebJobs, App Services, Storage, Queues), AWS básico",
        "Sistemas operativos: Windows, Linux (Ubuntu, Debian)",
        "Herramientas: Git, Jira, Monday, Next.js, Tailwind, Bootstrap, React Native, Docker, REST, SOAP, Apps en la nube, POO, WSL, Express, jQuery, XML, ORM, Sequelize, Azure DevOps",
        "Ops: Configuración de servidores Linux, despliegues y pruebas"
      ],
      traits: "Orientado a resultados, responsable, ético y colaborativo — sólido desempeño individual y en equipo."
    },
    portfolio: {
      title: "Portafolio",
      note: "Seis espacios listos. Luego agregamos proyectos reales.",
      coming: "Próximamente",
      desc: "Descripción breve de placeholder"
    },
    projects: [
      {
        title: "Rick and Morty Explorer",
        desc: "Gestiona gastos e ingresos con reportes gráficos.",
        techs: ["React", "Node.js", "PostgreSQL"],
        url: "https://rickandmortytv.netlify.app/",
        image: "./img/rick-and-morty-app.png"
      },
      {
        title: "E-commerce Ropa",
        desc: "Tienda online con pagos integrados.",
        techs: ["Angular", "NestJS", "MongoDB"],
        url: "https://rickandmortytv.netlify.app/",
        image: "./img/rick-and-morty-app.png"
      },
      {
        title: "Dashboard Analítico",
        desc: "Visualización de datos en tiempo real.",
        techs: ["Vue", "Django", "Docker"],
        url: "https://rickandmortytv.netlify.app/",
        image: "./img/rick-and-morty-app.png"
      },
    ],
    education: {
      title: "Educación",
      items: [
        { school: "Tecnólogo — Análisis y Desarrollo de Software (en curso)", place: "Colombia", details: "Formación basada en proyectos con prácticas modernas." },
        { school: "Azure Developer — Certimas", place: "Cloud & DevOps", details: "Enfoque en infraestructura y servicios de Azure." },
        { school: "BIT Bogotá Institute of Technology — Bootcamp Full‑Stack", place: "MEAN | React", details: "Construí la app MEAN del instituto; luego invitado como instructor." }
      ]
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          company: "Linktic",
          role: "Desarrollador Front‑End (Semisenior)",
          date: "6 de junio de 2025 — Actualidad",
          bullets: [
            "Interfaces modernas, responsivas y de alto rendimiento para plataformas públicas y privadas.",
            "Buenas prácticas de accesibilidad y usabilidad; integración de APIs RESTful con arquitectura UI escalable.",
            "Colaboración en equipos Agile/Scrum con flujos Git."
          ]
        },
        {
          company: "Identidad Technologies",
          role: "Desarrollador Full‑Stack Jr.",
          date: "20 de febrero de 2023 — 06 de Junio de 2025",
          bullets: [
            "Multinacional Telco con millones de registros por fin de semana — mentalidad performance‑first.",
            "Stack principal: ASP.NET Core, Java (Spring Boot), Vue, SQL Server; microservicios en Python y Node.js según necesidad.",
            "Despliegues en Linux on‑prem; Azure: Functions, WebJobs, App Services, Storage, Queues.",
            "Formación Azure Developer para evolucionar a Container Apps y Kubernetes con microservicios."
          ]
        },
        {
          company: "VZ Tech",
          role: "Desarrollador Full‑Stack Jr.",
          date: "20 de febrero de 2023 — 06 de Junio de 2025",
          bullets: [
            "Soporte a Deplog Logistics sobre Odoo.sh (ERP/ORM): clases en Python, plantillas XML y consultas PostgreSQL.",
            "Mantenimiento de entornos Linux y módulos a medida."
          ]
        },
        {
          company: "BIT Bogotá Institute of Technology",
          role: "Desarrollador Full‑Stack → Instructor",
          date: "",
          bullets: [
            "App educativa del instituto con MEAN (MongoDB, Express, Angular, Node).",
            "Instructor en bootcamps: React, MEAN, Cloud, Docker, Nginx y Linux."
          ]
        }
      ]
    }
  }
} as const

export type Lang = keyof typeof content
