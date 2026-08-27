
import { getCookie, setCookie, deleteCookie } from "cookies-next";

const TOKEN_KEY = "auth_token";

export function getToken(): string | null {
  return getCookie(TOKEN_KEY) as string | null;
}

export function saveSession(token: string, expiresAt: string) {
  const expires = new Date(expiresAt);
  setCookie(TOKEN_KEY, token, {
    expires,
    path: "/",
    // secure: true,  // activa esto en producción
    // sameSite: "strict",
  });
}

export function clearSession() {
  deleteCookie(TOKEN_KEY);
}