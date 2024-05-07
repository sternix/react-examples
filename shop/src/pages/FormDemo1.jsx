import { useState } from "react"

function FormDemo1() {
    const [state, setState] = useState({
        userName: '',
        city: '',
    })

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState({ [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert(state.userName);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>User Name</h3>
                <input name="userName" onChange={handleChange} type="text"></input>
                <h6>User Name is {state.userName}</h6>

                <h3>City</h3>
                <input name="city" onChange={handleChange} type="text"></input>
                <h6>City is {state.city}</h6>

                <input type="submit" value="Save"></input>
            </form>
        </div>
    )
}

export default FormDemo1