import axios, {
	AxiosError,
	type AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
} from 'axios';
import { getCookie } from './cookies';

export interface ApiResponse<T = any> {
	data?: T;
	error?: string;
	success: boolean;
}

export interface RequestConfig {
	headers?: Record<string, string>;
	params?: Record<string, any>;
	timeout?: number;
	withCredentials?: boolean;
    data?: any;
}

export class ApiClient {
	private axiosInstance: AxiosInstance;
	private baseUrl: string;

	constructor(config: AxiosRequestConfig = {}) {
		this.baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api`;

		this.axiosInstance = axios.create({
			baseURL: this.baseUrl,
			headers: {
				'Content-Type': 'application/json',
				...config.headers,
			},
		});

		this.setupInterceptors();
	}

	private setupInterceptors(): void {
		this.axiosInstance.interceptors.request.use(
			(config) => {
				const token = getCookie('access_token');
				if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
				return config;
			},
			(error) => Promise.reject(error)
		);

		this.axiosInstance.interceptors.response.use(
			(response: AxiosResponse) => response.data,
			(error: AxiosError) => {
				const errorMsg = (error?.response?.data as any)?.error;
				return Promise.reject(new Error(errorMsg));
			}
		);
	}

	async get<T = any>(url: string, config?: RequestConfig): Promise<T> {
		return this.axiosInstance.get<T>(url, config) as Promise<T>;
	}

	async post<T = any>(
		url: string,
		data?: any,
		config?: RequestConfig
	): Promise<T> {
		return this.axiosInstance.post<T>(url, data, config) as Promise<T>;
	}

	async put<T = any>(
		url: string,
		data?: any,
		config?: RequestConfig
	): Promise<T> {
		return this.axiosInstance.put<T>(url, data, config) as Promise<T>;
	}

	async patch<T = any>(
		url: string,
		data?: any,
		config?: RequestConfig
	): Promise<T> {
		return this.axiosInstance.patch<T>(url, data, config) as Promise<T>;
	}

	async delete<T = any>(url: string, config?: RequestConfig): Promise<T> {
		return this.axiosInstance.delete<T>(url, config) as Promise<T>;
	}

    withAuth(token: string): RequestConfig {
        return {
            headers: { Authorization: `Bearer ${token}` }
        }
    }

    withParams(params: Record<string, any>): RequestConfig {
        return { params }
    }

    withFormData(data: FormData): RequestConfig {
        return {
            data,
            headers: { 'Content-Type': 'multipart/form-data' },
        }
    }
}

export const httpClient = new ApiClient();
