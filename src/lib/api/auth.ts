
import { apiFetch } from "./client";

export type LoginResponse = {
  access_token: string;
  expiresAt: string; // o como lo llame tu backend
};

export type LoginPayload = {
  email: string;
  password: string;
};

export async function loginRequest(payload: LoginPayload): Promise<LoginResponse> {
  return apiFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function refreshRequest(token: string): Promise<LoginResponse> {
  return apiFetch<LoginResponse>("/auth/refresh", {
    method: "POST",
    token,
  });
}