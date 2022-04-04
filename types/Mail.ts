export interface IUserMailRequest {
  mail: string;
}

export interface IUserMailResponse {
  responseMessage?: string;
  error?: {
    errorMessage: string;
  },
}

export interface IUserMailSend {
  send(request: IUserMailRequest): Promise<IUserMailResponse>;
}