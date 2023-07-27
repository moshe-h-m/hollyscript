import {ReactNode} from "react";
import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";

// @ts-ignore
import prismadb from '@/lib/prismadb';

export default async function dashbordLayout({children, params}: { children: ReactNode, params: { storeId: string } }) {
    const {userId} = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const store = await prismadb.store.findFirst({where: {id: params.storeId, userId}});

    if (!store) {
        redirect("/");
    }

    return (
        <>
            <div>{/*todo this will be the navbar*/}</div>
            <div>{children}</div>
        </>
    );
};
