import type { NextApiRequest, NextApiResponse } from "next";
import { IUserMailRequest, IUserMailResponse } from "../../../types/Mail";
const sgMail = require("@sendgrid/mail");
const SendGrid_Key = process.env.SENDGRID_KEY;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUserMailResponse>
) {
  const body: IUserMailRequest = req.body.mail;

  sgMail.setApiKey(SendGrid_Key);

  //sprawdzić mail

  const msg = {
    to: `${body}`,
    from: "michal.wakulinski1@gmail.com", // Use the email address or domain you verified above
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  //ES8
  (async () => {
    try {
      await sgMail.send(msg);
      res
        .status(200)
        .json({ responseMessage: `mail has been sent to ${body}` });
    } catch (error: any) {
      // console.error(error);
      console.log('===> im in catch?')

      if (error.response) {
        console.error(error.response.body);
      }
      res.status(404).json({ errorMessage: `Sorry something went wrong` });
    }
  })();
}
