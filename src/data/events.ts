interface TimelineEvent {
  title: string;
  company: string;
  location: string;
  date: string;
  type: 'education' | 'experience';
  description: string[];
}

export const events: TimelineEvent[] = [
  {
    title: "Cloud and DevOps Engineer",
    company: "Capital One",
    location: "USA",
    date: "Jan 2025 - Present",
    type: "experience",
    description: [
      "Built reusable Terraform modules in GitHub, integrated with Cloudbees Jenkins pipelines, reducing boilerplate infrastructure code and improving deployment efficiency",
      "Automated data extraction workflows into AWS Lambda functions, enabling seamless ingestion into Snowflake databases and QuickSight dashboards, enhancing software systems performance"
    ]
  },
  {
    title: "Cloud Engineer Intern",
    company: "Accel Bi Corporation",
    location: "USA",
    date: "Jun 2024 - Aug 2024",
    type: "experience",
    description: [
      "Deployed containerized apps on Amazon EKS, optimizing cloud technologies and cutting costs by 20%",
      "Streamlined identity and access management processes by 30% through secure IAM roles implementation",
      "Leveraged AWS CloudFormation to streamline infrastructure processes, cutting setup time by half"
    ]
  },
  {
    title: "Linux Administrator",
    company: "UT Dallas Office of Information Technology",
    location: "Richardson, TX",
    date: "May 2024 - June 2024",
    type: "experience",
    description: [
      "Upgraded Linux workstations and performed initial setup using Ansible playbooks",
      "Collected metrics using scripts and visualized data in PowerBi Dashboards"
    ]
  },
  {
    title: "Graduate Teaching Assistant",
    company: "The University of Texas at Dallas",
    location: "Richardson, TX",
    date: "Aug 2023 - May 2024",
    type: "experience",
    description: [
      "Provided academic and administrative support to Cloud Computing students at The University of Texas at Dallas",
      "Assisted in setting up e-learning platforms using Blackboard and MS Stream/Teams for seamless online education",
      "Collaborated with professors to create assignments focusing on Amazon Web Services to enhance student learning outcomes",
      "Conducted exam review sessions and classroom sessions to clarify doubts and reinforce key concepts"
    ]
  },
  {
    title: "Infrastructure Engineer – L2",
    company: "Avizva Solutions",
    location: "India",
    date: "May 2022 - Nov 2022",
    type: "experience",
    description: [
      "Automated workflows with Ansible playbooks, reducing system errors and saving 20+ hours of manual work weekly",
      "Directed migration from monolithic to microservices using Docker and Kubernetes, reducing deployment downtime by 90%",
      "Optimized AWS cost by implementing autoscaling policies & Spot instances, reducing monthly cloud expenses by 35%",
      "Implemented AWS IAM RBAC, reducing unauthorized access risks by 70%",
      "Designed scalable IaaS solutions on AWS, handling 10,000+ concurrent users with 100% availability"
    ]
  },
  {
    title: "Cloud Engineer",
    company: "Wipro Ltd",
    location: "India",
    date: "Jun 2019 - May 2022",
    type: "experience",
    description: [
      "Engineered CI/CD pipelines using Jenkins, achieving 30% reduction in software delivery time",
      "Led AWS CloudFormation deployment for legacy infrastructure migration, reducing costs by 30%",
      "Monitored 20+ environments using Nagios XI, Prometheus, and ELK Stack, ensuring 99.9% uptime",
      "Automated routine tasks using Bash scripts, improving operational efficiency",
      "Spearheaded cloud cost management initiatives, reducing expenses by 20%"
    ]
  },
  {
    title: "Master's in Information Technology and Management",
    company: "The University of Texas at Dallas",
    location: "Richardson, TX",
    date: "Aug 2023 - May 2025",
    type: "education",
    description: [
      "Specialized in Cloud Computing and DevOps practices",
      "Relevant coursework: Cloud Computing, Database Design, Enterprise Architecture, Distributed Systems",
      "GPA: 3.9/4.0"
    ]
  },
  {
    title: "Bachelor of Engineering in Mechanical Engineering",
    company: "Chaitanya Bharathi Institute of Technology",
    location: "India",
    date: "Aug 2015 - May 2019",
    type: "education",
    description: [
      "Graduated with distinction",
      "Participated in various technical events and workshops"
    ]
  }
];