import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import {log} from "util";

export async function POST( req: Request,) {
    try {
		const {userId } = auth();

        const body = await req.json();
        const { name } = body;

        if (!userId) {
            return new NextResponse("unauthorized",{ status: 403 });
        }
        if (!name) {
            return new NextResponse("name is required",{ status: 400 });
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        });

        return NextResponse.json(store);

    } catch (error) {
     	console.log('[STORES_POST] error: ', error);
         return new NextResponse("internal error",{ status: 500 });
    }
}

