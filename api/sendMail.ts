import axios from "axios";
import {
  IUserMailErrorResponse,
  IUserMailSuccessfullResponse,
  IUserMailRequest,
  IUserMailResponse,
  IUserMailSend,
  IUserRatingRequest,
  IUserRatingResponse
} from "../types/Mail";
import { endpoints } from "../data/endpoints";

const getErrorObject = (errorMessage: string): IUserMailErrorResponse => ({
  errorMessage,
});

const isErrorResponse = (
  data: unknown
): data is IUserMailErrorResponse => {
  return (data as IUserMailErrorResponse).errorMessage !== undefined;
};

export class SendMail implements IUserMailSend {
  async send(request: IUserMailRequest): Promise<IUserMailResponse> {
    try {
      const resp = await axios.post(endpoints.SEND, request);
      return resp.data as IUserMailSuccessfullResponse;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const responseMessage = (isErrorResponse(err.response?.data) ? err.response?.data.errorMessage : 'Worse error even') as string;
        return getErrorObject(responseMessage);
      } else {
        return getErrorObject("Sth goes wrong");
      }
    }
  }
  async rating(request: IUserRatingRequest): Promise<IUserRatingResponse> {
    try {
      const resp = await axios.get(`${endpoints.RATING}?mail=${request.mail}&rating=${request.rating}`);
      return resp.data as IUserMailSuccessfullResponse;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const responseMessage = (isErrorResponse(err.response?.data) ? err.response?.data.errorMessage : 'Worse error even during sending rating to our service') as string;
        return getErrorObject(responseMessage);
      } else {

        return getErrorObject('We are looking for your error during sending rating to our service');
      }
    }
  }
}
