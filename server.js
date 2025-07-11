import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config();

// This helps __dirname work in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors({
  origin: 'https://academy-web-oasis.vercel.app',
}));
app.use(express.json());

app.post('/api/apply', async (req, res) => {
  const form = req.body;

  // Configure your email transport (use your real email and password or an app password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true,
    debug: true,

  });

  // Compose the email
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

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Application submitted successfully!' });
  } catch (error) {
    console.log('Email User:', process.env.EMAIL_USER);
  console.error('Error sending email:', error);
  res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
}
});
// Serve React frontend in production
/*app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
