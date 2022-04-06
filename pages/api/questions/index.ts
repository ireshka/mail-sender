import { validateOrReject } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { Questionnaire } from "../../../dtos/request";

import { ISurveyRequest, ISurveyResponse } from "../../../types/Survey";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISurveyResponse>
) {
  const body: ISurveyRequest = req.body;

  const questionnaire = new Questionnaire();
  questionnaire.idSurvey = body.idSurvey;

  try {
    await validateOrReject(questionnaire);
  } catch (errors) {
    console.log(
      "Caught promise rejection (validation failed). Errors: ",
      errors
    );
    res.status(400).json({
      idSurvey: questionnaire.idSurvey,
      questions: { errorMessage: `something went wrong check: ${errors}` },
    });
  }

  try {
    res.status(200).json({
      idSurvey: questionnaire.idSurvey,
      questions: [
        { id: "1", question: "Czy na bootcampie jest fajnie" },
        { id: "2", question: "Czy lubisz Michała W" },
        { id: "3", question: "Kiedy imprezka" },
        { id: "4", question: "Zdjęcia na kiedy" },
        { id: "5", question: "Ele elo 3210" },
      ],
    });
  } catch (error) {
    res.status(404).json({
      idSurvey: questionnaire.idSurvey,
      questions: { errorMessage: `Sorry something went wrong` },
    });
  }
}
