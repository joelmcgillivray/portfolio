import { techIcons } from '../constants/techIcons';

const techData = [
  {
    label: '🧑‍💻 Languages & Markup',
    items: [
      { name: 'Java', years: 4, icon: techIcons.java },
      { name: 'HTML', years: 4, icon: techIcons.html },
      { name: 'CSS', years: 4, icon: techIcons.css },
      { name: 'Python', years: 3, icon: techIcons.python },
      { name: 'Kotlin', years: 1, icon: techIcons.kotlin },
      { name: 'Swift', years: 1, icon: techIcons.swift },
    ],
  },
  {
    label: '🧰 Frameworks & Libraries',
    items: [
      { name: 'React', years: 2, icon: techIcons.react },
      { name: 'Bootstrap', years: 2, icon: techIcons.bootstrap },
      { name: '.NET', years: 2, icon: techIcons.dotNet },
      { name: 'Vue.js', years: 1, icon: techIcons.vue },
      { name: 'Blazor', years: 1, icon: techIcons.blazor },
    ],
  },
  {
    label: '💾 Databases',
    items: [
      { name: 'PostgreSQL', years: 4, icon: techIcons.postgres },
      { name: 'MySQL', years: 4, icon: techIcons.mysql },
      { name: 'MongoDB', years: 3, icon: techIcons.mongo },
      { name: 'SQLite', years: 1, icon: techIcons.sqlite },
    ],
  },
  {
    label: '🔧 Tools & Dev Platforms',
    items: [
      { name: 'GitHub', years: 4, icon: techIcons.github },
      { name: 'Jira', years: 3, icon: techIcons.jira },
      { name: 'SourceTree', years: 3, icon: techIcons.sourceTree },
      { name: 'DBeaver', years: 3, icon: techIcons.dbeaver },
      { name: 'Jenkins', years: 3, icon: techIcons.jenkins },
      { name: 'Kubernetes', years: 3, icon: techIcons.kubernetes },
      { name: 'Confluence', years: 2, icon: techIcons.confluence },
    ],
  },
  {
    label: '🖥️ IDEs & Environments',
    items: [
      { name: 'Visual Studio Code', years: 4, icon: techIcons.visualStudioCode },
      { name: 'IntelliJ', years: 2, icon: techIcons.intellij },
      { name: 'Android Studio', years: 2, icon: techIcons.androidStudio },
      { name: 'xCode', years: 1, icon: techIcons.xcode },
    ],
  },
];


export default techData;
