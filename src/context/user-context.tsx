"use client";

import { Board } from '../lib/api/board';
import { Newboard } from '../components/ui/new-board';


import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";


type BoardContextType = {
  selectedBoard: Board | null;
  updateSelectedBoard: (selectedBoard: Board) => void;
};

const BoardContext = createContext<BoardContextType | undefined>(undefined);

type BoardProviderProps = {
  children: ReactNode;
};

export function BoardProvider({ children }: BoardProviderProps) {
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);

  function updateSelectedBoard(selectedBoard: Board) {
    setSelectedBoard(selectedBoard);
  }

  return (
    <BoardContext.Provider
      value={{
        selectedBoard,
        updateSelectedBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export function useBoard() {
  const context = useContext(BoardContext);

  if (context === undefined) {
    throw new Error(
      "useBoard debe utilizarse dentro de un UserProvider",
    );
  }

  return context;
}