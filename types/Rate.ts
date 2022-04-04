export interface IRatingRequest {
  mail: string;
  rating: string;
}

export interface IRatingSuccessfullResponse {
  responseMessage: string;
}

export interface IRatingErrorResponse {
  errorMessage: string;
}

export type IRatingResponse = IRatingSuccessfullResponse | IRatingErrorResponse;

export interface IRatingSend {
  rate(request: IRatingRequest): Promise<IRatingResponse>;
}
