import useForm from "../hooks/useForm";

// initialState'deki key'ler ile input'ların name'leri aynı olmalı

function Form() {
    const initialState = {
        email: '',
        password: ''
    }
    const [values, setValues] = useForm(initialState)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={setValues} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={setValues} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form