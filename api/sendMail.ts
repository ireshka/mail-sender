import axios, { AxiosError } from "axios";
import {
  IUserMailErrorResponse,
  IUserMailSuccessfullResponse,
  IUserMailRequest,
  IUserMailResponse,
  IUserMailSend,
} from "../types/Mail";
import { Endpoints } from "../types/Endpoints.enum";

const getErrorObject = (errorMessage: string): IUserMailErrorResponse => ({
  errorMessage,
});

export class SendMail implements IUserMailSend {
  async send(request: IUserMailRequest): Promise<IUserMailResponse> {
    try {
      const resp = await axios.post(Endpoints.SEND, request);
      const data = resp.data as IUserMailSuccessfullResponse;
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return getErrorObject(err.message);
      } else {
        return getErrorObject('Sth goes wrong');
      }
    }
  }
}
