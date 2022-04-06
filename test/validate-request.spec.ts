import { validate } from "class-validator";
import { Vote, SubmitRequest } from "../dtos/request";

function generateRequest(overrides: { email?: any; votes?: any }) {
  const request = new SubmitRequest();
  request.email =
    overrides.email === undefined ? "mihau@gmail.com" : overrides.email;
  request.votes = overrides.votes === undefined ? [] : overrides.votes;

  return request;
}

test("passes with correct request", async () => {
  const request = generateRequest({});
  expect(await validate(request)).toEqual([]);
});

test("fails without email", async () => {
  const request = generateRequest({ email: null });
  expect(await validate(request)).toEqual([
    expect.objectContaining({
      constraints: {
        isEmail: "email must be an email",
        isString: "email must be a string",
      },
      property: "email",
    }),
  ]);
});

test("fails with incorrect email", async () => {
  const request = generateRequest({ email: "mihaugmail.com" });
  expect(await validate(request)).toEqual([
    expect.objectContaining({
      constraints: {
        isEmail: "email must be an email",
      },
      property: "email",
    }),
  ]);
});

test("fails with empty votes", async () => {
  const request = generateRequest({ votes: null });
  expect(await validate(request)).toEqual([
    expect.objectContaining({
      children: [
        expect.objectContaining({
          constraints: {
            nestedValidation:
              "each value in nested property votes must be either object or array",
          },
          property: "votes",
        }),
      ],
    }),
  ]);
});

test("fails with incorrect answer", async () => {
  const request = generateRequest({ votes: [new Vote()] });
  expect(await validate(request)).toMatchSnapshot();
});
