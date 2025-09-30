// EmailJS Test Script
// Run this in your browser console to test EmailJS configuration

console.log('🧪 Testing EmailJS Configuration...');

// Check if environment variables are loaded
console.log('Environment Variables:');
console.log('REACT_APP_EMAILJS_SERVICE_ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log('REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT);
console.log('REACT_APP_EMAILJS_PUBLIC_KEY:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

// Test EmailJS initialization
if (typeof emailjs !== 'undefined') {
  console.log('✅ EmailJS is loaded');
  
  // Test with your actual values
  const serviceId = 'service_9g3nhzl';
  const templateId = 'template_qknt74a';
  const publicKey = 'Wq1KCQz6S9BnCCZOU';
  
  console.log('Testing with:');
  console.log('Service ID:', serviceId);
  console.log('Template ID:', templateId);
  console.log('Public Key:', publicKey);
  
  // Initialize EmailJS
  emailjs.init(publicKey);
  console.log('✅ EmailJS initialized');
  
} else {
  console.log('❌ EmailJS is not loaded. Make sure @emailjs/browser is installed.');
}

console.log('📧 If you see any errors above, that\'s likely the cause of the form submission issue.');
console.log('💡 Make sure your .env file is in the project root and restart the development server.');
