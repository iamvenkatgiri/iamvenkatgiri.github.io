interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Cloud Platforms & IaC',
    skills: [
      { name: 'AWS', level: 'Expert' },
      { name: 'Azure', level: 'Advanced' },
      { name: 'Google Cloud', level: 'Advanced' },
      { name: 'Terraform', level: 'Expert' },
      { name: 'Ansible', level: 'Advanced' }
    ]
  },
  {
    name: 'Containers & Orchestration',
    skills: [
      { name: 'Docker', level: 'Expert' },
      { name: 'Kubernetes', level: 'Advanced' },
      { name: 'Helm', level: 'Advanced' },
      { name: 'Argo CD', level: 'Advanced' }
    ]
  },
  {
    name: 'Automation & CI/CD',
    skills: [
      { name: 'Jenkins', level: 'Expert' },
      { name: 'AWS CodePipeline', level: 'Advanced' },
      { name: 'Azure DevOps', level: 'Advanced' },
      { name: 'GitHub Actions', level: 'Advanced' }
    ]
  },
  {
    name: 'Programming & Scripting',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Bash', level: 'Advanced' },
      { name: 'PowerShell', level: 'Advanced' },
      { name: 'Golang', level: 'Intermediate' },
      { name: 'SQL', level: 'Advanced' }
    ]
  },
  {
    name: 'Monitoring & Logging',
    skills: [
      { name: 'Grafana', level: 'Advanced' },
      { name: 'Prometheus', level: 'Advanced' },
      { name: 'AWS CloudWatch', level: 'Expert' },
      { name: 'New Relic', level: 'Advanced' }
    ]
  }
];