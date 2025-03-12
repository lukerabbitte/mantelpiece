"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    email: z.string().email({ message: "Must be a valid email." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const LoginForm = ({ login, signup }) => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values) => {
        try {
            const result = await login(values);

            if (result.success) {
                toast.success(result.message);
                // Small delay to ensure toast is visible before redirect
                setTimeout(() => {
                    router.push("/");
                }, 400);
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            console.error(error);
            toast.error("Log in failed :(");
        }
    };

    const onSignup = async (values) => {
        try {
            const result = await signup(values);

            if (result.success) {
                toast.success(result.message);
                // Small delay to ensure toast is visible before redirect
                setTimeout(() => {
                    router.push("/");
                }, 400);
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            console.error(error);
            toast.error("Sign up failed :(");
        }
    };

    return (
        <div className="w-3/4 sm:w-1/2 lg:w-1/3 bg-primary rounded-xl">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 bg-muted p-4 rounded-xl"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-black text-xl">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-secondary-foreground text-secondary"
                                        type="email"
                                        placeholder="Email..."
                                        {...field}
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
                                <FormLabel className="font-black text-xl">Password</FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-secondary-foreground text-secondary"
                                        type="password"
                                        placeholder="Password..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-row items-center justify-center gap-4">
                        <Button
                            size="evenPad"
                            title="Sign In"
                            type="submit"
                            className="transition-all duration-400 hover:opacity-90 hover:scale-105 rounded-full w-fit"
                        >
                            <div className="bg-primary-foreground rounded-full flex justify-center items-center w-fit">
                                <span className="text-foreground text-nowrap px-2.5 py-1 font-black">
                                    Sign In
                                </span>
                            </div>
                        </Button>
                        <Button
                            onClick={form.handleSubmit(onSignup)}
                            size="evenPad"
                            title="Sign Up"
                            type="button"
                            className="transition-all duration-400 hover:opacity-90 hover:scale-105 rounded-full w-fit"
                        >
                            <div className="bg-primary-foreground rounded-full flex justify-center items-center w-fit">
                                <span className="text-foreground text-nowrap px-2.5 py-1 font-black">
                                    Sign Up
                                </span>
                            </div>
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
