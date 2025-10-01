// Test Career Application EmailJS Setup
// Run this in browser console on your website to test

const testCareerEmailJS = async () => {
  console.log('🧪 Testing Career Application EmailJS...');
  
  try {
    // Test configuration
    const serviceId = 'service_9g3nhzl';
    const templateId = 'template_career_applications'; // Update this with your actual template ID
    const publicKey = 'Wq1KCQz6S9BnCCZOU';
    
    console.log('📧 EmailJS Configuration:');
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey);
    
    // Initialize EmailJS
    emailjs.init(publicKey);
    console.log('✅ EmailJS initialized');
    
    // Test data
    const testData = {
      from_name: 'Test Applicant',
      from_email: 'test@example.com',
      phone: '+91 9876543210',
      project_type: 'Career Application - Student',
      message: `CAREER APPLICATION DETAILS:

Name: Test Applicant
Email: test@example.com
Phone: +91 9876543210
Experience Level: Student
CV Uploaded: test_cv.pdf
How did you hear about us: Website
Expected Monthly Earnings: ₹5,000 - ₹15,000

Additional Message:
This is a test application for the Part-time Sales Associate position.

---
This is a career application for the Part-time Sales Associate position.
Please review the application and schedule the initial screening interview.`,
      to_name: 'SwiftScale HR Team'
    };
    
    console.log('📤 Sending test email...');
    
    // Send test email
    const result = await emailjs.send(serviceId, templateId, testData);
    
    console.log('✅ Test email sent successfully!');
    console.log('Result:', result);
    console.log('📧 Check your email inbox for the test application');
    
    return result;
    
  } catch (error) {
    console.error('❌ Error sending test email:', error);
    console.log('🔧 Troubleshooting tips:');
    console.log('1. Check if template ID is correct');
    console.log('2. Verify EmailJS service is active');
    console.log('3. Check browser console for errors');
    console.log('4. Ensure .env file has correct template ID');
    
    return error;
  }
};

// Run the test
testCareerEmailJS();

// Instructions for manual testing
console.log(`
🎯 MANUAL TESTING INSTRUCTIONS:

1. Go to your website: http://localhost:3000/careers
2. Fill out the career application form
3. Submit the form
4. Check your email inbox
5. Look for email with subject: "New Career Application - [Name]"

📧 Expected Email Content:
- Professional formatting with SwiftScale branding
- Complete applicant information
- Application details and message
- Next steps for HR processing

🔧 If emails don't work:
1. Check EmailJS dashboard for template
2. Verify .env file has correct template ID
3. Check browser console for errors
4. Test with simple template first
`);
