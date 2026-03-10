import mortyImage from './img/rick-morty.png'
import jaegerImage from './img/jaeger.png'
import financialImage from './img/finance.png'

export const content = {
  en: {
    nav: { 
      profile: "Profile", 
      portfolio: "Portfolio", 
      education: "Education", 
      experience: "Experience" 
    },
    hero: {
      title: "Juan Sebastián Amaya Serrano",
      role: "Full‑Stack Developer Mid Level",
      subtitle: "I design and build high‑performance, accessible web applications across the stack."
    },
    profile: {
      title: "Profile",
      about: `Technology in Analysis & Software Development with 3.5 years of practical experience. Full‑Stack developer focused on scalable systems, clean code, and measurable business outcomes.`,
      skillsIntro: "Tech stack & skills",
      skills: [
        "Backend: C# (ASP.NET Core, .NET), Node.js, Python",
        "Frontend: React, Vue, Angular",
        "Relational DBs: SQL Server, Oracle, PostgreSQL",
        "NoSQL: MongoDB",
        "Cloud: Azure (Functions, WebJobs, App Services, Storage, Queues), basic AWS",
        "OS: Windows, Linux (Ubuntu, Debian)",
        "Tools: Git, Jira, Monday, Next.js, Tailwind, Bootstrap, React Native, Docker, Kubernetes, CI/CD, REST, SOAP, Cloud Apps, OOP, WSL, Express, jQuery, XML, ORM, Sequelize, Azure DevOps",
        "Ops: Linux server configuration, deployments, testing"
      ],
      traits: "Outcome‑oriented, responsible, ethical, and collaborative — effective both independently and in teams."
    },
    portfolio: {
      title: "Portfolio",
      note: "Main projects",
      coming: "Coming soon",
      desc: "Short placeholder description"
    },
    projects: [
      {
        title: "Jaeger Pets",
        desc: "My first MEAN Stack project year 2022",
        techs: ["Angular", "TypeScript", "Bootstrap", "Mongo", "Express", "NodeJs"],
        bullets:
          "My FullStack Development Bootcamp project.",
        url: "https://steady-tarsier-7a60ba.netlify.app/",
        image: jaegerImage
      },
      {
        title: "Financial Dashboard",
        desc: "The app is designed to efficiently manage personal finances, allowing users to track expenses and income, and offering graphical visualizations for better financial control. These visuals help users make informed decisions and plan their financial future.",
        techs: ["React", "TypeScript", "Tailwind", "Vite", "Vitest", "Nest", "Prisma ORM", "PostgreSQL"],
        bullets:
          "Implementation of a JWT authentication system, ensuring access only to authorized users. CRUD functionality for managing income and expenses, maintaining an accurate record of transactions, Ability to apply filters by date and transaction type to organize financial data, Inclusion of summary charts in bar or pie format to identify patterns and trends, Option to export summaries in CSV format for external financial tracking and further analysis",
        url: "https://dashboardingresos.netlify.app/",
        image: financialImage
      },
      {
        title: "Rick and Morty Explorer (Front-End Semi-Senior Developer Technical Test)",
        desc: "Develop a simple web interface that consumes a public API and displays results clearly and in an organized manner, applying good frontend development practices. Technical Requirements:",
        techs: ["Vue3", "TypeScript", "Tailwind", "Pinia", "Vitest"],
        bullets:
          "Use the framework required for the position you applied for, Consume any open public API, Implement a pleasant and functional user interface, Document your solution and technical decisions, Version your code using Git, Implement basic unit tests, Display a list of items retrieved from the chosen API, Allow querying details of a specific item from the list, Include basic error handling (API failure, missing data)",
        url: "https://rickandmortytv.netlify.app/",
        image: mortyImage
      }
    ],
    education: {
      title: "Education",
      items: [
        { school: "SENA — Technologist Analysis & Software Development", place: "Colombia", details: "Project‑based learning in modern software engineering." },
        { school: "Universidad Autónoma de Bucaramanga — MisionTIC 2022", place: "Colombia", details: "Hands-on project-based learning in modern software development practices." },
        { school: "Azure Developer — Certimas", place: "Cloud & DevOps", details: "Training focused on Azure infrastructure and services." },
        { school: "BIT Bogotá Institute of Technology — Full‑Stack Bootcamp", place: "MEAN | React", details: "Built the institute’s MEAN app; later invited as an instructor." }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Autonomic Mind",
          role: "FullStack Developer",
          date: "November 18, 2025 — January 28, 2026",
          bullets: [
            "Design and development of microservices using model and DAO architecture.",
            "Implementation of solutions with React, NestJS, C#, PostgreSQL, and AWS.",
            "Agile collaboration using Jira and Bitbucket. "
          ]
        },
        {
          company: "Linktic",
          role: "Front‑End Developer Mid Level",
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
          company: "BIT (Build Innovate Transform) — Universidad Iberoamericana",
          role: "Especialista BIT",
          date: "Mayo de 2023 — Mayo 2025",
          bullets: [
            "Taught React programming, focusing on MEAN Stack profiles and AWS Cloud Computing; covering deployments, Linux, Docker, and Nginx."
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
    nav: { 
      profile: "Perfil", 
      portfolio: "Portafolio", 
      education: "Educación", 
      experience: "Experiencia" 
    },
    hero: {
      title: "Juan Sebastián Amaya Serrano",
      role: "Desarrollador Full‑Stack Semi-Senior",
      subtitle: "Diseño y construyo aplicaciones web accesibles y de alto rendimiento en todo el stack."
    },
    profile: {
      title: "Perfil",
      about: `Tecnología en Análisis y Desarrollo de Software con 3 años y medio de experiencia práctica. Desarrollador Full‑Stack enfocado en sistemas escalables, código limpio y resultados de negocio.`,
      skillsIntro: "Stack tecnológico y habilidades",
      skills: [
        "Backend: C# (ASP.NET Core, .NET), Node.js, Python",
        "Frontend: React, Vue, Angular",
        "Bases de datos relacionales: SQL Server, Oracle, PostgreSQL",
        "No relacionales: MongoDB",
        "Nube: Azure (Functions, WebJobs, App Services, Storage, Queues), AWS básico",
        "Sistemas operativos: Windows, Linux (Ubuntu, Debian)",
        "Herramientas: Git, Jira, Monday, Next.js, Tailwind, Bootstrap, React Native, Docker, Kubernetes, CI/DI, REST, SOAP, Apps en la nube, POO, WSL, Express, jQuery, XML, ORM, Sequelize, Azure DevOps",
        "Ops: Configuración de servidores Linux, despliegues y pruebas"
      ],
      traits: "Orientado a resultados, responsable, ético y colaborativo — sólido desempeño individual y en equipo."
    },
    portfolio: {
      title: "Portafolio",
      note: "Proyectos principales",
      coming: "Próximamente",
      desc: "Descripción breve de placeholder"
    },
    projects: [
      {
        title: "Mis Mascotas",
        desc: "Mi primer proyecto con el stack MEAN en el año 2022",
        techs: ["Angular", "TypeScript", "Bootstrap", "Mongo", "Express", "NodeJs"],
        bullets:
          "Proyecto realizado durante mi Bootcamp de Desarrollo FullStack.",
        url: "https://steady-tarsier-7a60ba.netlify.app/",
        image: jaegerImage
      },
      {
        title: "Panel Financiero",
        desc: "La aplicación está diseñada para gestionar las finanzas personales de manera eficiente, permitiendo a los usuarios registrar gastos e ingresos, además de ofrecer visualizaciones gráficas para un mejor control financiero. Estas visualizaciones ayudan a tomar decisiones informadas y planificar el futuro financiero.",
        techs: ["React", "TypeScript", "Tailwind", "Vite", "Vitest", "Nest", "Prisma ORM", "PostgreSQL"],
        bullets:
          "Implementación de un sistema de autenticación con JWT que garantiza el acceso solo a usuarios autorizados. Funcionalidad CRUD para gestionar ingresos y gastos, manteniendo un registro preciso de las transacciones. Posibilidad de aplicar filtros por fecha y tipo de transacción para organizar los datos financieros. Inclusión de gráficos resumen en formato de barras o pastel para identificar patrones y tendencias. Opción de exportar resúmenes en formato CSV para seguimiento financiero externo y análisis adicional.",
        url: "https://dashboardingresos.netlify.app/",
        image: financialImage
      },
      {
        title: "Rick and Morty Explorer (Prueba Técnica Desarrollador Front‑End Semi-Senior)",
        desc: "Desarrollar una interfaz web simple que consuma una API pública y muestre resultados de forma clara y organizada, aplicando buenas prácticas de desarrollo frontend Requisitos Técnicos",
        techs: ["Vue3", "Typescript", "Tailwind", "Pinia", "Vitest"],
        bullets: "Usa el framework de la vacante en la que aplicaste, Consume cualquier API pública abierta, Implementa una interfaz visual agradable y funcional, Documenta tu solución y decisiones técnicas, Versiona tu código usando Git, Implementar pruebas unitarias básicas, Mostrar una lista de elementos obtenidos desde la API seleccionada, Permitir consultar detalles de un elemento específico desde la lista,Incluir manejo básico de errores (fallo en API, datos faltantes)",
        url: "https://rickandmortytv.netlify.app/",
        image: mortyImage
      },
    ],
    education: {
      title: "Educación",
      items: [
        { school: "SENA Tecnólogo — Análisis y Desarrollo de Software", place: "Colombia", details: "Formación basada en proyectos con prácticas modernas." },
        { school: "Universidad Autónoma de Bucaramanga — MisionTIC 2022", place: "Colombia", details: "Aprendizaje práctico basado en proyectos aplicando prácticas modernas de desarrollo de software." },
        { school: "Azure Developer — Certimas", place: "Cloud & DevOps", details: "Enfoque en infraestructura y servicios de Azure." },
        { school: "BIT Bogotá Institute of Technology — Bootcamp Full‑Stack", place: "MEAN | React", details: "Construí la app MEAN del instituto; luego invitado como instructor." }
      ]
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          company: "Autonomic Mind",
          role: "Fullstack developer",
          date: "18 de noviembre de 2025 — 28 de enero de 2026",
          bullets: [
            "Desarrollo de microservicios bajo arquitectura por modelos y DAO. ",
            "Implementación de soluciones con React, NestJS, C#, PostgreSQL y AWS.",
            "Trabajo colaborativo en entornos ágiles usando Jira y Bitbucket. "
          ]
        },
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
          company: "BIT (Build Innovate Transform) — Universidad Iberoamericana",
          role: "Especialista BIT",
          date: "Mayo de 2023 — Mayo 2025",
          bullets: [
            "Docente de programación en React, con enfoque en perfiles MEAN Stack y Cloud Computing en AWS; enseñanza de despliegues, Linux, Docker y Nginx."
          ]
        },
        {
          company: "VZ Tech",
          role: "Desarrollador Full‑Stack Jr.",
          date: "01 de Noviembre del 2022 — 18 de Febrero de 2023",
          bullets: [
            "Soporte a Deplog Logistics sobre Odoo.sh (ERP/ORM): clases en Python, plantillas XML y consultas PostgreSQL.",
            "Mantenimiento de entornos Linux y módulos a medida."
          ]
        },
        {
          company: "BIT Bogotá Institute of Technology",
          role: "Desarrollador Full‑Stack → Instructor",
          date: "01 de septiembre de 2022 - 01 de Noviembre del 2022",
          bullets: [
            "App educativa del instituto con MEAN (MongoDB, Express, Angular, Node).",
            "Instructor en bootcamps: React, MEAN, Cloud, Docker, Nginx y Linux."
          ]
        }
      ]
    }
  }
}

export type Lang = keyof typeof content
