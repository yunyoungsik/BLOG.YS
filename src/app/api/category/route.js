import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const categorys = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categorys, {status: 200}))
    } catch(error) {
        console.log(error);
        return new NextResponse(JSON.stringify({message: "error"}, {status: 500}))
    }
}