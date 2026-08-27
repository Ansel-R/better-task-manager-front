
import { getCookie } from "../utils";
import { apiFetch } from "./client";

export type BoardResponse = {
  success: boolean;
  message: string; // o como lo llame tu backend
};

export type BoardPayload = {
  name: string;
  description: string;
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

export type Board = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  line: Line[];
};

export async function createBoardRequest(payload: BoardPayload): Promise<BoardResponse> {
    const token = getCookie ("auth_token")
  return apiFetch<BoardResponse>("/board", {
    method: "POST",
    body: JSON.stringify(payload),
    token: token,
  });
}

export async function getBoardRequest(): Promise<Board[]> {
    const token = getCookie ("auth_token")
  return apiFetch<Board[]>("/board", {
    method: "GET",
    token: token,
  });
}