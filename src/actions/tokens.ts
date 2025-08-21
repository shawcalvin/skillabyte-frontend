"use server"

import { cookies } from "next/headers"
import { jwtVerify } from "jose";

export async function getCookie(key: string) {
    const cookie = cookies().get(key);
    return cookie
}

export async function setCookie(key: string, value: string) {
    cookies().set(key, value, {
        httpOnly: false,
        sameSite: 'lax',
        path: '/',
    });
}

export async function removeCookie(key: string) {
    cookies().delete(key);
}

export async function verifyToken(access: string) {
    const secret = process.env.JWT_ENCRYPTION_KEY
    const payload = await jwtVerify(access, new TextEncoder().encode(secret))
    return payload
}