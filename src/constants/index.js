import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate Software developer with a knack for crafting robust and scalable web applications. With 1.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Vue.js, as well as back-end technologies like PHP, Python, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software developer with a passion for creating efficient and user-friendly web applications. With 1.5 years of professional experience, I have worked with a variety of technologies, including PHP, React.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "January 2021 - June 2022",
    numberOfyears: 1.5,
    role: "Software Developer",
    company: "Cybercom Creation",
    description: ['• Built custom cross-browser modules in PHP Magento framework and elevating website functionality.',
                  '• Increased user experience by 45% by using JavaScript, jQuery and Ajax to make websites more interactive.',
                  '• Implemented and maintained the frontend of Point-of-Sale applications using React.js frameworks.',
                  '• Developed multiple web applications using Laravel framework, ensuring high performance, scalability and security.',
                  '• Optimized server configurations and SQL queries to reduce around 30% processing time.',
                  '• Debugged and built 100+ additional features and fixed bugs using Jenkins CI/CD tool on the given ETA.',
                  '• Ensuring cross-browser compatibility and optimal performance of the application.',
                  '• Completed over 50 Jira tickets within project timelines which resulted in a 12% increase in project efficiency.', 
                  '• Oversaw GitHub and GitLab for streamlined version control.',
                  '• Built consensus through effective collaboration with cross-functional teams including seniors, QA team and designers.', 
                  '• Solving bugs and errors with junior developers improved problem-solving and communication skills.',
                  '• Hosted feedback sessions, showcasing enthusiasm and motivation to improve personal performance.'],
    technologies: ["HTML", "CSS","PHP", "Magento", "React.js", "MySql", "Javascript", "Git", "Jenkins"],
  },
];

export const PROJECTS = [
  {
    title: "Blisscart Ecommerce Application",
    image: project1,
    description:
      "To streamline electronic product purchases online. Deliver secure transactions with Full featured shopping cart, Product reviews and ratings, Top products carousel, Product pagination, Product search feature, User profile with orders, Admin product management, Admin user management, Admin Order details page, Mark orders as delivered option, Checkout process (shipping, payment method, etc), PayPal / credit card integration.",
    technologies: ["Django", "React", "Redux", "REST Framework", "JWT authentication", "PayPal API", "Heroku", "PostgreSQL"],
  },
  {
    title: "Instagram Clone Web Application",
    image: project2,
    description:
      "Developed a social media app clone to replicate key social media features. using PHP Laravel with Eloquent relationships, Vue.js, and Laravel Telescope for improved monitoring and debugging. Functional with features like create profile, upload images, send request, like and comment posts.",
    technologies: ["PHP", "Laravel", "Vue.js", "MySql"],
  },
  {
    title: "Questcom Online Furniture store",
    image: project3,
    description:
      "Create a full-featured eCommerce site for furniture shopping which provides all the eCommerce website facility related to furniture shopping including browsing, selecting, adding to wish list, adding to cart, purchase, registration and etc.",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "MVC", "Javascript", "jQuery","Bootstrap"],
  },
  {
    title: "Face Detection and Recognition",
    image: project4,
    description:
      "Implement a prototype which includes features like user registration, recognition, and secure access to private documents for authorized users, with practical applications like phone unlocking and attendance tracking.",
    technologies: ["Python", "Tkinter", "OpenCV"],
  },
];

export const CONTACT = {
  address: "44 Gemini Dr, Barrie, CA L9J 0C3 ",
  phoneNo: "+1 (437)-988-9927",
  email: "tilakpandya2@gmail.com",
};

export const EDUCATION = [
  { 
    'degree' : "Bachelor of Computer Application",
    'years' : '2016-2019',
    'institute' : 'Charotar University of Science and Technology',
    'location' : 'India',
    'CGPA/GPA' : '8.82 / 10'
  },
  { 
    'degree' : "Master of Computer Application",
    'years' : '2019-2021',
    'institute' : 'Charotar University of Science and Technology',
    'location' : 'India',
    'CGPA/GPA' : '9.67 / 10'
  },
  { 
    'degree' : "Artificial Intelligence and Bigdata Analytics",
    'years' : '2022-2023',
    'institute' : 'Georgian College',
    'location' : 'Ontario, CA',
    'CGPA/GPA' : '87.57 / 100'
  },
]