import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../button';

const Social = () => {
    return (
        <div className='flex items-center w-full  gap-x-2'>
            <Button size="lg" className='w-full' variant="outline" onClick={() => { }}>
                <FcGoogle size={30} />
            </Button>
            <Button size="lg" className='w-full' variant="outline" onClick={() => { }}>
                <FaGithub size={30}  /> 
            </Button>
        </div>
    )
}

export default Social;
