# EmailJS Setup Guide

## Steps to Configure EmailJS for Your Portfolio

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)

### 5. Update Your Code
Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

### 6. Test the Form
1. Build and deploy your portfolio
2. Fill out the contact form
3. Check your email for the message

## Template Variables Used
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (chowdhurysiratimmustakim@gmail.com)

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic support

For higher limits, consider upgrading to a paid plan.