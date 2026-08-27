import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "./button"
import { Field, FieldError, FieldGroup } from "./field"
import { Label } from "./label"
import { Input } from "./input"
import { Textarea } from "./textarea"



import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { createBoardRequest } from "@/lib/api/board"
import { useState } from "react"

const formSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters.")
    .max(32, "Title must be at most 32 characters."),
  description: z
    .string()
    .min(2, "Description must be at least 2 characters.")
    .max(100, "Description must be at most 100 characters."),
})






export const Newboard = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await createBoardRequest({
      name: data.title,
      description: data.description,
    })
    
    setOpenDialog(false) 
    //TODO Actualizar la lista de los board

    } catch (error) {
      toast.error("Error creating board")
    }
  }


  return (
    <Dialog open={openDialog} onOpenChange={()=>{setOpenDialog(!openDialog)}}>
      <DialogTrigger asChild>
        <Button
          className="flex min-w-10 min-h-10 px-4 py-2.5 bg-primary text-dark1 font-semibold border-[1.25px] border-white/6 rounded-[10px]"
          variant="outline"
          onClick={()=>{setOpenDialog(true)}}
        >
          <Plus className="min-w-4 min-h-4 text-dark1" />
          Add Board
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg max-h-142.75 bg-dark2 p-6 rounded-[20px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-xl text-white">
            New Board
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
                placeholder="Enter board title..."
                className="pl-4 text-white-custom"
                {...form.register("title")}
              />

              <FieldError className="text-red" errors={[form.formState.errors.title]} />
            </Field>

            <Field>
              <Label htmlFor="description" className="text-white-custom text-xs">
                DESCRIPTION
              </Label>

              <Textarea
                id="description"
                placeholder="Add a description..."
                className="pl-4 min-h-30 text-white-custom rounded-xl border border-white/10 bg-transparent text-base focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-primary/44"
                {...form.register("description")}
              />

              <FieldError className="text-red" errors={[form.formState.errors.description]} />
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
                  toast.success("Board has been created")
                }
              >
              Create Board
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}