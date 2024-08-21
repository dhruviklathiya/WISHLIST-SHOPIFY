// app URL from .toml/app/discount/post

import { json } from "@remix-run/node"

export async function loader() {
    return json({
        success: true,
        messgae: "Route got hitted => app/discount/post",
        method: "POST"
    })
}