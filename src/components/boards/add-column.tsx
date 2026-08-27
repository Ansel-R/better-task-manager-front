import Image from 'next/image'
import { Newtask } from '../ui/new-task'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'

export const Addcolumn = () => {
    return <Button className="flex flex-col items-center justify-center hover:opacity-70 transition-opacity px-25 py-35 min-w-80 min-h-100 bg-transparent rounded-[20px] border-[1.25px] border-white/6">
        
        <div className='p-3 w-fit bg-dark3 rounded-xl '>
        <Plus className='text-white-custom rounded-xl'/>
        </div>
        
        <p className='pt-3 text-white-custom flex items-center justify-center text-base'>Add Column</p>

    </Button>
}