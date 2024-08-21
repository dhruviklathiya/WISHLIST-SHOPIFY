// app URL from .toml/api/discount/post

import { json } from "@remix-run/node"

export async function loader() {
    return json({
        success: true,
        messgae: "Route got hitted => api/discount/post",
        method: "POST"
    })
}