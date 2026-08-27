import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./button"
import { Field, FieldGroup } from "./field"
import { Label } from "./label"
import { Input } from "./input"
import { Textarea } from "./textarea"

export const Newtask = () => {
    return  <div>
    <Dialog>
      <form>
        
        <DialogTrigger asChild>
          <Button className='bg-dark3 min-w-69 min-h-10 text-white-custom rounded-xl border-[1.25px] border-white/6 flex items-center justify-center' 
          variant="outline">+ Add Task</Button>
        </DialogTrigger>

        {/* <DialogContent className="sm:max-w-sm bg-dark2"> */}
        <DialogContent className="max-w-lg max-h-142.75 bg-dark2 p-6 rounded-[20px]">

          <DialogHeader className="">
            <DialogTitle className=" font-semibold text-xl text-white">New Task</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> */}
          </DialogHeader>

          <FieldGroup className="">
            <Field>
              <Label htmlFor="name-1" className="text-white-custom text-xs">TITLE</Label>
              <Input className="pl-4 text-white-custom " id="name-1" name="name" placeholder="Enter task title..." />
            </Field>    
            <Field>
              <Label htmlFor="username-1" className="text-white-custom text-xs">DESCRPTION</Label>
              <Textarea className="pl-4 min-h-30 text-white-custom rounded-xl border border-white/10 bg-transparent text-base focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-primary/44" id="username-1" name="username" placeholder="Add a drescription..." />
              {/* <Textarea className="pl-4 text-white-custom resize-none h-12 rounded-xl w-full min-w-0 border border-white/10 bg-transparent text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-primary/44 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40" placeholder="Add a drescription..."/> */}
            </Field>
            <Field>
              <Label htmlFor="username-1" className="text-white-custom text-xs">STATUS</Label>
              <Input className="text-white-custom " id="username-1" name="username" placeholder="" />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="flex-1 min-h-12 bg-dark3 text-white-custom text-base font-semibold border border-white/10">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="flex-1 min-h-12 bg-dark3 text-white-custom text-base font-semibold border border-white/10">Create Task</Button>
          </DialogFooter>

        </DialogContent>

      </form>
    </Dialog>
</div>
}
