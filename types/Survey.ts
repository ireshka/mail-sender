export interface IVote {
  id: string;
  vote: number;
}

export interface ISubmitRequest {
  email: string;
  votes: IVote[];
}
