import { NextResponse } from "next/server";

export const middleware = (req:NextResponse) =>{
    console.log('====================================');
    console.log('hello middleware');
    console.log('====================================');
       return NextResponse.redirect(new URL('/',req.url))
};

// config ให้เข้าหน้านั้นๆ ได้หรือไม่ 
export const config = { 
    matcher:'/about/:path*' // ห้ามเข้า 
}