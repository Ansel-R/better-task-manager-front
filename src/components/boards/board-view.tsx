"use client"

import { useBoard } from "@/context/user-context";
import { Addcolumn } from "./add-column"
import { Column } from './column';

export const Boardview = () =>{
    const { selectedBoard } = useBoard();
    
    return <div className="flex gap-2">
        {
        selectedBoard?.line.map((line)=> <Column column={line}/>)
        }
        
        <Addcolumn/>
    </div>
}