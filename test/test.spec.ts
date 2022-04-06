import { SubmitRequest, Vote } from "../api/survey";
import { validate } from "class-validator";
import { Email, EmailRating } from "../api/Email";

describe("Test", () => {
  it("should ", async () => {
    const exampleRequest = new SubmitRequest();
    exampleRequest.email = "night@night.com";
    exampleRequest.votes = [{ id: "1", vote: 5 }];

    expect(await validate(exampleRequest)).toEqual([]);
  });
});

describe("backendTest", () => {
  it.skip("throw error when given wrong email", async () => {
    const mail = new Email();
    mail.mail = "jsdfsdjflsdf";
    const response = await validate(mail);
    expect(response[0].constraints).toEqual({
      isEmail: "mail must be an email",
    });
  });

  it("throw error when given wrong email", async () => {
    const ratingEmail = new EmailRating();
    ratingEmail.mail = "jsdfsdjflsdf";
    ratingEmail.rating = 10;
    const response = await validate(ratingEmail);
    console.log(response);
    expect(response[0].constraints).toEqual({
      isEmail: "mail must be an emai",
    });
  });
});
