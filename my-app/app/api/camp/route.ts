import { NextResponse } from 'next/server.js';
import { fetchCamp } from "@/utils/actions"

export const GET = async(req:NextResponse)=>{
    const {searchParams} = new URL(req.url)
    const search = searchParams.get('search');
    console.log('====================================');
    console.log(search);
    console.log('====================================');
    const camps = await fetchCamp();
   // return Response.json({camps})
   return NextResponse.redirect(new URL('/',req.url))
}