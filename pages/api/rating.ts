import { validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
<<<<<<< HEAD
import { IRatingRequest, IRatingResponse } from "../../types/Rate";
=======
import { IUserMailResponse } from "../../types/Mail";
import { endpoints } from "../../data/endpoints";
import { EmailRating } from "../../api/Email";
>>>>>>> main

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IRatingResponse>
) {
  const userMail = req.query.mail as string;
  const rating = req.query.rating as string;

  const emailRating = new EmailRating();
  emailRating.mail = userMail;
  emailRating.rating = Number(rating);

  try {
    await validate(emailRating);
  } catch (errors) {
    console.log(
      "Caught promise rejection (validation failed). Errors: ",
      errors
    );
    res.status(400).json({
      errorMessage: `Provided queries has some problems: ${errors}`,
    });
  }

  try {
    res.status(200).redirect(
      301,
      `${endpoints.SURVEY_PAGE}?mail=${userMail}&surveyId=${rating}` //redirect to another page
    );
  } catch (error) {
    res.status(404).json({
      errorMessage: `Sorry something went wrong during getting rated`,
    });
  }
}
