import { validateOrReject } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { SubmitRequest } from "../../../dtos/request";
import { ISubmitRequest, ISubmitResponse } from "../../../types/Survey";
import { plainToClass } from "class-transformer";
import { endpoints } from "../../../data/endpoints";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISubmitResponse>
) {
  const body: ISubmitRequest = req.body;
  const submitRequest = plainToClass(SubmitRequest, body);

  try {
    await validateOrReject(submitRequest);
  } catch (errors) {
    console.log(
      "Caught promise rejection (validation failed). Errors: ",
      errors
    );
    res.status(400).json({
      errorMessage: `${errors}`,
    });
  }

  try {
    console.log(`email: ${body.email} answers ${body.votes}`);
    res.status(201).redirect(`${endpoints.THANKS_PAGE}`);
  } catch (error) {
    res.status(404).json({ errorMessage: `Sorry something went wrong` });
  }
}
