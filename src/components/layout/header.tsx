"use client"

import { SidebarTrigger } from "../ui/sidebar"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown, ChevronDown, ChevronUp, Funnel, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { Board, getBoardRequest } from "@/lib/api/board"
import { Newboard } from "../ui/new-board"
import { useBoard } from "@/context/user-context"


export const Header = () => {
    const [boards, setBoards] = useState<Board[]>([]);
    const [error, setError] = useState<string | null>(null);

    const { selectedBoard, updateSelectedBoard } = useBoard();

    
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const data = await getBoardRequest();
        setBoards(data);
        updateSelectedBoard(data[0]);
      } catch (err) {
        setError("Error al obtener los boards");
        console.error(err);
      }
    };

    fetchBoards();
  }, []);

//   if (error) return <p>{error}</p>;


    const changeSelectedBoard = (board:Board) => {
        updateSelectedBoard(board)
    }



    return <div className="flex w-full items-center justify-between py-5 pl-8 pr-8 border border-white/6">
        {/* <SidebarTrigger /> */}
            {/* <p className="min-w-45 min-h-10 flex bg-dark3 text-white py-2 pl-4 pr-11 border-[1.25px] border-white/6 rounded-[10px]">
            Main Board
            <Image
            className=""
            src="/image/vector.svg"
            width={8}
            height={4}
            alt="icon"
            />
            </p> */}
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="bg-dark3 text-white border-[1.25px] border-white/10 rounded-[10px] data-[state=open]:text-white" variant="outline">
                            <p className="">{selectedBoard?.name}</p>
                            <ChevronDown className="text-white-custom" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-dark3 text-white">
                        {
                            boards?.map((board)=>{
                                return(<DropdownMenuItem 
                                className="hover:bg-white-custom/10 cursor-pointer" 
                                onClick={() => {changeSelectedBoard(board)}} 
                                key= {board.id}>
                                {board.name}
                                </DropdownMenuItem>)
                            })
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
                

        <div className="flex">
            {/* <Button className="flex min-w-10 min-h-10 px-4 py-2.5 bg-primary text-dark1 font-semibold border-[1.25px] border-white/6 rounded-[10px]">
                <Plus className="min-w-4 min-h-4 text-dark1"/>
            Add Board
            </Button> */}

            <Newboard/>
            
            {/* <Button className="mx-3 min-w-10 min-h-10 p-2 bg-dark3 text-white-custom !border-[1.25px] !border-white/6 rounded-[10px]">
            <Funnel/>
            </Button>

            <Button className="mr-3 min-w-10 min-h-10 p-2 bg-dark3 text-white-custom !border-[1.25px] !border-white/6 rounded-[10px]">
            <ArrowUpDown />
            </Button>
            
            <Button className="mr-8 bg-primary p-2 min-w-10 min-h-10 text-dark1 rounded-[10px]" variant="outline">
                <p className="font-semibold">JA</p>
            </Button> */}
            

        </div>
        
    </div>
}