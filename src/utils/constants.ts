export const TOKEN_KEY_NAME = "token";
export const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
export const TEST_VAR = process.env.NEXT_PUBLIC_TEST_VAR;
export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV;
const IS_SECURE = process.env.NEXT_PUBLIC_SECURE === "true";
const SECURE_PART = IS_SECURE ? "s" : "";
export const GQL_HTTP_API = `http${SECURE_PART}://${API_HOST}`
export const GQL_WS_API = `ws${SECURE_PART}://${API_HOST}`