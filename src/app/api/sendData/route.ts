const URI = "https://script.google.com/macros/s/AKfycbxRcq43wutd3xtlt-1RFJcaNRPfCSKp5LM8GFbWxXWUhXvR96iyh7_lFobUQKnUIt-m/exec";
import { NextResponse } from "next/server";
import { z } from "zod";
export const dynamic = "force-dynamic";
const schema = z.object({
    email: z.string().email(),
    name: z.string().min(1),
    message: z.string().min(1),
})
export const POST = async (req: Request, res: Response) => {
    const { name, email, message } = await req.json();
    const data = schema.safeParse({
        name, email, message
    });
    if (!data.success) {
        return NextResponse.json({
            message: "Data not valid",
            error: data.error.errors
        }, {
            status: 401
        })
    }
    const s = await fetch(URI, {

        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.data)
    });
    return NextResponse.json(await s.json())
}