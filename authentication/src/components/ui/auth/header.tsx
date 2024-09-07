import React from 'react'
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SiAuth0 } from 'react-icons/si';


const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
})
interface HeaderProps {
    label: string;
}
const header = ({
    label,
}: HeaderProps
) => {
    return (
        <div className='w-full flex flex-col gap-y-5 items-center'>
            <h1 className={cn("text-3xl font-semibold flex items-center", font.className)}>
                <SiAuth0 />  Auth</h1>
            <p className='text-muted-foreground text-sm'>{label}</p>
        </div>
    )
}

export default header
