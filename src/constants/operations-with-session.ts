import { OPERATIONS } from "./operations.ts";

export const OPERATIONS_WITH_SESSION = [
	OPERATIONS.CREATE_PRODUCT,
	OPERATIONS.LOGOUT,
] as const;
