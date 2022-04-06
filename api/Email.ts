import { IsEmail, IsInt, IsString, Max, Min } from "class-validator";
import { IUserMailRequest } from "../types/Mail";

export class Email implements IUserMailRequest {
  @IsString()
  @IsEmail()
  mail!: string;
}

export class EmailRating implements IUserMailRequest {
  @IsString()
  @IsEmail()
  mail!: string;

  @IsInt()
  @Max(5)
  @Min(1)
  rating!: number;
}
