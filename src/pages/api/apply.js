// api/apply.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
}

const form = req.body;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // set in Vercel dashboard
      pass: process.env.EMAIL_PASS, // set in Vercel dashboard
    }, });

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
        Relationship: ${form.relationship}
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

    }; try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Application submitted successfully!' }); } catch (error) {
        console.error('Email send error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message }); }
}