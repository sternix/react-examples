import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "./context";

function Home() {
    const { user } = useAuth()

    return (
        <div>
            <Header />
            App
            {user && (
                <div style={{ padding: 10, border: '1px solid red' }}>
                    <h3>Merhaba {user.name} </h3>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Home