import Image from 'next/image'
import { Newtask } from '../ui/new-task'
import { useBoard } from '@/context/user-context';
import { Line } from '@/lib/api/board';

export const Column = ({column}: {column: Line}) => {
    
    return <div className="bg-dark2 rounded-[20px] border-[1.25px] border-white/6 min-w-8   0 min-h-100 p-5">

        <div className='flex items-center justify-between'>
            <Image
            src="/image/columnboards1.svg"
            width={16}  
            height={16}
            alt="icon"
            />
            <p className='text-white-custom pl-2 min-w-48'>{column?.name}</p>
            <p className='min-w-8 flex items-center justify-center text-primary px-2 py-1 rounded-lg bg-dark3'>0</p>
            <Image
            className=''
            src="/image/columnboards2.svg"
            width={16}
            height={16}
            alt="icon"
            />

        </div>
        
        <div className='pt-5'>
            <p className='min-w-64 min-h-69 text-white-custom flex items-center justify-center'>No Task Yet</p>
        </div>
        
        <div className='pt-4'>
            {/* <p className='bg-dark3 min-w-69 min-h-10 text-white-custom rounded-xl border-[1.25px] border-white/6 flex items-center justify-center'>+ Add Task</p> */}
            <Newtask/>
        </div>

    </div>
}