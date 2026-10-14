"use client";

import { Board, getBoardIdRequest, getBoardRequest } from '../lib/api/board';
import { Newboard } from '../components/ui/new-board';


import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";


type BoardContextType = {
  selectedBoard: Board | null;
  updateSelectedBoard: (selectedBoard: Board) => void;
  reloadSelectedBoard: () => void;
  boards: Board[];
  fetchBoards: () => void;
};

const BoardContext = createContext<BoardContextType | undefined>(undefined);

type BoardProviderProps = {
  children: ReactNode;
};

export function BoardProvider({ children }: BoardProviderProps) {
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
  const [boards, setBoards] = useState<Board[]>([]);

   
  
  useEffect(() => {
    fetchBoards()
  }, []);

  async function fetchBoards(){
      const data = await getBoardRequest();
      setBoards(data)
    
      if (!selectedBoard) {
    setSelectedBoard(data[0]);
  }

  }


  function updateSelectedBoard(selectedBoard: Board) {
    setSelectedBoard(selectedBoard);
  }

  async function reloadSelectedBoard(){
    const board = await getBoardIdRequest(selectedBoard?.id || 0);
    updateSelectedBoard(board);
  };

  return (
    <BoardContext.Provider
      value={{
        selectedBoard,
        updateSelectedBoard,
        reloadSelectedBoard,
        boards,
        fetchBoards,
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