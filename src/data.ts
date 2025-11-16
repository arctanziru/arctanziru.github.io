import project_torche from "./assets/images/project_torche.webp";
import project_pp12 from "./assets/images/project_pp12.webp";
import project_sm_b2b from "./assets/images/project_sm_b2b.webp";
import project_dmc from "./assets/images/project_dmc.webp";
import project_sm from "./assets/images/project_sm.webp";
import project_sm_ds from "./assets/images/project_sm_ds.webp";

import react from "./assets/images/react.webp";
import tailwind from "./assets/images/tailwind.webp";
import html from "./assets/images/html.svg";
import css from "./assets/images/css.svg";
import typescript from "./assets/images/typescript.svg";
import javascript from "./assets/images/javascript.svg";
import chakraui from "./assets/images/chakraui.svg";
import nextjs from "./assets/images/nextjs.svg";
import redux from "./assets/images/redux.svg";

export const projects = [
  {
    slug: "skillmapper-b2c",
    title: "SkillMapper B2C",
    description:
      "B2C learning platform with course catalog, AI-powered search, user profiles, and payment integration.",
    image: project_sm,
    href: "https://skillmapper.com/",
    story: `
      <p>
        SkillMapper B2C is an online learning platform designed to provide users with access to a wide range of courses and educational resources.
        The platform features an extensive course catalog, an AI-powered search functionality, user profiles, and seamless payment integration.
        It also includes a quiz generation feature and Copilot Chat integration to help users learn more effectively.
      </p>

      <br />

      <p>
        As a frontend developer on the SkillMapper B2C team, I played a key role in enhancing the platform's performance and user experience.
        By implementing strategic caching mechanisms and optimizing global state management, I was able to significantly improve web app load times
        and responsiveness by approximately 50%. This improvement led to increased user retention and engagement on the platform.
      </p>

      <br />

      <p>
        I also contributed to the development of high-fidelity user interfaces that closely matched the original Figma designs, achieving over 80% accuracy.
        This attention to detail ensured better accessibility across various devices, providing users with a consistent and enjoyable learning experience.
      </p>

      <br />

      <p>
        In addition to my technical contributions, I actively participated in team discussions, design reviews, and peer code reviews,
        influencing the technical architecture to align with long-term scalability goals. This collaborative approach helped ensure that
        the platform could grow and adapt to future needs.
      </p>
      
      <br />

      <p>
        To streamline development processes, I developed over 30 type-safe utility functions and more than 25 atomic components that were widely reused
        across multiple features. This modular approach reduced development time for new features by an estimated 20–30%, allowing the team to deliver
        enhancements more efficiently.
      </p>

      <br />

      <p>
        Overall, my contributions to the SkillMapper B2C platform have helped create a robust and user-friendly learning environment,
        empowering users to achieve their educational goals through accessible and engaging online courses.
      </p>
      `,
    tags: ["React", "Next.js", "Material UI", "TanStack Query"],
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "TanStack Query",
      "Material UI",
      "Next Intl",
    ],
  },
  {
    slug: "dmc-ikatek",
    title: "Disaster Management Center - IKATEK Unhas",
    description:
      "Full-stack disaster reporting and donation platform with admin dashboard (Laravel, Livewire 3, Tailwind CSS, Service Worker, JavaScript).",
    image: project_dmc,
    href: "https://www.dmcikatek-uh.org/",
    story: `
      <p>
        This projec was developed as a platform to facilitate disaster reporting and donations for
        the Disaster Management Center (DMC) of IKATEK Unhas. The platform allows users to report disasters,
        create programs, and track donations efficiently.
      </p>

      <br />

      <p>
        As the lead developer, I was responsible for designing the relational database schema and core workflows
        to ensure smooth operations for disaster reporting, program creation, and donation tracking. I implemented
        reusable Blade components to enhance code maintainability and consistency across the application.
      </p>

      <br />

      <p>
        To improve user engagement, I integrated browser push notifications, allowing users to receive real-time updates
        on disaster reports and donation statuses. Additionally, I implemented role-based access control (RBAC) to ensure
        that users have appropriate permissions based on their roles within the platform.
      </p>

      <br />

      <p>
        The user interface was designed to be fully responsive, optimizing the experience for mobile, tablet, and desktop users.
        Tailwind CSS was utilized to create a visually appealing and user-friendly design.
      </p>

      <br />

      <p>
        Overall, this project aimed to streamline disaster management efforts by providing a comprehensive platform for reporting and donations,
        ultimately contributing to more effective disaster response and recovery.
      </p>
      `,
    tags: ["Laravel", "Livewire", "Tailwind CSS"],
    stack: [
      "Laravel",
      "Livewire 3",
      "Tailwind CSS",
      "JavaScript",
      "MySQL",
      "Service Worker",
    ],
  },
  {
    slug: "skillmapper-design-system",
    title: "SkillMapper Design System",
    image: project_sm_ds,
    description:
      "Reusable design system for SkillMapper B2C using Storybook and Atomic Design principles (React, Material UI, TypeScript).",
    story: `
      <p>
        I was tasked with creating the SkillMapper Design System from the ground up to
        ensure a consistent and efficient development process for the SkillMapper B2C platform.
      </p>

      <br />

      <p>
        The design system was built using React and Material UI, leveraging the strengths
        of these technologies to create a robust and flexible component library. By following
        Atomic Design principles, I was able to break down the UI into smaller, reusable components,
        making it easier to maintain and scale the design system over time.
      </p>

      <br />
      
      <p> 
        To document and showcase the components, I utilized Storybook, which provided an interactive
        environment for developers and designers to explore and test the components in isolation.
        This not only improved collaboration between teams but also facilitated the adoption of
        the design system across various projects within the organization.
      </p>

      <br />
      
      <p>
        Overall, the SkillMapper Design System has significantly streamlined the development process,
        ensuring a cohesive user experience across the SkillMapper B2C platform while also enhancing
        productivity for the development team.
      </p>
    `,
    tags: ["React", "Material UI", "Storybook"],
    stack: ["React", "Material UI", "TypeScript", "Storybook"],
  },
  {
    slug: "semen-tiga-roda-dashboard",
    title: "Semen Tiga Roda Dashboard",
    image: project_pp12,
    description:
      "Internal dashboard for Semen Tiga Roda to monitor daily activities, site and items management, and reporting system.",
    story: `
      <p>
        The Semen Tiga Roda Dashboard is an internal tool designed to help the company
        monitor and manage its daily operations more effectively. The dashboard provides
        a comprehensive overview of various activities, including site management,
        items management, and reporting functionalities.
      </p>

      <br />

      <p>
        As part of the development team, I contributed to building the frontend of the
        dashboard using modern web technologies. The user interface was designed to be
        intuitive and user-friendly, allowing employees to easily navigate through different
        sections and access the information they need.
      </p>

      <br />

      <p>
        To ensure the dashboard's maintainability and scalability, I implemented a modular
        structure that allows for efficient reuse of components. This approach simplifies
        future maintenance tasks and enables the development team to quickly add new features
        or make updates as needed.
      </p>

      <br />

      <p>
        The dashboard leverages caching mechanisms to enhance performance and ensure
        a smooth user experience. By utilizing technologies such as Next.js for server-side
        rendering, Axios for efficient data fetching, Material UI for consistent styling,
        and TanStack Query for state management and caching, we were able to achieve
        optimal performance metrics, including a <b>perfect 100 score</b> in performance and SEO
        during Lighthouse audits.
      </p>

      <br />

      <p>
        The dashboard includes features for managing users, areas, and items, enabling
        administrators to efficiently oversee operations and ensure smooth workflows.
        Additionally, the reporting system provides valuable insights into daily activities,
        helping the management team make informed decisions based on real-time data.
      </p>

      <br />
      
      <p>
        Overall, the Semen Tiga Roda Dashboard has proven to be a valuable asset for the company,
        enhancing operational efficiency and facilitating better communication across teams.
      </p>
      `,
    tags: ["Next.js", "Material UI", "TanStack Query"],
    stack: ["Next.js", "Material UI", "TypeScript", "Axios", "TanStack Query"],
  },
  {
    slug: "skillmapper-b2b",
    title: "SkillMapper B2B",
    description:
      "B2B SaaS dashboard streamlining employee learning and certification with AI course search, people and task management, analytics, and budget management.",
    image: project_sm_b2b,
    href: "https://skillmapper.com/business",
    story: `
      <p>
        We implement this AI-driven course search by integrating with various online learning
        platforms and utilizing machine learning algorithms to analyze course content,
        user preferences, and industry trends. This allows the system to recommend
        the most suitable courses for each employee, enhancing their learning experience
        and ensuring they acquire the necessary skills for their professional growth.
      </p>

      <br />

      <p>
        At this project, I was responsible for developing the Frontend side of the dashboard
        using Material UI components and Next.js framework. I worked closely with frontend, design and backend teams to
        ensure a seamless user experience and efficient data handling throughout the application.
        We also implemented payment gateway with Stripe API to manage subscription plans for our B2B clients.
      </p>

      <p>
        The dashboard offers robust people and task management features, allowing
        HR managers and team leaders to efficiently assign training modules,
        track progress, and manage certifications. This ensures that employees
        stay up-to-date with the latest skills and industry standards.
      </p>

      <br />

      <p>
        Additionally, SkillMapper B2B includes powerful analytics tools that
        provide insights into employee performance, course completion rates,
        and overall learning effectiveness. Businesses can utilize this data
        to make informed decisions about training strategies and resource allocation.
      </p>

      <br />
      
      <p>
        Budget management features are also integrated into the platform, allowing
        companies to monitor and control their training expenditures effectively.
        This ensures that learning initiatives align with organizational goals
        while maximizing return on investment.
      </p>

      <br />
      
      <p>
        Overall, SkillMapper B2B is a versatile solution that empowers businesses
        to enhance their employee development programs through AI-driven course
        search, efficient management tools, insightful analytics, and effective
        budget oversight.
      </p>
    `,
    tags: ["React", "Redux", "Next.js", "Material UI"],
    stack: ["React", "Redux", "Next.js", "Material UI", "TypeScript", "Axios"],
  },
  {
    slug: "torche-career-app",
    title: "Torche Career App",
    description:
      "Intern project for Torche Education. Careers UI with routing, global state, and responsive Tailwind design.",
    image: project_torche,
    story: `
      <p>
        During my internship at Torche Education, I was tasked with developing a
        career page application to enhance the user experience for job seekers to
        explore and apply for job opportunities within the company. The goal was to
        create an intuitive and visually appealing interface that would effectively
        showcase available positions and provide relevant information to potential
        candidates.
      </p>

      <br />

      <p>
        Other than the career page UI, I was also responsible for implementing dashboard
        features that allowed HR personnel to manage job listings and track applications. 
        This involved creating forms for adding and editing job postings, as well as
        developing a system for viewing and filtering applications based on various criteria.
      </p>

      <br />

      <p>
        I utilized React for building the user interface, leveraging its component-based
        architecture to create reusable UI elements. For state management, I implemented
        Redux to handle the application's global state, ensuring a seamless flow of data
        between components. React Router was employed to manage navigation within the app,
        allowing users to easily browse through different job listings and details.
      </p>

      <br />

      <p>
        To ensure a responsive and modern design, I incorporated Tailwind CSS, which
        provided a utility-first approach to styling. This allowed me to rapidly prototype
        and implement design elements while maintaining consistency across the application.
        The end result was a polished career page that not only met the functional
        requirements but also delivered an engaging user experience.
      </p>

      <br />

      <p> 
        Overall, this project provided me with valuable hands-on experience in building
        a real-world application using popular web development technologies, while also
        contributing to the company's recruitment efforts.
      </p>
    `,
    href: "https://github.com/arctanziru/career-page-Torche",
    tags: ["React", "Redux", "React Router", "Tailwind"],
    stack: [
      "React",
      "Redux",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "TypeScript",
    ],
  },
];

export const frameworks = [
  { name: "React.js", image: react, level: 93 },
  { name: "Next.js", image: nextjs, level: 90 },
  { name: "Tailwind CSS", image: tailwind, level: 87 },
  { name: "Chakra UI", image: chakraui, level: 80 },
  { name: "Redux", image: redux, level: 90 },

  { name: "TanStack Query", level: 88 },
];

export const languages = [
  { name: "HTML", image: html, level: 85 },
  { name: "CSS", image: css, level: 80 },
  { name: "JavaScript", image: javascript, level: 93 },
  { name: "TypeScript", image: typescript, level: 93 },
];
