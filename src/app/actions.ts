'use server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function validateFormData(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.length < 2 || data.name.length > 50) {
    errors.push('Name must be between 2 and 50 characters');
  }

  if (!data.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!data.message || data.message.length < 10 || data.message.length > 1000) {
    errors.push('Message must be between 10 and 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export async function submitContactForm(formData: FormData) {
  try {
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    };

    // Validate form data
    const validation = validateFormData(data);
    if (!validation.isValid) {
      return {
        success: false,
        message: validation.errors.join(', ')
      };
    }

    // Here you would typically send an email or store the message
    // For now, we'll just log it to the console
    console.log('Contact form submission:', data);

    // You can add your email sending logic here
    // For example, using nodemailer or a service like SendGrid
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'your-email@example.com',
    //   from: data.email,
    //   subject: 'New Contact Form Submission',
    //   text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    // });

    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      success: false,
      message: 'An error occurred while processing your message. Please try again later.'
    };
  }
} 