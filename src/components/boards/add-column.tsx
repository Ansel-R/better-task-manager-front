import Image from 'next/image'
import { Newtask } from '../ui/new-task'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Field, FieldGroup } from '../ui/field'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'

export const Addcolumn = () => {
    return <div>
    <Dialog>
      <form>
        
        <DialogTrigger asChild>
          

        
        <Button className="flex flex-col items-center justify-center hover:opacity-70 transition-opacity px-25 py-35 min-w-80 min-h-100 bg-transparent rounded-[20px] border-[1.25px] border-white/6">
        
        <div className='p-3 w-fit bg-dark3 rounded-xl '>
        <Plus className='text-white-custom rounded-xl'/>
        </div>
        
        <p className='pt-3 text-white-custom flex items-center justify-center text-base'>Add Column</p>

        </Button>



        </DialogTrigger>

        {/* <DialogContent className="sm:max-w-sm bg-dark2"> */}
        <DialogContent className="max-w-lg max-h-142.75 bg-dark2 p-6 rounded-[20px]">

          <DialogHeader className="">
            <DialogTitle className=" font-semibold text-xl text-white">New Column</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> */}
          </DialogHeader>

          <FieldGroup className="">
            <Field>
              <Label htmlFor="name-1" className="text-white-custom text-xs">TITLE</Label>
              <Input className="pl-4 text-white-custom " id="name-1" name="name" placeholder="Enter column title..." />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="flex-1 min-h-12 bg-dark3 text-white-custom text-base font-semibold border border-white/10">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="flex-1 min-h-12 bg-dark3 text-white-custom text-base font-semibold border border-white/10">Create Column</Button>
          </DialogFooter>

        </DialogContent>

      </form>
    </Dialog>
</div>
}