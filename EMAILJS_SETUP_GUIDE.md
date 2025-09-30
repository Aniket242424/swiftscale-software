# 📧 EmailJS Setup Guide for SwiftScale Website

## 🎯 What is EmailJS?
EmailJS allows you to send emails directly from your website without a backend server. Perfect for contact forms!

## 🚀 Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended) or your preferred email provider
4. Connect your Gmail account: `swift.scale2409@gmail.com`
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Templates

#### Template 1: Contact Form
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Subject:** New Contact Form Submission - {{from_name}}

**Content:**
```
Hello SwiftScale Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}
Message: {{message}}

Best regards,
SwiftScale Website
```

4. Save and note the **Template ID** (e.g., `template_contact`)

#### Template 2: Student Projects Form
1. Create another template
2. Use this template:

**Subject:** New Student Project Request - {{from_name}}

**Content:**
```
Hello SwiftScale Team,

You have received a new student project request:

STUDENT DETAILS:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
College: {{college}}
Course: {{course}}
Year: {{year}}

PROJECT DETAILS:
Project Type: {{project_type}}
Technology: {{technology}}
Timeline: {{timeline}}
Budget: {{budget}}
Message: {{message}}

Best regards,
SwiftScale Website
```

3. Save and note the **Template ID** (e.g., `template_student`)

### 4. Get Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (e.g., `user_abc123xyz`)

### 5. Update Website Configuration

Replace these values in your code:

**In `src/components/Contact.js`:**
```javascript
const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
const templateId = 'YOUR_CONTACT_TEMPLATE_ID'; // e.g., 'template_contact'
const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'user_abc123xyz'
```

**In `src/components/StudentProjects.js`:**
```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Same as above
const templateId = 'YOUR_STUDENT_TEMPLATE_ID'; // e.g., 'template_student'
const publicKey = 'YOUR_PUBLIC_KEY'; // Same as above
```

## 🔧 Alternative: Environment Variables (Recommended)

### 1. Create `.env` file in project root:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id
REACT_APP_EMAILJS_TEMPLATE_ID_STUDENT=your_student_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 2. Update code to use environment variables:
```javascript
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
```

## 📊 EmailJS Free Plan Limits
- **200 emails/month** (perfect for starting)
- **2 email services**
- **2 email templates**
- **1,000 API calls/month**

## 🚀 Testing
1. Fill out the contact form on your website
2. Check your email: `swift.scale2409@gmail.com`
3. You should receive the form data!

## 🔒 Security Notes
- Never commit your EmailJS keys to public repositories
- Use environment variables for production
- The public key is safe to use in frontend code

## 📞 Need Help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Next Steps:**
1. Follow this guide to set up EmailJS
2. Update the configuration in your code
3. Test both forms
4. Deploy and start receiving leads! 🎉
