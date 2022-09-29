import { nanoid } from "@reduxjs/toolkit";
import { rest } from "msw";
import { ARTIFICIAL_DELAY_MS } from "./config";

export const sampleUserCredentials = {
  email: "user1@user.com",
  password: "123456",
};

export const authHandlers = [
  rest.post<{ email: string; password: string }>(
    "api/login",
    async function (req, res, ctx) {
      const { email, password } = await req.json();

      if (email !== sampleUserCredentials.email) {
        return res(
          ctx.delay(ARTIFICIAL_DELAY_MS),
          ctx.status(401),
          ctx.json({
            credentialsErrors: {
              wrongEmail: `Incorrect email address, should be ${sampleUserCredentials.email}`,
            },
          })
        );
      } else if (password !== sampleUserCredentials.password) {
        return res(
          ctx.delay(ARTIFICIAL_DELAY_MS),
          ctx.status(401),
          ctx.json({
            credentialsErrors: {
              wrongPassword: `Incorrect password, should be ${sampleUserCredentials.password}`,
            },
          })
        );
      } else {
        return res(
          ctx.delay(ARTIFICIAL_DELAY_MS),
          ctx.json({
            user: {
              name: email.split("@")[0],
              email: email,
              _id: nanoid(),
            },
          })
        );
      }
    }
  ),
];
