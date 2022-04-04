import type { NextApiRequest, NextApiResponse } from "next";
import { sendMessageToUser } from "../../../helpers/sendEmail";
import { IUserMailRequest, IUserMailResponse } from "../../../types/Mail";

const sgMail = require("@sendgrid/mail");
const SendGrid_Key = process.env.SENDGRID_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUserMailResponse>
) {
  const body: IUserMailRequest = req.body.mail;

  sgMail.setApiKey(SendGrid_Key);

  //sprawdzić mail

  const { html: emailHtml } = render(ratingEmail.generate(), { validationLevel: 'soft' })

  const msg = {
    to: `${body}`,
    from: "michal.wakulinski1@gmail.com", // Use the email address or domain you verified above
    subject: "Intern Survey",
    text: "and easy to do anywhere, even with Node.js",
    html: emailHtml,
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
      res.status(400).json({ errorMessage: `Sorry something went wrong` });
    }
  })();
}
