import { json, useLoaderData, Form } from '@remix-run/react';
import { Button, TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export async function loader() {
    // Here we must return json that in future will provided by database
    // Because of database we must make this function async

    // json is imported from @remix-run/react
    return json({
        name: "First-task",
        description: "Given task"
    })
}

export async function action({ request }) {
    // Here we must return json that in future will provided by database
    let data = await request.formData()
    data = Object.fromEntries(data)
    return json({
        status: 200,
        mesaage: "Created successfully",
        data
    })
}

export default function task() {
    const loaded_data = useLoaderData()
    const [data, setData] = useState(loaded_data);
    return (
        <>
            {/* We will use form tag but will not import it from polaris */}
            {/* We will use form tag from @remix-run/react */}
            {/* Reason: Complexity */}
            <Form method='POST'>
                <TextField
                    label="Store name"
                    name="Store name"
                    value={data.name}
                    onChange={(value) => setData({ ...data, name: value })}
                    autoComplete="off"
                />
                <TextField
                    label="Store Description"
                    name="Store Description"
                    value={data.description}
                    onChange={(value) => setData({ ...data, description: value })}
                    autoComplete="off"
                />
                <Button submit={true}>Click for submit</Button>
            </Form>
        </>
    )
}