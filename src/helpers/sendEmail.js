const nodeMailer = require("nodemailer");
const config = require("../config/configBasic");


let transporter = nodeMailer.createTransport({
  service: "Gmail",
  auth: {
    user: "asadmuhammad427@gmail.com",
    pass: "2017se290",
  },
});

const sendEmail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        return resolve(info);
      }
    });
  });
};

module.exports = sendEmail;
