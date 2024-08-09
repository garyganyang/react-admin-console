import axios, {AxiosInstance, CreateAxiosDefaults} from "axios";
import Http1Error from "./httpError"

/**
 * 在实际项目中，前端发起的请求会失败，失败的原因有两类：http状态码异常、业务异常，那么我们可以在request.ts中对这两类失败做初步的统一处理。
 * 例如针对http状态码异常，常见的4xx、5xx错误，我们统一拦截，直接给出类似**服务器/网络错误，请联系管理员！**这样的message错误消息提示。
 * 如果http状态码正常，但是业务状态码code异常，我们同样也可以做统一拦截，按照需求对业务异常做前置处理。
 */
const isDev = process.env.NODE_ENV === "development";
const baseUrl = isDev ? "/api" : "/";

export const request: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 30000, // 10 seconds
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
} as CreateAxiosDefaults);

request.interceptors.request.use(
    (req) => {
        req.headers.authorization =
            "Bearer " + localStorage.getItem("ACCESS_TOKEN");
        return req;
    },
    (err) => {
        // err.message
        throw err;
    }
);

request.interceptors.response.use(
    (res) => {
        const {code} = res.data;
        if (code === 401) {
            // window.location.replace("/");
        }
        if (code != "200") {
            // Message.error(res.data.message)
            throw new Http1Error(
                res.data?.message || "网络错误！",
                res.data?.status ? Number(res.data.status) : 0
            );
        }
        return res.data;
    },
    (err) => {
        const {response} = err;
        const {code} = response.data;
        if (code === 401) {
            // window.location.replace("/");
        }
        // err.message
        throw err;
    }
);

export const http = {
    post<T>(url: string, data?: any, config?: any) {
        return request.post(url, data, config) as Promise<T>; //使用范型,代码提示更简便
    },
    get<T>(url: string, config?: any) {
        return request.get(url, config) as Promise<T>; //使用范型,代码提示更简便
    },
};

