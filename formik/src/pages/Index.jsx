import { Link } from "react-router-dom"

function Index() {
  return (
    <div>
        <h3>Anasayfa</h3>
        <Link style={{ marginRight:'10px' }} to="/login">Login</Link>
        <Link style={{ marginRight:'10px' }} to="/classnames">ClassNames</Link>
        <Link to="/yup">Yup</Link>
    </div>
  )
}

export default Index