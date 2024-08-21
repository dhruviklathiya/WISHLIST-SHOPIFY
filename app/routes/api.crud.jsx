// app URL from .toml/api/discount/post

import { json } from "@remix-run/node"
import { request } from "http"

export async function loader() {
    return json({
        success: true,
        messgae: "Route got hitted => api/discount/post",
        method: "POST"
    })
}

// We must hit API with method except GET via API testing softwares
export async function action() {
    const method = request.method
    switch (method) {
        case "POST":
            break;
        case "PATCH":
            break;
        case "UPDATE":
            break;
        case "DELETE":
            break;
    }
}