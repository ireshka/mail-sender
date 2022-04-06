import { validate } from "class-validator";
import type { NextApiRequest, NextApiResponse } from "next";
import { Questionnaire } from "../../../api/survey";

import {
  IQuestionnaireRequest,
  IQuestionnaireResponse,
} from "../../../types/Survey";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IQuestionnaireResponse>
) {
  const body: IQuestionnaireRequest = req.body;

  const questionnaire = new Questionnaire();
  questionnaire.idQuestionnaire = body.idQuestionnaire;

  try {
    await validate(questionnaire);
  } catch (errors) {
    console.log(
      "Caught promise rejection (validation failed). Errors: ",
      errors
    );
    res.status(400).json({
      questions: { errorMessage: `something went wrong check: ${errors}` },
    });
  }

  try {
    res.status(200).json({
      questions: [
        { id: "1", question: "Czy na bootcampie jest fajnie" },
        { id: "2", question: "Czy lubisz Michała" },
        { id: "3", question: "Kiedy imprezka" },
        { id: "4", question: "Zdjęcia na kiedy" },
        { id: "5", question: "Ele elo 3210" },
      ],
    });
  } catch (error) {
    res
      .status(404)
      .json({ questions: { errorMessage: `Sorry something went wrong` } });
  }
}
