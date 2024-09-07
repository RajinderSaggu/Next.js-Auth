"use client";
import React from 'react'
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
import { RegisterSchema } from '../../../../../schemas';
import { z } from 'zod';
import { Button } from '../../../../components/ui/button';
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';

const RegisterForm = () => {
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        console.log(values);
    }

    return (
        <CardWrapper label={'Create an Account'} backButtonLabel={'Already have an Account ? '} backButtonHref={'/auth/login'}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder='rajinder Saggu'
                                        type="name"

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormError message={"InValid Credentials !"}>
                    </FormError>
                    <FormSuccess message={"SuccessFully LoggedIn !"}>
                    </FormSuccess>
                    <Button variant={"default"} type='submit' className='w-full' onClick={() => { }}>Register</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm;
