import { TokenHandler } from '@/lib/tokens';
import { HttpError } from './error';

export interface HttpResponse<T> {
    data: T;
    status: number;
}

export class HttpClient {
    private static baseURL: string = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    private static async getValidToken(): Promise<string> {
        let accessToken = await TokenHandler.getAccessToken();
        if (!accessToken) {
            throw new Error("Failed to retrieve access token");
        }
        return accessToken;
    }

    private static async createConfig(
        requiresAuth: boolean = true,
        options?: { method?: string, body?: any, cache?: 'no-store' | 'force-cache' | 'only-if-cached', keepalive: boolean }
    ): Promise<RequestInit> {
        const config: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
            } as Record<string, string>,
            ...options
        };

        if (requiresAuth) {
            const token = await HttpClient.getValidToken();
            (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
        }

        return config;
    }

    public static async request<T>(
        url: string,
        method: string,
        data?: any,
        requiresAuth: boolean = true,
        cacheOptions?: { cache: 'no-store' | 'force-cache' | 'only-if-cached' }
    ): Promise<HttpResponse<T>> {
        const config = await this.createConfig(requiresAuth, {
            method,
            cache: cacheOptions?.cache,
            body: data ? JSON.stringify(data) : undefined,
            keepalive: true,
        });

        const response = await fetch(`${HttpClient.baseURL}${url}`, config);

        if (!response.ok) {
            const error = await this.createError(response);
            throw error;
        }

        const responseData = await response.json();

        return {
            data: responseData,
            status: response.status
        };
    }

    private static async createError(response: Response): Promise<HttpError> {
        try {
            const errorData = await response.json();
            const errorMessage = errorData.message || `HTTP error! Status: ${response.status}`;
            return new HttpError(errorMessage, errorData, response.status);
        } catch {
            return new HttpError(`HTTP error! Status: ${response.status}`, null, response.status);
        }
    }

    public static async get<T>(url: string, requiresAuth: boolean = true, cacheOptions?: { cache: 'no-store' | 'force-cache' | 'only-if-cached' }): Promise<HttpResponse<T>> {
        return HttpClient.request<T>(url, 'GET', undefined, requiresAuth, cacheOptions);
    }

    public static async post<T>(url: string, data?: any, requiresAuth: boolean = true): Promise<HttpResponse<T>> {
        return HttpClient.request<T>(url, 'POST', data, requiresAuth);
    }

    public static async patch<T>(url: string, data?: any, requiresAuth: boolean = true): Promise<HttpResponse<T>> {
        return HttpClient.request<T>(url, 'PATCH', data, requiresAuth);
    }

    public static async put<T>(url: string, data?: any, requiresAuth: boolean = true): Promise<HttpResponse<T>> {
        return HttpClient.request<T>(url, 'PUT', data, requiresAuth);
    }

    public static async delete<T>(url: string, data?: any, requiresAuth: boolean = true): Promise<HttpResponse<T>> {
        return HttpClient.request<T>(url, 'DELETE', data, requiresAuth);
    }
}