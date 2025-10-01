# Career Application EmailJS Setup Guide

## 🎯 **Quick Setup for Career Applications**

### **Step 1: Create Career Application Email Template**

1. **Go to EmailJS Dashboard:** https://dashboard.emailjs.com/
2. **Navigate to:** Email Templates → Create New Template
3. **Template Name:** `Career Applications`
4. **Template ID:** `template_career_applications`

### **Step 2: Email Template Content**

**Subject:** `New Career Application - {{from_name}}`

**HTML Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Career Application</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    
    <div style="background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 24px;">🚀 New Career Application</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">SwiftScale Software - Part-time Sales Associate</p>
    </div>

    <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
        <h2 style="color: #1e293b; margin-top: 0;">👤 Applicant Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 8px 0;">{{from_name}}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:{{from_email}}" style="color: #0ea5e9;">{{from_email}}</a></td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:{{phone}}" style="color: #0ea5e9;">{{phone}}</a></td>
            </tr>
        </table>
    </div>

    <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
        <h2 style="color: #1e293b; margin-top: 0;">📋 Application Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 30%;">Experience:</td>
                <td style="padding: 8px 0;">{{project_type}}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">CV Status:</td>
                <td style="padding: 8px 0;">✅ CV Uploaded</td>
            </tr>
        </table>
    </div>

    <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
        <h2 style="color: #1e293b; margin-top: 0;">📝 Application Message</h2>
        <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
            <pre style="white-space: pre-wrap; font-family: Arial, sans-serif; margin: 0;">{{message}}</pre>
        </div>
    </div>

    <div style="background: #ecfdf5; border: 1px solid #10b981; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
        <h3 style="color: #065f46; margin-top: 0;">🎯 Next Steps</h3>
        <ol style="color: #065f46; margin: 0; padding-left: 20px;">
            <li>Review the application and CV</li>
            <li>Schedule initial screening interview (15-20 minutes)</li>
            <li>If qualified, schedule role assessment interview (30 minutes)</li>
            <li>Make hiring decision within 48 hours</li>
        </ol>
    </div>

    <div style="text-align: center; padding: 20px; background: #f1f5f9; border-radius: 10px;">
        <p style="margin: 0; color: #64748b;">
            <strong>SwiftScale Software</strong><br>
            Part-time Sales Associate Recruitment<br>
            <a href="mailto:swift.scale2409@gmail.com" style="color: #0ea5e9;">swift.scale2409@gmail.com</a>
        </p>
    </div>

</body>
</html>
```

### **Step 3: Update Environment Variables**

Add this line to your `.env` file:
```env
REACT_APP_EMAILJS_TEMPLATE_ID_CAREER=template_career_applications
```

### **Step 4: Test the Setup**

1. **Save the template** in EmailJS dashboard
2. **Update your .env file** with the new template ID
3. **Test the form** on your website
4. **Check your email** for the formatted application

## 🎯 **What You'll Receive**

When someone submits a career application, you'll get a professional email with:

✅ **Applicant Information** (Name, Email, Phone)
✅ **Application Details** (Experience Level, CV Status)
✅ **Complete Application Message** (All form data)
✅ **Next Steps** (Interview process reminder)
✅ **Professional Formatting** (Easy to read and forward)

## 🚀 **Benefits of This Setup**

- **Professional Appearance** - Well-formatted emails
- **Complete Information** - All application details in one email
- **Easy Processing** - Clear next steps for HR
- **Mobile Friendly** - Responsive email design
- **Branded** - SwiftScale colors and styling

## 🔧 **Troubleshooting**

If emails aren't working:

1. **Check EmailJS Dashboard** - Verify template is saved
2. **Check .env file** - Ensure template ID is correct
3. **Check browser console** - Look for JavaScript errors
4. **Test with simple template** - Use basic template first

## 📧 **Email Preview**

The email will look professional with:
- SwiftScale branding (teal/purple gradient)
- Organized sections for easy reading
- Clickable email and phone links
- Clear next steps for processing
- Mobile-responsive design

**This setup ensures you receive all career applications in a professional, organized format!** 🎯
