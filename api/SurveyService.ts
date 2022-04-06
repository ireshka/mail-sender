import axios from "axios";
import { endpoints } from "../data/endpoints";
import {
  Api,
  ISubmitRequest,
  ISubmitResponse,
  ISuccessfulResponse,
  ISurveyRequest,
  ISurveyResponse,
  IWrongResponse,
} from "../types/Survey";

const getErrorObject = (errorMessage: string): ISubmitResponse => ({
  errorMessage,
});

const getErrorSurveyObject = (
  errorMessage: string,
  idSurvey: string
): ISurveyResponse => ({
  idSurvey: idSurvey,
  questions: { errorMessage: errorMessage },
});

const isErrorResponse = (data: unknown): data is IWrongResponse => {
  return (data as IWrongResponse).errorMessage !== undefined;
};

export class SurveyService implements Api {
  async submit(req: ISubmitRequest): Promise<ISubmitResponse> {
    try {
      const resp = await axios.post(endpoints.SEND, req);
      return resp.data as ISuccessfulResponse;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const responseMessage = (
          isErrorResponse(err.response?.data)
            ? err.response?.data.errorMessage
            : "Worse error even"
        ) as string;
        return getErrorObject(responseMessage);
      } else {
        return getErrorObject("Sth goes wrong");
      }
    }
  }
  async getQuestionnaire(req: ISurveyRequest): Promise<ISurveyResponse> {
    try {
      const resp = await axios.post(
        `${endpoints.GET_SURVEY}?surveyId=${req.idSurvey}`
      );
      return resp.data as ISurveyResponse;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const responseMessage = (
          isErrorResponse(err.response?.data)
            ? err.response?.data.errorMessage
            : "Worse error even"
        ) as string;
        return getErrorSurveyObject(responseMessage, req.idSurvey);
      } else {
        return getErrorSurveyObject("Sth goes wrong", req.idSurvey);
      }
    }
  }
}
