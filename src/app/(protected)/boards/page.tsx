import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Column } from "@/components/boards/column";
import { Newtask } from "@/components/ui/new-task";
import { Addcolumn } from "@/components/boards/add-column";
import { Boardview } from "@/components/boards/board-view";


export default function Home() {
  return (
    // <div className="h-full min-w-0 bg-dark1 flex flex-col flex-1">
    //         <main className="flex flex-1 min-w-0 flex-col">
    //             <Boardview />
    //         </main>
    //     </div>

    
    <div className="h-full min-w-0 bg-dark1">
            <main className="flex flex-1 min-w-0 flex-col">
                <Boardview />
            </main>
        </div>
    );
}