"use client"

import { useBoard } from "@/context/user-context";
import { Addcolumn } from "./add-column"
import { Column } from './column';

export const Boardview = () => {
    const { selectedBoard } = useBoard();

    return (
        // <div 
        // className="w-full min-w-0 overflow-x-auto"
        // style={{ paddingLeft: "32px", paddingRight: "32px" }}
        // >
            
            
        //     <div className="flex w-max">
        //         {selectedBoard?.line.map((line) => (
        //             <Column key={line.id} column={line} />
        //         ))}

        //         <Addcolumn />
        //     </div>

        // </div>

        <div 
        className="w-full min-w-0"
        >   
            <div
                className="w-full flex justify-end py-5"
            >
                <Addcolumn />
            </div>
            
             <div
                className="w-full min-w-0 overflow-x-auto"
                style={{
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    paddingBottom: "45px",
                }}
            >
                <div className="flex w-max gap-2">
                    {selectedBoard?.line.map((line) => (
                        <Column
                            key={line.id}
                            column={line}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};