import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors({
  origin: 'https://academy-web-oasis.vercel.app',
}));
app.use(express.json());

// POST /api/apply
app.post('/api/apply', async (req, res) => {
  const form = req.body;

  // Check for required environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing EMAIL_USER or EMAIL_PASS in environment variables');
    return res.status(500).json({
      success: false,
      message: 'Server email configuration is missing',
    });
  }

  // Optional: Validate required fields
  if (!form.studentName || !form.parentEmail) {
    return res.status(400).json({
      success: false,
      message: 'Missing required form fields',
    });
  }

  // Create email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // (Optional but useful) Verify email transporter setup
  transporter.verify((error, success) => {
    if (error) {
      console.error('Transporter verification failed:', error);
    } else {
      console.log('Email transporter ready:', success);
    }
  });

  // Compose email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    replyTo: form.parentEmail || 'no-reply@extensiveacademy.com',
    to: 'isaacayomide2019@gmail.com',
    subject: 'New Application Form Submission',
    text: `
      Student Name: ${form.studentName}
      Date of Birth: ${form.dob}
      Gender: ${form.gender}
      Intended Class: ${form.intendedClass}
      Parent Name: ${form.parentName}
      Parent Phone: ${form.parentPhone}
      Parent Email: ${form.parentEmail}
      Previous School: ${form.previousSchool}
      Last Class Attended: ${form.lastClass}
      Reason for Leaving: ${form.reasonForLeaving}
      Blood Group: ${form.bloodGroup}
      Genotype: ${form.genotype}
      Allergies: ${form.allergies}
      On Medication: ${form.onMedication}
      Medication Details: ${form.medicationDetails}
      Why Join: ${form.whyJoin}
    `,
  };

  // Try to send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    res.status(500).json({
      success: false,
      message: 'Failed to send email.',
      error: error.message,
    });
  }
});

// Uncomment this section only if you're serving frontend from backend
/*
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
