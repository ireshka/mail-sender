const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid");
import { render } from "mjml-react";
import * as ratingEmail from "../emailTemplates/ratingEmail"


const getSendDate = () => {
  const actualDate = new Date();
  return `${actualDate.getHours()}:${actualDate.getMinutes()}`
}

export async function sendMessageToUser(email: string) {
  const options = {
    apiKey: process.env.SENDGRID_KEY,
  };

  const { html: emailHtml } = render(ratingEmail.generate(email), {
    validationLevel: "soft",
  });

  const sendDate = getSendDate();

  let transporter = nodemailer.createTransport(sgTransport(options));
  return await transporter.sendMail({
    from: "michal.wakulinski1@gmail.com",
    to: email,
    subject: `El Trio Intern - ${sendDate}`,
    text: "Rate our bootcamp",
    html: emailHtml,
  });
}
