
import { getCookie } from "../utils";
import { apiFetch } from "./client";

export type LineResponse = {
  success: boolean;
  message: string; // o como lo llame tu backend
};

export type LinePayload = {
  name: string;
  boardId: number|undefined;
};
export type Task = {
  id: number;
  // Agrega aquí las demás propiedades cuando las tengas
};

export type Line = {
  id: number;
  name: string;
  position: number;
  createdAt: string;
  updatedAt: string;
  task: Task[];
};

export async function createLineRequest(payload: LinePayload): Promise<LineResponse> {
    const token = getCookie ("auth_token")
  return apiFetch<LineResponse>("/board/line", {
    method: "POST",
    body: JSON.stringify(payload),
    token: token,
  });
}