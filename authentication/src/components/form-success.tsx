import React from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';


interface FormSuccessProps {
    message?: string;
}
const FormSuccess = ({
    message
}: FormSuccessProps) => {
    if (!message) return null;
    return (
        <div className='bg-emerald-400/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald'>
            <IoCheckmarkDoneCircleOutline size={26}  color="bg-emerald"/>
            <p>{message}</p>
        </div>
    )
}

export default FormSuccess;
