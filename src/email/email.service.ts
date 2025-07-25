import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendFormEmail(data: any) {
    const {
      name,
      email,
      dob,
      mobile,
      loanType,
      pincode,
      city,
      state,
      loanAmount,
      constitution,
      businessYears,
      gstRegistered,
      gstin,
    } = data;

 const htmlBody = `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #f9f9f9;">
    <h1 style="color: #004085;">📄 New Loan Request from Website</h1>
    <p style="font-size: 16px;">A new loan application has been submitted. Please find the details below:</p>

    <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; background-color: #fff; border: 1px solid #ddd; width: 100%; margin-top: 20px;">
      <tr style="background-color: #f1f1f1;">
        <th align="left">Field</th>
        <th align="left">Value</th>
      </tr>
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Date of Birth</strong></td><td>${dob}</td></tr>
      <tr><td><strong>Mobile</strong></td><td>${mobile}</td></tr>
      <tr><td><strong>Loan Type</strong></td><td>${loanType}</td></tr>
      <tr><td><strong>Loan Amount</strong></td><td>₹${loanAmount}</td></tr>
      <tr><td><strong>City</strong></td><td>${city}</td></tr>
      <tr><td><strong>State</strong></td><td>${state}</td></tr>
      <tr><td><strong>Pincode</strong></td><td>${pincode}</td></tr>
      <tr><td><strong>Constitution</strong></td><td>${constitution}</td></tr>
      
      <tr><td><strong>Years in Business</strong></td><td>${businessYears}</td></tr>
      <tr><td><strong>GST Registered</strong></td><td>${gstRegistered}</td></tr>
      <tr><td><strong>GSTIN</strong></td><td>${gstin || 'N/A'}</td></tr>
    </table>

    <p style="margin-top: 30px; font-size: 14px; color: #555;">This request was generated from the loan inquiry form on the Fintree Finance website.</p>
  </div>
`;


await this.mailerService.sendMail({
  to: process.env.EMAIL_ID,
  from: 'noreplywecarefintree@gmail.com',  // or your verified domain
  replyTo: email,  // this lets Fintree team reply to user directly
  subject: `Loan Application - ${name}`,
  html: htmlBody,
});
  }
}
