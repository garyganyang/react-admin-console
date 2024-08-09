import {request, http} from "./request";

// 写法1
export function getInfo1() {
    return http.post<InfoRes>("/api/common/getInfo", {
        url: "/api/common/getInfo",
        method: "GET",
    });
}

// 写法2
// 类型安全: TypeScript 使用 Promise<InfoRes> 来确保 Promise 解析后的数据类型是 InfoRes。这提供了类型安全，编译器会检查 InfoRes 类型的对象是否符合预期的结构。
export function getInfo2(): Promise<InfoRes> {
    return request.request({
        url: "/api/common/getInfo",
        method: "GET",
    });
}

interface InfoRes {
    token: string;
}
