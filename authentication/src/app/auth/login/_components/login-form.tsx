"use client";
import React, { useState, useTransition } from 'react'
import CardWrapper from '../../../../components/ui/auth/card-wrapper';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginSchema } from '../../../../../schemas';
import { z } from 'zod';
import { Button } from '../../../../components/ui/button';
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { Login } from '../../../../../actions/login';

const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setSuccess("");
        setError("");
        startTransition(() => {
            Login(values)
                .then((data) => {
                    setSuccess(data.success);
                    setError(data.errors);
                })
        });
    }

    return (
        <CardWrapper label={'Welcome back'} backButtonLabel={'Dont have an account ?'} backButtonHref={'/auth/register'}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder='rajider.saggu@gmail.com'
                                        type="email"
                                        disabled={isPending}

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder='************'
                                        type="password"
                                        disabled={isPending}

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormError message={error}>
                    </FormError>
                    <FormSuccess message={success}>
                    </FormSuccess>
                    <Button variant={"default"} type='submit' className='w-full' onClick={() => { }}>Login</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm;
