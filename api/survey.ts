import {
  IsString,
  IsEmail,
  Min,
  Max,
  IsInt,
  IsArray,
  ValidateNested,
} from "class-validator";
import { ISurveyRequest, ISubmitRequest, IVote } from "../types/Survey";

export class Vote implements IVote {
  @IsString()
  id!: string;

  @IsInt()
  @Min(1)
  @Max(5)
  vote!: number;
}

export class SubmitRequest implements ISubmitRequest {
  @IsString()
  @IsEmail()
  email!: string;

  @IsArray()
  @ValidateNested({ each: true })
  votes!: Vote[];
}

export class Questionnaire implements ISurveyRequest {
  @IsString()
  idSurvey!: string;
}
