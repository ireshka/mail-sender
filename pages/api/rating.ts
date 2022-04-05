import type { NextApiRequest, NextApiResponse } from "next";
import { IUserMailResponse } from "../../types/Mail";
import { endpoints } from '../../data/endpoints';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUserMailResponse>
) {
  try {
    //TODO: add query validation later
    const userMail = req.query.mail;
    const rating = req.query.rating;
    console.log(`email: ${userMail} rated us ${rating}`);
    res
      .status(200)
      .redirect(301, `${endpoints.THANKS_PAGE}?mail=${userMail}&rating=${rating}`);
  } catch (error) {
    res.status(404).json({
      errorMessage: `Sorry something went wrong during getting rated`,
    });
  }
}
