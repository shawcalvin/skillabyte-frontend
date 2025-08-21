import { NextRequest, NextResponse } from "next/server";
import { TokenHandler } from "@/lib/tokens";

export default function middleware(request: NextRequest) {
    return verifyTokens(request);
}

async function verifyTokens(request: NextRequest) {
    const accessToken = request.cookies.get("access")?.value;
    const refreshToken = request.cookies.get("refresh")?.value;

    if (!accessToken || !refreshToken) {
        return reroute('/login', request);
    }

    if (TokenHandler.isExpired(accessToken)) {
        return await refreshTokens(refreshToken, request);
    }

    try {
        await TokenHandler.verifyToken(accessToken);
    }
    catch (error) {
        return reroute('/login', request);
    }

    return NextResponse.next();
}

async function refreshTokens(refreshToken: string, request: NextRequest) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: refreshToken }),
        });

        if (!res.ok) {
            return reroute('/login', request);
        }

        const newTokens = await res.json();
        if (!newTokens) {
            return reroute('/login', request);
        }

        const nextResponse = NextResponse.next();
        nextResponse.cookies.set("access", newTokens.access);
        nextResponse.cookies.set("refresh", newTokens.refresh);

        return nextResponse;
    }
    catch (error) {
        console.error("ERROR REFRESHING TOKENS: ", error)
        return reroute('/login', request);
    }
}

async function reroute(url: string, request: NextRequest) {
    const res = NextResponse.redirect(new URL(url, request.url))
    res.cookies.delete("access");
    res.cookies.delete("refresh");
    return res;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico
         */
        '/learner/(.*)',
        '/facilitator/(.*)'
    ],
}