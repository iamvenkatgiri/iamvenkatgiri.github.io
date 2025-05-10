interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'May 2023',
    url: 'https://www.credly.com/badges/419eafda-6420-43b4-a7ab-a57bce77ba03/public_url'
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'May 2023',
    url: 'https://www.credly.com/badges/bb4ae845-1f8c-4bcf-bd9e-1059e7fe990b/public_url'
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'July 2024',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/venkatgiris/89AA6EF9BB4AD086?sharingId=9485DA49ACF65F8E'
  },  
  {
    title: 'AWS Academy Data Engineering',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    url: 'https://www.credly.com/badges/c9ca3c0f-365f-408d-8afa-f2ad53871608/public_url'
  },
  {
    title: 'Microsoft 365 Certified: Fundamentals',
    issuer: 'Microsoft',
    date: 'July 2024',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/venkatgiris/BD720D75A9700F0A?sharingId=9485DA49ACF65F8E'
  }
];