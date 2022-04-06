export interface IVote {
  id: string;
  vote: number;
}

export interface ISubmitRequest {
  email: string;
  votes: IVote[];
}

export interface IQuestionnaireRequest {
  idQuestionnaire: string;
}

export interface IQuestion {
  id: string;
  question: string;
}

export interface IQuestionnaireResponse {
  questions: IQuestion[] | IWrongResponse;
}

export interface ISuccessfulResponse {
  responseMessage: string;
}

export interface IWrongResponse {
  errorMessage: string;
}

export type ISubmitResponse = ISuccessfulResponse | IWrongResponse;

export interface Api {
  submit(req: ISubmitRequest): Promise<ISubmitResponse>;

  getQuestionnaire(req: IQuestionnaireRequest): Promise<IQuestionnaireResponse>;
}
