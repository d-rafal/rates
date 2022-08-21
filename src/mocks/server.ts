import { setupServer } from "msw/node";

import { authHandlers } from "./authHandler";
import { currencyHandler } from "./currencyHandler";

export const server = setupServer(...authHandlers, ...currencyHandler);
