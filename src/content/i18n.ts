import mortyImage from './img/rick-morty.png'
import jaegerImage from './img/jaeger.png'
import financialImage from './img/finance.png'
import realStateImage from './img/real-state.png'
import smartbizImage from './img/smartbiz.png'
import secopImage from './img/secop.png'

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
        title: "SmartBiz Project (MVP)",
        desc: "SmartBiz is a Minimum Viable Product (MVP) of a cloud-based B2B SaaS platform designed for SMEs to manage their daily operations. The system integrates DIAN-compliant electronic invoicing, sales and inventory management, and features an AI-powered virtual assistant for automated support.",
        techs: ["React", "Node.js", "NestJS", "Docker", "Kubernetes", "CI/CD", "PostgreSQL", "Generative AI", "DIAN APIs", "AWS / DigitalOcean"],
        bullets: [
          "Developed a functional MVP using a Software as a Service (SaaS) model with a responsive web architecture.",
          "Integrated technology providers and DIAN APIs to enable electronic invoice issuance.",
          "Implemented a smart chatbot trained to guide users through tax regulations and billing processes in real-time.",
          "Created administrative modules for basic inventory control, sales tracking, and automatic financial reporting.",
          "Automated operational processes to reduce manual errors and facilitate the digital transformation of micro-businesses.",
          "Deployed on cloud servers ensuring 24/7 availability, data encryption, and secure authentication."
        ],
        url: "https://smartbiz-app.netlify.app/",
        image: smartbizImage
      },
      {
        title: "SECOP Radar (Data-Driven Risk Engine)",
        desc: "A Full Stack data analysis platform designed to detect real-time anomalies and corruption red flags within Colombian public procurement by consuming the SECOP II Open Data API.",
        techs: ["Angular 18", "TypeScript", "Python", "FastAPI", "Pandas", "Socrata API", "Bootstrap"],
        bullets: [
          "Engineered a dynamic Risk Engine using Python and Pandas to ingest, clean, and process thousands of public contract records in milliseconds.",
          "Implemented mathematical algorithms and heuristics to automatically detect specific corruption patterns, such as contract fracturing and overlapping service agreements.",
          "Built a high-performance RESTful API with FastAPI, featuring dynamic query parameters that allow users to calibrate the risk model's sensitivity.",
          "Developed a responsive, state-of-the-art dashboard using Angular 18 (Standalone Components) to visualize critical data and control algorithmic thresholds.",
          "Orchestrated real-time Open Data consumption, ensuring fault tolerance and robust data cleaning processes to handle inconsistencies in government datasets."
        ],
        url: "https://secop-dashboard.netlify.app/",
        image: secopImage
      },
      {
        title: "Real Estate Project",
        desc: "This project is a fullstack application for managing properties in a real estate company. The backend is built with .NET 9 and MongoDB, while the frontend is developed with Next.js (React), featuring filters, pagination, and property detail views.",
        techs: [".NET 9", "MongoDB", "Next.js", "React", "Docker", "TypeScript", "TailwindCSS", "NUnit", "Jest", "Swagger"],
        bullets: [
          "Layered backend architecture (Controllers, Application, Domain, and Infrastructure).",
          "Implementation of services and interfaces (IPropertyService, IPropertyRepository) to decouple business logic.",
          "Use of strongly typed DTOs (PropertyDto, PropertyWithImageDto, PropertyFilterDto) for communication between layers.",
          "Optimized queries with filters by name, address, and price range.",
          "Efficient pagination for property listings.",
          "Domain model including Property, Owner, PropertyImage, and PropertyTrace entities.",
          "Frontend built with Next.js using reusable components for filters, cards, and detailed property views.",
          "Testing with NUnit on the backend and Jest + React Testing Library on the frontend."
        ],
        url: "https://real-state-app-sebas.netlify.app/",
        image: realStateImage
      },
      {
        title: "Financial Dashboard",
        desc: "The app is designed to efficiently manage personal finances, allowing users to track expenses and income, and offering graphical visualizations for better financial control. These visuals help users make informed decisions and plan their financial future.",
        techs: ["React", "TypeScript", "Tailwind", "Vite", "Vitest", "Nest", "Prisma ORM", "PostgreSQL"],
        bullets: [
          "Implementation of a JWT authentication system ensuring access only to authorized users.",
          "CRUD functionality for managing income and expenses while maintaining an accurate record of transactions.",
          "Ability to apply filters by date and transaction type to organize financial data.",
          "Inclusion of summary charts in bar or pie format to identify patterns and trends.",
          "Option to export summaries in CSV format for external financial tracking and analysis."
        ],
        url: "https://dashboardingresos.netlify.app/",
        image: financialImage
      },
      {
        title: "Rick and Morty Explorer (Front-End Semi-Senior Developer Technical Test)",
        desc: "Develop a simple web interface that consumes a public API and displays results clearly and in an organized manner, applying good frontend development practices.",
        techs: ["Vue3", "TypeScript", "Tailwind", "Pinia", "Vitest"],
        bullets: [
          "Consume the public Rick and Morty API.",
          "Display a list of characters retrieved from the API.",
          "Allow users to view detailed information for a selected character.",
          "Implement global state management using Pinia.",
          "Create a responsive and visually clean interface using TailwindCSS.",
          "Include basic error handling for API failures or missing data.",
          "Implement basic unit tests using Vitest.",
          "Use Git for version control and documentation of technical decisions."
        ],
        url: "https://rickandmortytv.netlify.app/",
        image: mortyImage
      },
      {
        title: "Jaeger Pets",
        desc: "My first MEAN Stack project built in 2022.",
        techs: ["Angular", "TypeScript", "Bootstrap", "MongoDB", "Express", "Node.js"],
        bullets: [
          "CRUD application for managing pets.",
          "Backend built with Node.js and Express.",
          "MongoDB used for data storage.",
          "Frontend developed using Angular.",
          "User interface styled with Bootstrap.",
          "Project developed during my FullStack Development Bootcamp."
        ],
        url: "https://steady-tarsier-7a60ba.netlify.app/",
        image: jaegerImage
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
          date: "June 6, 2025 — November 18, 2025",
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
            "Core stack: ASP.NET Core, Vue, SQL Server; microservices in Python and Node.js when needed.",
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
        "Herramientas: Git, Jira, Monday, Next.js, Tailwind, Bootstrap, React Native, Docker, Kubernetes, CI/CD, REST, SOAP, Apps en la nube, POO, WSL, Express, jQuery, XML, ORM, Sequelize, Azure DevOps",
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
        title: "Proyecto SmartBiz (MVP)",
        desc: "SmartBiz es un Producto Mínimo Viable (MVP) de una plataforma SaaS B2B en la nube, diseñada para que las pymes administren sus operaciones diarias. El sistema integra facturación electrónica avalada por la DIAN, gestión de ventas e inventario, y destaca por incluir un asistente virtual con IA para soporte automático.",
        techs: ["React", "Node.js", "NestJS", "Docker", "Kubernetes", "CI/CD", "PostgreSQL", "IA Generativa", "APIs DIAN", "AWS / DigitalOcean"],
        bullets: [
          "Desarrollo de un MVP funcional bajo el modelo Software as a Service (SaaS) con arquitectura web responsiva.",
          "Integración con proveedores tecnológicos y APIs de la DIAN para la emisión de facturación electrónica.",
          "Implementación de un chatbot inteligente entrenado para orientar a los usuarios en normativas tributarias en tiempo real.",
          "Creación de módulos administrativos para el control básico de inventario, ventas y generación de reportes financieros automáticos.",
          "Automatización de procesos operativos para reducir errores manuales y facilitar la digitalización de microempresas.",
          "Despliegue en servidores cloud garantizando disponibilidad 24/7, cifrado de datos y autenticación segura."
        ],
        url: "https://smartbiz-app.netlify.app/",
        image: smartbizImage
      },
      {
        title: "Radar SECOP (Motor de Análisis de Riesgo)",
        desc: "Plataforma Full Stack orientada al análisis de datos públicos para la detección en tiempo real de anomalías y alertas de corrupción en la contratación estatal colombiana, consumiendo la API de Datos Abiertos (SECOP II).",
        techs: ["Angular 18", "TypeScript", "Python", "FastAPI", "Pandas", "Socrata API", "Bootstrap"],
        bullets: [
          "Diseñé y desarrollé un Motor de Riesgo (Risk Engine) en el backend utilizando Python y Pandas para limpiar, agrupar y procesar miles de registros estatales en milisegundos.",
          "Implementé algoritmos matemáticos y heurísticos para detectar automáticamente patrones de corrupción, como el fraccionamiento de contratos y la sobreposición de fechas ('corbatas').",
          "Construí una API RESTful de alto rendimiento con FastAPI, integrando parámetros dinámicos que permiten a los usuarios calibrar la sensibilidad del algoritmo de detección.",
          "Desarrollé un dashboard interactivo y responsivo utilizando la última arquitectura de Angular 18 (Standalone Components) para la visualización estructurada de las banderas rojas.",
          "Orquesté la ingesta de datos en tiempo real (Open Data) garantizando tolerancia a fallos y manejo de errores (Data Cleaning) ante inconsistencias en los registros del gobierno."
        ],
        url: "https://secop-dashboard.netlify.app/",
        image: secopImage
      },
      {
        title: "Proyecto Real Estate",
        desc: "Este proyecto consiste en una app Fullstack para la gestión de propiedades de una empresa inmobiliaria. El backend está desarrollado en .NET 9 con MongoDB, y el frontend en Next.js (React) con filtros, paginación y detalle de propiedades.",
        techs: [".NET 9", "MongoDB", "Next.js", "React", "Docker", "TypeScript", "TailwindCSS", "NUnit", "Jest", "Swagger"],
        bullets: [
          "Arquitectura backend basada en capas (Controllers, Application, Domain e Infrastructure).",
          "Implementación de servicios e interfaces (IPropertyService, IPropertyRepository) para desacoplar la lógica de negocio.",
          "Uso de DTOs tipados (PropertyDto, PropertyWithImageDto, PropertyFilterDto) para comunicación entre capas.",
          "Consultas optimizadas con filtros por nombre, dirección y rango de precio.",
          "Paginación eficiente para el listado de propiedades.",
          "Modelo de dominio con entidades Property, Owner, PropertyImage y PropertyTrace.",
          "Frontend en Next.js con componentes reutilizables para filtros, cards y vista detallada.",
          "Testing con NUnit en backend y Jest + React Testing Library en frontend."
        ],
        url: "https://real-state-app-sebas.netlify.app/",
        image: realStateImage
      },
      {
        title: "Panel Financiero",
        desc: "La aplicación está diseñada para gestionar las finanzas personales de manera eficiente, permitiendo a los usuarios registrar gastos e ingresos, además de ofrecer visualizaciones gráficas para un mejor control financiero.",
        techs: ["React", "TypeScript", "Tailwind", "Vite", "Vitest", "Nest", "Prisma ORM", "PostgreSQL"],
        bullets: [
          "Sistema de autenticación con JWT para proteger el acceso a la aplicación.",
          "Funcionalidad CRUD para registrar y gestionar ingresos y gastos.",
          "Filtros por fecha y tipo de transacción para organizar la información financiera.",
          "Visualización de datos mediante gráficos de barras y pastel.",
          "Resumen financiero para identificar patrones de gasto.",
          "Exportación de reportes en formato CSV para análisis externo."
        ],
        url: "https://dashboardingresos.netlify.app/",
        image: financialImage
      },
      {
        title: "Rick and Morty Explorer (Prueba Técnica Desarrollador Front-End Semi-Senior)",
        desc: "Interfaz web que consume una API pública y muestra los resultados de forma clara y organizada, aplicando buenas prácticas de desarrollo frontend.",
        techs: ["Vue3", "TypeScript", "Tailwind", "Pinia", "Vitest"],
        bullets: [
          "Consumo de la API pública de Rick and Morty.",
          "Listado dinámico de personajes obtenidos desde la API.",
          "Vista de detalles de cada personaje seleccionable desde la lista.",
          "Gestión de estado global utilizando Pinia.",
          "Interfaz responsiva construida con TailwindCSS.",
          "Manejo básico de errores como fallos en la API o datos faltantes.",
          "Implementación de pruebas unitarias con Vitest.",
          "Versionamiento del proyecto utilizando Git."
        ],
        url: "https://rickandmortytv.netlify.app/",
        image: mortyImage
      },
      {
        title: "Mis Mascotas",
        desc: "Mi primer proyecto con el stack MEAN en el año 2022.",
        techs: ["Angular", "TypeScript", "Bootstrap", "MongoDB", "Express", "Node.js"],
        bullets: [
          "Aplicación CRUD para gestionar mascotas.",
          "Backend construido con Node.js y Express.",
          "Base de datos MongoDB para almacenamiento de información.",
          "Frontend desarrollado en Angular.",
          "Interfaz construida con Bootstrap.",
          "Proyecto realizado durante mi Bootcamp de Desarrollo FullStack."
        ],
        url: "https://steady-tarsier-7a60ba.netlify.app/",
        image: jaegerImage
      }
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
          date: "19 de noviembre de 2025 — 28 de enero de 2026",
          bullets: [
            "Desarrollo de microservicios bajo arquitectura por modelos y DAO. ",
            "Implementación de soluciones con React, NestJS, C#, PostgreSQL y AWS.",
            "Trabajo colaborativo en entornos ágiles usando Jira y Bitbucket. "
          ]
        },
        {
          company: "Linktic",
          role: "Desarrollador Front‑End (Semisenior)",
          date: "6 de junio de 2025 — 18 de noviembre del 2025",
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
            "Stack principal: ASP.NET Core, Vue, SQL Server; microservicios en Python y Node.js según necesidad.",
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
