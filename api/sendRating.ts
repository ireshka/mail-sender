import axios, { AxiosError } from "axios";
import {
  IUserMailErrorResponse,
  IUserMailSuccessfullResponse,
  IUserMailRequest,
  IUserMailResponse,
  IUserMailSend,
} from "../types/Mail";
import { Endpoints } from "../types/Endpoints.enum";
import {
  IRatingErrorResponse,
  IRatingRequest,
  IRatingResponse,
  IRatingSend,
  IRatingSuccessfullResponse,
} from "../types/Rate";

const getErrorObject = (errorMessage: string): IRatingErrorResponse => ({
  errorMessage,
});

const isErrorResponse = (data: unknown): data is IRatingErrorResponse => {
  return (data as IRatingErrorResponse).errorMessage !== undefined;
};

export class SendRating implements IRatingSend {
  async rate(request: IRatingRequest): Promise<IRatingResponse> {
    try {
      const resp = await axios.post(
        `${Endpoints.RATE}?mail=${request.mail}&rating=${request.rating}`
      );
      const data = resp.data as IRatingSuccessfullResponse;
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const responseMessage = (
          isErrorResponse(err.response?.data)
            ? err.response?.data.errorMessage
            : "Worse error even"
        ) as string;
        return getErrorObject(responseMessage);
      } else {
        return getErrorObject("We are looking for your error");
      }
    }
  }
}
