import { validateOrReject } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { SubmitRequest } from "../../../dtos/request";
import { ISubmitRequest, ISubmitResponse } from "../../../types/Survey";
import { plainToClass } from "class-transformer";

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
    res
      .status(201)
      .json({ responseMessage: `${body.email} thank you for your time :)` });
  } catch (error) {
    res.status(404).json({ errorMessage: `Sorry something went wrong` });
  }
}
