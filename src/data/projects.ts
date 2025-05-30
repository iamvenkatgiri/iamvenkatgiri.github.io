import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'End-to-End Booking Application',
    description: 'Engineered a scalable GoLang booking application on AWS by leveraging Terraform, enhancing infrastructure management through Infrastructure as Code for high availability.',
    image: 'https://placehold.co/600x400/6ee7b7/1f2937?text=Booking+App',
    technologies: ['GoLang', 'AWS', 'Terraform', 'IaC', 'High Availability'],
    githubUrl: 'https://github.com/iamvenkatgiri/booking-app'
  },
  {
    title: 'Serverless Data Processing',
    description: 'Developed a serverless AWS solution utilizing S3, Lambda, DynamoDB, and API Gateway, enabling real-time data processing and ensuring system scalability.',
    image: 'https://placehold.co/600x400/6ee7b7/1f2937?text=Serverless+App',
    technologies: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'Serverless'],
    githubUrl: 'https://github.com/iamvenkatgiri/serverless-data',
    liveUrl: 'https://medium.com/@venkatagiri.sasanapuri/serverless-web-application-in-aws-703afb83b8ac',
    isBlog: true
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Implemented automated cloud infrastructure using Terraform and AWS CloudFormation, reducing deployment time by 60% and improving reliability.',
    image: 'https://placehold.co/600x400/6ee7b7/1f2937?text=Cloud+Automation',
    technologies: ['Terraform', 'AWS CloudFormation', 'CI/CD', 'Infrastructure Automation'],
    githubUrl: 'https://github.com/iamvenkatgiri/cloud-automation'
  },
  {
    title: 'DevOps Pipeline Optimization',
    description: 'Optimized CI/CD pipelines using Jenkins and GitHub Actions, resulting in 40% faster deployment cycles and improved code quality.',
    image: 'https://placehold.co/600x400/6ee7b7/1f2937?text=DevOps+Pipeline',
    technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/iamvenkatgiri/devops-pipeline'
  }
];