import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const session = await getAuthSession()

    if(!session) {
        return new NextResponse(JSON.stringify({message: "not Authenticated"}, {status: 401}))
    }
    try {
        const body = await req.json();
        const blogPost = await prisma.BlogPost.create({
            data: {...body, userEmail: session.user.email}
        })
        return new NextResponse(JSON.stringify(blogPost, {status: 200}))
    } catch(err) {
        console.log(err);
        return new NextResponse(JSON.stringify({message: "Error : 500"}, {status: 500}))
    }
}