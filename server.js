import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

// This helps __dirname work in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/apply', async (req, res) => {
  const form = req.body;

  // Configure your email transport (use your real email and password or an app password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'extensiveacademy@gmail.com', // school owner's email
      pass: 'zrjq rcxx luuw vdzi', // use an app password, not your real password
    },
  });

  // Compose the email
  const mailOptions = {
    from: form.parentEmail || 'no-reply@extensiveacademy.com',
    to: 'extensiveacademy@gmail.com', // changed to new recipient email
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
    res.status(500).json({ success: false, message: 'Failed to send email.', error });
  }
});
// Serve React frontend in production
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(5000, () => console.log('Server running on port 5000'));