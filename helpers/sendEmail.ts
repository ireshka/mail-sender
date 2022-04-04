const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid");
import { render } from "mjml-react";
import * as ratingEmail from "../emailTemplates/ratingEmail";

export async function sendMessageToUser(email: string) {
  const options = {
    apiKey: process.env.SENDGRID_KEY,
  };
  let transporter = nodemailer.createTransport(sgTransport(options));
  const { html: emailHtml } = render(ratingEmail.generate(email), {
    validationLevel: "soft",
  });
  return await transporter.sendMail({
    from: "michal.wakulinski1@gmail.com",
    to: email,
    subject: "Czy działa",
    text: "Rate our bootcamp",
    html: emailHtml,
  });
}
