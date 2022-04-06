import { validate, validateOrReject } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { Email } from "../../../api/Email";
import { sendMessageToUser } from "../../../helpers/sendEmail";
import { IUserMailRequest, IUserMailResponse } from "../../../types/Mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUserMailResponse>
) {
  const body: IUserMailRequest = req.body;

  const mail = new Email();
  mail.mail = body.mail;

  try {
    await validateOrReject(mail);
  } catch (errors) {
    console.log(
      "Caught promise rejection (validation failed). Errors: ",
      errors
    );
    res.status(400).json({
      errorMessage:
        "Provided email is not a proper email, please check your email address",
    });
  }

  try {
    await sendMessageToUser(body.mail);
    res
      .status(200)
      .json({ responseMessage: `mail has been sent to ${body.mail}` });
  } catch (error) {
    res.status(404).json({ errorMessage: `Sorry something went wrong` });
  }
}
