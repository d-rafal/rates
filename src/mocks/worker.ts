import { setupWorker } from "msw";

import { authHandlers } from "./authHandler";

export const worker = setupWorker(...authHandlers);
