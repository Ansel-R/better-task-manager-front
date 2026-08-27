import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Column } from "@/components/boards/column";
import { Newtask } from "@/components/ui/new-task";
import { Addcolumn } from "@/components/boards/add-column";
import { Boardview } from "@/components/boards/board-view";


export default function Home() {
  return (
    <div className="h-full bg-dark1 flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 flex-col items-center justify-between py-32 px-16 sm:items-start">
        {/* <Button>Button</Button> */}
        {/* <Column/> */}
        {/* <Newtask/> */}
        {/* <Addcolumn/> */}
        <Boardview/>
      </main>
    </div>
  );
}