const nodemailer = require("nodemailer");
const fs = require("fs");
const dateHelper = require("./date.js");
const date = new Date();

function sendMail(filePath) {
  const splitPath = filePath.split("/");
  const fileName = splitPath[splitPath.length - 1];

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS,
    },
  });

  var email = {
    from: process.env.MAIL_AUTH_USER,
    to: process.env.MAIL_TO,
    subject: `Report ${dateHelper.getMonthName(
      date.getMonth()
    )} - ${date.getFullYear()}`,
    text: "Report attached",
    attachments: [
      {
        filenaame: fileName,
        path: filePath,
      },
    ],
  };

  transporter.sendMail(email, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent");
    }
  });
}

module.exports = sendMail;
