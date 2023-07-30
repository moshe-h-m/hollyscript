import {ReactNode} from "react";
import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";

// @ts-ignore
import prismadb from '@/lib/prismadb';
import Navbar from "@/components/navbar";

export default async function dashbordLayout({
                                                 children,
                                                 params
}: { children: ReactNode,
    params: { storeId: string }
}) {

    const {userId} = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const store = await prismadb.store.findFirst({where: {id: params.storeId, userId: userId}});

    if (!store) {
        redirect("/");
    }

    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};
