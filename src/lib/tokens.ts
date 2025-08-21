import { decodeJwt } from 'jose';
import { getCookie as getServerCookie, setCookie, removeCookie, verifyToken } from '@/actions/tokens';
import { getCookie as getClientCookie } from 'cookies-next';

interface Payload {
    sub: string;
    iat: number;
    exp: number;
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    is_facilitator: boolean;
    [key: string]: any;
}

class TokenHandler {

    static ACCESS: string = "access";
    static REFRESH: string = "refresh";

    static async getAccessToken() {
        try {
            const token = await getServerCookie(this.ACCESS);
            return token ? token.value : null;
        } catch (error) {
            console.log("Error retrieving access token:", error);
            return null;
        }
    }

    static async getRefreshToken() {
        try {
            const token = await getServerCookie(this.REFRESH);
            return token ? token.value : null;
        } catch (error) {
            console.log("Error retrieving refresh token:", error);
            return null;
        }
    }

    static async setAccessToken(token: string) {
        await setCookie(this.ACCESS, token);
    }

    static async setRefreshToken(token: string) {
        await setCookie(this.REFRESH, token);
    }

    static async setTokens(access: string, refresh: string) {
        await this.setAccessToken(access);
        await this.setRefreshToken(refresh);
    }

    static async removeTokens() {
        await removeCookie(this.ACCESS);
        await removeCookie(this.REFRESH);
    }

    static async verifyToken(token: string) {
        return await verifyToken(token);
    }

    static async verify() {
        const access = await this.getAccessToken();
        if (!access) {
            throw new Error("Unable to retrieve access token.")
        }
        return await this.verifyToken(access);
    }

    static decodeToken(token: string | undefined) {
        if (!token) return null;

        try {
            const payload = decodeJwt(token) as Payload;
            return payload;
        } catch (error) {
            console.error("Error decoding token:", error);
            return null;
        }
    }

    static async decode() {
        const access = await this.getAccessToken();
        if (!access) {
            throw new Error("Unable to retrieve access token.")
        }
        return this.decodeToken(access);
    }

    static isExpired(token: string) {
        const decodedToken = this.decodeToken(token);
        if (!decodedToken) {
            return true;
        }
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp === undefined) {
            return true;
        }

        const expTime = decodedToken.exp - (5 * 60)
        return expTime <= currentTime;
    }

    static async accessIsExpired() {
        const access = await this.getAccessToken();
        if (!access) {
            throw new Error("Unable to retrieve access token.")
        }
        return this.isExpired(access);
    }

    static async refreshIsExpired() {
        const refresh = await this.getRefreshToken();
        if (!refresh) {
            throw new Error("Unable to retrieve refresh token.")
        }
        return this.isExpired(refresh);
    }

    static getUserID(): number {
        const token = getClientCookie(this.ACCESS)?.toString();
        const payload = this.decodeToken(token)
        return payload?.user_id || "";
    }

    static getFirstName(): string {
        const token = getClientCookie(this.ACCESS)?.toString();
        const payload = this.decodeToken(token)
        return payload?.first_name || "";
    }

    static getLastName(): string {
        const token = getClientCookie(this.ACCESS)?.toString();
        const payload = this.decodeToken(token)
        return payload?.last_name || "";
    }

    static getEmail(): string {
        const token = getClientCookie(this.ACCESS)?.toString();
        const payload = this.decodeToken(token)
        return payload?.email || "";
    }

    static getIsFacilitator(): boolean {
        const token = getClientCookie(this.ACCESS)?.toString();
        const payload = this.decodeToken(token)
        return payload?.is_facilitator || false;
    }

    static async getUserIDServer(): Promise<number> {
        const payload = await this.decode();
        return payload ? payload.user_id : null;
    }

    static async getFirstNameServer(): Promise<string> {
        const payload = await this.decode();
        return payload?.first_name || "";
    }

    static async getLastNameServer(): Promise<string> {
        const payload = await this.decode();
        return payload?.last_name || "";
    }

    static async getEmailServer(): Promise<string> {
        const payload = await this.decode();
        return payload?.email || "";
    }

    static async getIsFacilitatorServer(): Promise<boolean> {
        const payload = await this.decode();
        return payload?.is_facilitator || false;
    }
}

export { TokenHandler };
