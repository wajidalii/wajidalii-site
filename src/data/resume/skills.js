const skills = [
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Frontend'],
  },
  {
    title: 'Redux',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'HTML/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.js',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Backend'],
  },
  {
    title: 'Express.js',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Backend'],
  },
  {
    title: '.NET Core',
    competency: 3,
    category: ['Web Development', 'C#', 'Frontend', 'Backend'],
  },
  {
    title: 'Laravel',
    competency: 3,
    category: ['Web Development', 'PHP', 'Frontend', 'Backend'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Web Development', 'Languages', 'Backend'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Languages', 'Web Development', 'Game Development', 'Backend'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages', 'Spring Boot', 'Android Development'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages', 'DevOps'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Microsoft SQL Server',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Oracle',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Linux',
    competency: 3,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'PM2',
    competency: 3,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'Ngrok',
    competency: 3,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'Nginx',
    competency: 3,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'Unity3D',
    competency: 3,
    category: ['Game Development', 'C#'],
  },
  {
    title: 'Salesforce',
    competency: 2,
    category: ['Web Development', 'CRM', 'Apex'],
  },
  {
    title: 'Android Development',
    competency: 3,
    category: ['Mobile Development', 'Java'],
  },
  {
    title: 'Public Speaking',
    competency: 4,
    category: ['Office Skills', 'Communication', 'Teamwork', 'Soft Skills'],
  },
  {
    title: 'Mentoring',
    competency: 4,
    category: ['Office Skills', 'Communication', 'Teamwork', 'Soft Skills'],
  },
  {
    title: 'Team Collaboration',
    competency: 4,
    category: ['Office Skills', 'Teamwork', 'Problem Solving'],
  },
  {
    title: 'Problem Solving',
    competency: 5,
    category: ['Office Skills', 'Problem Solving'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#FFA500',
  '#008000',
  '#800080',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };