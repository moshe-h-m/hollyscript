'use client';

import * as z from "zod";
import {Store} from "@prisma/client";
import {Heading} from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Trash} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Form, FormLabel, FormField, FormItem, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

interface SettingsFormProps {
    initialData: Store;
}

const formSchema = z.object({
    name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

export const SettingsForm: React.FC<SettingsFormProps> = ({initialData}) => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm<SettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData

    });

    const onSubmit = async (values: SettingsFormValues) => {
        console.log(values);
    }

    return (
        <>
            <div className='flex items-center justify-between'>
                <Heading
                    title='Settings'
                    description='Manage store preferences'/>
                <Button
                    variant='destructive'
                    size='sm'
                    onClick={() => {
                    }}>
                    <Trash className='h-4 w-4'/>
                </Button>
            </div>
            <Separator/>
            <Form{...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8 w-full'>
                    <div className='grid grid-cols-3 gap-8'>
                        <FormField
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            placeholder='Store name' {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            name="name"/>
                    </div>
                    <Button disabled={loading}
                            className="ml-auto"
                            type="submit">
                        Save changes
                    </Button>
                </form>

            </Form>
        </>
    );
}