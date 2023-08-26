//BREVO (Previously sendinblue)
require("dotenv").config({ path: "backend/config.env" });
const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendEmail = ({ email, title, text }) => {
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.sender = { name: "Company Name", email: process.env.EMAIL_FROM };
  sendSmtpEmail.to = [{ email }];
  sendSmtpEmail.subject = title;
  sendSmtpEmail.htmlContent = text;

  apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(data => {
      console.log(`Email sent successfully: ${JSON.stringify(data, null, 2)}`);

    })
    .catch(error => {
      console.error(`Error sending email: ${error}`);
    });
};

module.exports = sendEmail;




// SendGrid
// require("dotenv").config({ path: "./config.env" });
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendEmail = ({ email, title, text }) => {
//   const msg = {
//     to: { email }, // Change to your recipient
//     from: process.env.EMAIL_FROM, // Change to your verified sender
//     subject: title,
//     html: text,
//   };

//   sgMail
//     .send(msg)
//     .then((response) => {
//       console.log(response[0].statusCode);
//       console.log(response[0].headers);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   }

// module.exports = sendEmail;



//mailgun 

// require("dotenv").config({ path: "./config.env" });
// const formData = require('form-data');
// const Mailgun = require('mailgun.js');
// const mailgun = new Mailgun(formData);

// const sendEmail = ({ email, title, text }) => {
//   const mg = mailgun.client({
//     username: 'api',
//     key: process.env.MAILGUN_API_KEY,
//   });
  
//   mg.messages
//     .create('sandboxdaba458de8f74cfba3368b89a1880071.mailgun.org', {
//       from: process.env.EMAIL_FROM,
//       to: [email],
//       subject: title,
//       text: text,
//     })
//     .then(msg => console.log(msg)) // logs response data
//     .catch(err => console.log(err)); // logs any error`;
// };



