import { useFormik } from "formik"

function Login() {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <div>
            <h3>Login</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Kullanıcı Adı</label>
                <input type="text" name="username" id="username" onChange={handleChange} value={values.username} />
                <br />
                <label htmlFor="password">Parola</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={values.password} />
                <br />
                <button type="submit">Giriş</button>
            </form>
        </div>
    )
}

export default Login