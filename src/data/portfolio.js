export const skills = {
  Frontend:  ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  Backend:   ['Node.js', 'Express.js', 'REST APIs'],
  Database:  ['MongoDB', 'Firebase', 'Mongoose'],
  Tools:     ['Git', 'GitHub', 'VS Code', 'Postman'],
  Other:     ['Python', 'MediaPipe', 'Machine Learning', 'Cybersecurity'],
}

export const projects = [
  {
    id: 1,
    title: 'MERN Job Portal',
    description:
      'A full-featured job portal enabling employers to post vacancies and candidates to apply — complete with JWT authentication, role-based dashboards, and real-time application tracking.',
    features: [
      'JWT Authentication & role-based access',
      'Job posting & search with filters',
      'Application tracking dashboard',
      'File upload (resumes)',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Tailwind'],
    github: 'https://github.com/its-shubhu123/job-portal-project',
    demo: null,
    color: '#e8622a',
    number: '01',
  },
  {
    id: 2,
    title: 'Real Time Chat Application',
    description:
    ' Developed a real-time chat application using Socket.IO enabling low-latency messaging between users.',
    features: [
     'Developed a real-time chat application using Socket.IO enabling low-latency messaging between users.',
   'Implemented JWT-based authentication and message persistence in MongoDB, ensuring secure and reliable communication.',
  'Optimized real-time updates with WebSocket connections, reducing message delivery delay.',
  'Added features such as online/offline status, typing indicators, and synchronized chat history across sessions.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'REST APIs'],
    github: 'https://github.com/its-shubhu123/Real-Time-Chat-Application',
    demo: null,
    color: '#0d9488',
    number: '02',
  },
]

export const experience = [
  {
    role: 'Business Development Intern',
    company: 'Startup / Organisation',
    period: '2025',
    points: [
      'Assisted in identifying new business opportunities and potential client segments through market research.',
      'Contributed to drafting proposals and presentations for prospective partners.',
      'Gained hands-on experience in client communication, CRM workflows, and cross-functional collaboration.',
      'Developed a deeper understanding of product positioning and go-to-market strategies.',
    ],
  },
]

export const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export const socialLinks = {
  github:   'https://github.com/its-shubhu123',
  linkedin: 'https://www.linkedin.com/in/shubham-vishwakarma-435777253',
  email:    'shubhamkumar2503872@gmail.com',
}