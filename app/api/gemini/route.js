import { NextResponse } from "next/server"

export const GET = async (req, res) => {
    return NextResponse.json({ msg: 'hello' })
}