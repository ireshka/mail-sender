import { validate, validateOrReject } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { Email } from "../../../api/Email";
import { SubmitRequest } from "../../../api/survey";
import { sendMessageToUser } from "../../../helpers/sendEmail";
import { IUserMailRequest, IUserMailResponse } from "../../../types/Mail";
import { ISubmitRequest } from "../../../types/Survey";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUserMailResponse>
) {
  const body: ISubmitRequest = req.body;

  const submitRequest = new SubmitRequest();
  submitRequest.email = body.email;
  submitRequest.votes = body.votes;

  try {
    await validate(submitRequest);
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
    res
      .status(201)
      .json({ responseMessage: `mail has been sent to ${body.email}` });
  } catch (error) {
    res.status(404).json({ errorMessage: `Sorry something went wrong` });
  }
}
