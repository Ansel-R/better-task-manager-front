import Image from 'next/image'
import { Newtask } from '../ui/new-task'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Field, FieldError, FieldGroup } from '../ui/field'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { createLineRequest } from '@/lib/api/line'
import { useBoard } from '@/context/user-context'
import { Column } from './column';




const formSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters.")
    .max(100, "Title must be at most 32 characters."),
})




export const Addcolumn = () => {


  const [openDialog, setOpenDialog] = useState<boolean>(false);
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  const { selectedBoard, reloadSelectedBoard, fetchBoards } = useBoard();
  

  async function onSubmit(data: z.infer<typeof formSchema>) { 

    try {
      await createLineRequest({
      name: data.title,
      boardId: selectedBoard?.id,
    })

    fetchBoards();
    
    reloadSelectedBoard()

    setOpenDialog(false) 

    } catch (error) {
      toast.error("Error creating column")
    }
  }


  return (
    <Dialog open={openDialog} onOpenChange={()=>{setOpenDialog(!openDialog)}}>
        <DialogTrigger asChild>

          {/* <Button className="flex flex-col items-center justify-center hover:opacity-70 transition-opacity px-25 py-35 min-w-80 min-h-100 bg-transparent rounded-[20px] border-[1.25px] border-white/6">
          
          <div className='p-3 w-fit bg-dark3 rounded-xl '>
          <Plus className='text-white-custom rounded-xl'/>
          </div>
          
          <p className='pt-3 text-white-custom flex items-center justify-center text-base'>Add Column</p>

          </Button> */}

          <Button 
          className="flex w-30 h-10 bg-dark3 text-white-custom border-[1.25px] border-white/10 rounded-[10px]">
          <Plus className="text-white-custom" />
          Add Column
          </Button>


          {/* 
            <Button
              className="flex min-w-10 min-h-10 px-4 py-2.5 bg-primary text-dark1 font-semibold border-[1.25px] border-white/6 rounded-[10px]"
              variant="outline"
              onClick={()=>{setOpenDialog(true)}}
            >
            <Plus className="min-w-4 min-h-4 text-dark1" />
            Add Board
          </Button> */}

        
        </DialogTrigger>

          <DialogContent className="max-w-lg max-h-142.75 bg-dark2 p-6 rounded-[20px]">
          <DialogHeader>
            <DialogTitle className="font-semibold text-xl text-white">
              New Column
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <Label htmlFor="title" className="text-white-custom text-xs">
                  TITLE
                </Label>

                <Input
                  id="title"
                  placeholder="Enter column title..."
                  className="pl-4 text-white-custom"
                  {...form.register("title")}
                />

                <FieldError className="text-red" errors={[form.formState.errors.title]} />
              </Field>
            </FieldGroup>

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 min-h-12 bg-dark3 text-white-custom text-base font-semibold border border-white/10"
                  
                  onClick={()=>{setOpenDialog(false)}}
                >
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type="submit"
                className="flex-1 min-h-12 bg-dark3 text-white-custom text-base font-semibold border border-white/10"
                onClick={() =>
                    toast.success("Column has been created")
                  }
                >
                Create Column
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  )
}