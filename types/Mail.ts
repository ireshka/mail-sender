export interface IUserMailRequest {
  mail: string;
}

export interface IUserMailResponse {
  responseMessage: string;
}

export interface IUserMailSend {
  send(request: IUserMailRequest): Promise<IUserMailResponse>;
}