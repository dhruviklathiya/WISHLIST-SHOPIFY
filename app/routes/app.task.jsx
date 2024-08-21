import { json, useLoaderData } from '@remix-run/react';
import { Button, TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export async function loader() {
    // Here we must return json that in future will provide data from databse
    // Because of database we must make this function async
    return json({
        name: "First-task",
        description: "Given task"
    })
}

export default function task() {
    const loaded_data = useLoaderData()
    const [data, setData] = useState(loaded_data);
    return (
        <>
            <TextField
                label="Store name"
                value={data.name}
                onChange={(value) => setData({ ...data, name: value })}
                autoComplete="off"
            />
            <TextField
                label="Store Description"
                value={data.description}
                onChange={(value) => setData({ ...data, description: value })}
                autoComplete="off"
            />
            <Button submit={true}>Click for submit</Button>
        </>
    )
}