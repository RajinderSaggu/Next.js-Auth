"use client";
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../button';
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from '../../../../routes';

const Social = () => {
    // Define the handleClick function
    const handleClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        });
    };

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button size="lg" className="w-full" variant="outline"
                onClick={() => handleClick("google")}
            >
                <FcGoogle size={30} />
            </Button>
            <Button size="lg" className="w-full" variant="outline"
                onClick={() => handleClick("github")}
            >
                <FaGithub size={30} />
            </Button>
        </div>
    );
};

export default Social;
