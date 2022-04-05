import { SubmitRequest, Vote } from "../api/survey";
import { validate } from "class-validator";

describe("Test", () => {
  it("should ", async () => {
    const exampleRequest = new SubmitRequest();
    exampleRequest.email = "night@night.com";
    exampleRequest.votes = [{ id: "1", vote: 5 }];

    expect(await validate(exampleRequest)).toEqual([]);
  });
});
