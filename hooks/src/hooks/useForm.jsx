import { useState } from "react";

// https://www.30secondsofcode.org/react/s/use-form/

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues)

    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }
    ]
}
