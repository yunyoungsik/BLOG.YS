import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// 상세 페이지
export const GET = async (req, { params }) => {
    const { slug } = params;

    try {
        const post = await prisma.BlogPost.update({
            where: { slug },
            data: { views: { increment: 1 } },
            include: { user: true }
        });

        return new NextResponse(
            JSON.stringify(post, { status: 200 })
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Detail Post Error : 500" }, { status: 500 })
        );
    }
};

export const DELETE = async (req, { params }) => {
    const { slug } = params;

    try {
        await prisma.BlogPost.delete({
            where: { slug },
        });

        return new NextResponse(
            JSON.stringify({ message: "게시글이 삭제되었습니다." }, { status: 200 })
        );
    } catch (err) {
        console.error(err);
        return new NextResponse(
            JSON.stringify({ message: "게시글 삭제 중 오류가 발생했습니다." }, { status: 500 })
        );
    }
};